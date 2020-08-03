from django.urls import path, re_path
from . import views # to import our views

urlpatterns = [
    path('', views.index),
]