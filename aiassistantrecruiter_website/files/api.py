from .models import File
from rest_framework import viewsets, permissions
from .serializers import FileSerializer
from django.http import HttpResponse

from job_posting.models import JobPosting


class FileViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = FileSerializer
    queryset = File.objects.all()

    def perform_create(self, serializer):
        job_posting_id = JobPosting.objects.order_by("id").last().id
        recentJobPosting=JobPosting.objects.get(pk=job_posting_id)
        serializer.save(job_posting_reference=recentJobPosting)
