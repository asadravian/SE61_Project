# use it because you wann use default paths by the rest_framework
from rest_framework import routers
from . api import ShortlistedCandidatesViewset

from django.urls import path
from . import views

urlpatterns = [
    path('ai_algorithm_running/', views.index),
    path('ai_algorithm_progress/', views.get_progress),
    path('send_email/', views.send_email),
    path('send_custom_email/', views.send_custom_email),
    path('send_whatsapp_msg/', views.send_whatsapp_msg),
    path('send_sms/', views.send_sms),
]

router = routers.DefaultRouter()
router.register('api/shortlisted_candidates',
                ShortlistedCandidatesViewset, 'shortlisted_candidates')


urlpatterns += router.urls  # for router to give the urls that are registered above
