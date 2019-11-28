from rest_framework import serializers
from server.models import Room, Banner, Chat
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    """ Сериализация пользователя """
    class Meta:
        model = User
        fields = ("id", "username")


class ChatSer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ("id",)


class RoomSerializer(serializers.ModelSerializer):
    """ Сериализация комнат чата """
    creator = UserSerializer()
    invited = UserSerializer(many=True)

    class Meta:
        model = Room
        fields = ("creator", "invited", "created_at")


class ChatSerializers(serializers.ModelSerializer):
    """ Сериализация чата """
    user = UserSerializer()

    class Meta:
        model = Chat
        fields = ("user", "text", "date")


class ChatPostSerializers(serializers.ModelSerializer):
    """ Сериализация чата """

    class Meta:
        model = Chat
        fields = ("room", "text")


class BannerSerializer(serializers.ModelSerializer):
    """ Сериализация баннеров """
    #user = serializers.HiddenField(default=serializers.CurrentUserDefault) #добавляет текущего пользователя в поле
    class Meta:
        model = Banner
        fields = ("title", "description", "link", "image")


class BannerListSerializer(serializers.ModelSerializer):
    """ Список баннеров """
    class Meta:
        model = Banner
        fields = ("title", "description", "link", "image")


class BannerCustomSerializers(serializers.ModelSerializer):
    """ Сериализатор для кастомных баннеров """
    class Meta:
        model = Banner
        fields = ("title", "description", "image", "link")


class BannerCustomPostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = ("title", "link")
