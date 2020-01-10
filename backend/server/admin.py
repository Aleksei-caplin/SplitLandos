from django.contrib import admin
from server.models import *


class RoomAdmin(admin.ModelAdmin):
    """ Комнаты чата """
    list_display = ("creator", "invited_user", "created_at")

    def invited_user(self, obj):
        return "\n".join([user.username for user in obj.invited.all()])


admin.site.register(Room, RoomAdmin)


@admin.register(Chat)
class ChatAdmin(admin.ModelAdmin):
    """ Комната чата """
    list_display = ([field.name for field in Chat._meta.fields])


@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    """ Слайдер """
    list_display = ([field.name for field in Banner._meta.fields])


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    """ Новости """
    list_display = ([field.name for field in News._meta.fields])

