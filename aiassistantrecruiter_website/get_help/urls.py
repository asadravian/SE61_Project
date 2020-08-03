from rest_framework import routers
from . api import GetHelpViewset

router = routers.DefaultRouter()
router.register('api/get_help', GetHelpViewset, 'get_help')

urlpatterns = router.urls
