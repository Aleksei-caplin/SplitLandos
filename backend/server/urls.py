from django.contrib import admin
from django.urls import path
from rest_framework import serializers
from server.views import Rooms, BannerCreateView, BannerListView, BannerDetailView, Dialog, Dialog1

urlpatterns = [
    path('room/', Rooms.as_view()),
    path('dialog/', Dialog.as_view()),
    path('banners/detail/<int:pk>/', BannerDetailView.as_view()),
    path('banners/create/', BannerCreateView.as_view()),
    path('banners/', BannerListView.as_view()),
]
