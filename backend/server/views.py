from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from server.models import Banner
from server.permissions import IsOwnerOrReadOnly
from rest_framework.permissions import AllowAny, IsAuthenticated
from server.models import Room, Chat
from server.serializers import *


class Rooms(APIView):
    """ Комната чата """

    def get(self, request):
        rooms = Room.objects.all()
        serializer = RoomSerializer(rooms, many=True)
        return Response({"data": serializer.data})


class Dialog(APIView):
    """Диалог чата, сообщение"""
    permission_classes = (AllowAny, )
    # permission_classes = [permissions.AllowAny, ]

    def get(self, request):
        room = request.GET.get("room")
        chat = Chat.objects.filter(room=room)
        serializer = ChatSerializers(chat, many=True)
        return Response({"data": serializer.data})

    def post(self, request):
        # room = request.data.get("room")
        dialog = ChatPostSerializers(data=request.data)
        if dialog.is_valid():
            dialog.save(user=request.user)
            return Response(status=201)
        else:
            return Response(status=400)


class Dialog1(generics.CreateAPIView):
    serializer_class = ChatPostSerializers
    #queryset = Chat.objects.all()
    permission_classes = (AllowAny,)


class BannerCreateView(generics.CreateAPIView):
    """ Создание баннера на главной странице """
    serializer_class = BannerSerializer
    queryset = Banner.objects.all()
    permission_classes = (AllowAny,)


class BannerListView(generics.ListAPIView):
    """ Список баннеров на главной странице """
    serializer_class = BannerListSerializer
    queryset = Banner.objects.all()
    permission_classes = (AllowAny, )


class BannerDetailView(generics.RetrieveUpdateDestroyAPIView):
    """ Создание, удаление, обновление баннера """
    serializer_class = BannerSerializer
    queryset = Banner.objects.all()
    #permission_classes = (IsOwnerOrReadOnly, ) # проверка на то что редактирует тот кто создал

