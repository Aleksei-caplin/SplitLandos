from django.contrib import admin
from django.urls import path, re_path
from rest_framework import serializers
from server.views import *

urlpatterns = [
    path('room/', Rooms.as_view()),
    path('dialog/', Dialog.as_view()),
    path('baner_custom/', BannerCustom.as_view()),
    path('banners/detail/<int:pk>/', BannerDetailView.as_view()),
    path('banners/create/', BannerCreateView.as_view()),
    path('banners/', BannerListView.as_view()),
    path('news/create/', NewsCreateView.as_view()),
    path('news/', NewsList.as_view()),
]
