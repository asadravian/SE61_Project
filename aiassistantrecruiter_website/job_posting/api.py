from job_posting.models import JobPosting
from job_posting.models import JobDescription
from job_posting.models import JobPostingStatus

from rest_framework import viewsets, permissions

from . serializers import JobPostingSerializer
from . serializers import JobDescriptionSerializer
from . serializers import JobPostingStatusSerializer

from rest_framework import generics
from rest_framework.response import Response



class JobPostingViewset(viewsets.ModelViewSet):
   
    permission_classes = [
        permissions.IsAuthenticated
    ]
   
    serializer_class = JobPostingSerializer

    def get_queryset(self): 
        return self.request.user.job_posting_user_r.all()

    def perform_create(self, serializer): 
        serializer.save(user_reference=self.request.user)



class JobDescriptionViewset(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = JobDescriptionSerializer

    def get_queryset(self):
        my_data=[]
        my_username=self.request.user.id
        for queried_id in JobPosting.objects.raw('SELECT id FROM job_posting_jobposting WHERE user_reference_id=%s', [my_username]):
            id = queried_id
            for query2 in JobDescription.objects.raw('SELECT * FROM job_posting_jobdescription WHERE job_posting_reference_id = %s', [id.id]):
                my_data.append(query2)
        
        return my_data  

    def perform_create(self, serializer):
        job_posting_id = JobPosting.objects.order_by("id").last().id
        recentJobPosting=JobPosting.objects.get(pk=job_posting_id)
        serializer.save(job_posting_reference=recentJobPosting)



class JobPostingStatusViewset(viewsets.ModelViewSet):
    queryset = JobPostingStatus.objects.all()

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = JobPostingStatusSerializer

    def perform_create(self, serializer):
        job_posting_id = JobPosting.objects.order_by("id").last().id
        recentJobPosting=JobPosting.objects.get(pk=job_posting_id)
        serializer.save(job_posting_reference=recentJobPosting)