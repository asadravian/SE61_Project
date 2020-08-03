from rest_framework import serializers

from job_posting.models import JobPosting
from job_posting.models import JobDescription
from job_posting.models import JobPostingStatus

class JobPostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosting
        fields = '__all__'

class JobDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobDescription
        fields = '__all__'

class JobPostingStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPostingStatus
        fields = '__all__'