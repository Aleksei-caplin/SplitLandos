from rest_framework import serializers
from server.models import Room, Banner
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    """ Сериализация пользователя """
    class Meta:
        model = User
        fields = ("id", "username")


class RoomSerializer(serializers.ModelSerializer):
    """ Сериализация комнат чата """
    creator = UserSerializer()
    invited = UserSerializer(many=True)

    class Meta:
        model = Room
        fields = ("creator", "invited", "created_at")


class BannerSerializer(serializers.ModelSerializer):
    """ Сериализация баннеров """

    class Meta:
        model = Banner
        fields = ("title", "description", "link", "image")


class BannerListSerializer(serializers.ModelSerializer):
    """ Список баннеров """
    class Meta:
        model = Banner
        fields = ("title", "description", "link", "image")
