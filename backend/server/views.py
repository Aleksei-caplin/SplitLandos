from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from server.models import Banner
from server.permissions import IsOwnerOrReadOnly
from rest_framework.permissions import AllowAny, IsAuthenticated
from server.models import Room, Chat
from django.shortcuts import get_object_or_404
from server.serializers import *


class Rooms(APIView):
    """ Комната чата """

    def get(self, request):
        rooms = Room.objects.all()
        serializer = RoomSerializer(rooms, many=True)
        return Response({"data": serializer.data})


class Dialog(APIView):
    """Диалог чата, сообщение"""
    permission_classes = [permissions.IsAuthenticated, ]
    # permission_classes = [permissions.AllowAny, ]

    def get(self, request):
        if request.GET.get("room"):
            room_id = request.GET.get("room")
        else:
            room_id = 1

        chat = Chat.objects.filter(room=room_id)
        serializer = ChatSerializers(chat, many=True)
        return Response({"data": serializer.data})

    def post(self, request):
        #room = request.data.get("room")
        dialog = ChatPostSerializers(data=request.data)
        print(dialog)
        if dialog.is_valid():
            dialog.save(user=request.user)
            return Response({"status": "Add"})
        else:
            return Response({"status": "Error1"})


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


class BannerDetailView(APIView):
    """ Просмотр баннера по id """

    permission_classes = [permissions.AllowAny, ]

    def get(self, request, pk):
        item = get_object_or_404(Banner, pk=pk)
        serializer = BannerSerializer(item)
        return Response(serializer.data)

    # serializer_class = BannerSerializer
    # queryset = Banner.objects.all()
    # #permission_classes = (IsOwnerOrReadOnly, ) # проверка на то что редактирует тот кто создал


class BannerCustom(APIView):
    """ Кастомный вариант страницы бпннера """
    def get (self, request):
        banners = Banner.objects.all()
        serializer = BannerCustomSerializers(banners, many=True)
        return Response(serializer.data)

    def post(self, request):
        print("**********************************************************")
        #serializer = BannerCustomPostSerializers(data=request.data)


