from django.db import models
from django.contrib.auth.models import User
#from djoser.urls.base import User

# Create your models here.


class Room(models.Model):
    """ Модель комнаты чата """
    creator = models.ForeignKey(User, verbose_name="Создатель комнаты", on_delete=models.CASCADE)
    invited = models.ManyToManyField(User, verbose_name="Участники ", related_name="invited_users")
    created_at = models.DateTimeField("Дата создания", auto_now_add=True, auto_now=False)

    class Meta:
        verbose_name = 'Комната чата'
        verbose_name_plural = 'Комнаты чата'


class Chat(models.Model):
    """ Модель чата """

    room = models.ForeignKey(Room, verbose_name="Комната чата", on_delete=models.CASCADE)
    user = models.ForeignKey(User, verbose_name="Пользователь", on_delete=models.CASCADE)
    text = models.TextField("Сообщение", max_length=500)
    date = models.DateTimeField("Дата создания чата", auto_now_add=True)

    class Meta:
        verbose_name = "Сообщение чата"
        verbose_name_plural = "Сообщения чатов"





class Banner(models.Model):
    title = models.CharField(verbose_name="Название баннера", max_length=50)
    description = models.CharField("Описание баннера", max_length=150, blank=True)
    link = models.CharField("Ссылка", max_length=150, blank=True)
    image = models.ImageField("Картинка", upload_to="banner", blank=True)

    class Meta:
        verbose_name = 'Слайд'
        verbose_name_plural = 'Слайды'
