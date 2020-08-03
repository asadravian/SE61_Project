from rest_framework import routers # use it because you wanna use default paths by the rest_framework
from . api import JobPostingViewset
from . api import JobDescriptionViewset
from . api import JobPostingStatusViewset


router = routers.DefaultRouter()
router.register('api/job_posting', JobPostingViewset, 'job_posting')
router.register('api/job_description', JobDescriptionViewset, 'job_description')
router.register('api/job_posting_status', JobPostingStatusViewset, 'job_posting_status')


urlpatterns = router.urls # for router to give the urls that are registered above
