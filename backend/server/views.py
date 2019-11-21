from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from server.models import Banner

from server.models import Room
from server.serializers import RoomSerializer, BannerSerializer, BannerListSerializer


class Rooms(APIView):
    """ Комната чата """

    def get(self, request):
        rooms = Room.objects.all()
        serializer = RoomSerializer(rooms, many=True)
        return Response({"data": serializer.data})


class BannerCreateView(generics.CreateAPIView):
    """ Создание баннера на главной странице """
    serializer_class = BannerSerializer
    queryset = Banner.objects.all()


class BannerListView(generics.ListAPIView):
    """ Список баннеров на главной странице """
    serializer_class = BannerListSerializer
    queryset = Banner.objects.all()


class BannerDetailView(generics.RetrieveUpdateDestroyAPIView):
    """ Создание, удаление, обновление баннера """
    serializer_class = BannerSerializer
    queryset = Banner.objects.all()

