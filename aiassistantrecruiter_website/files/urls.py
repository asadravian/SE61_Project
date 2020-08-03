from django.urls import path
from . import views

from rest_framework import routers
from .api import FileViewSet

urlpatterns = [
    
    path('files/', views.index),

]

router = routers.DefaultRouter()
router.register('api/files', FileViewSet, 'files')
urlpatterns += router.urls