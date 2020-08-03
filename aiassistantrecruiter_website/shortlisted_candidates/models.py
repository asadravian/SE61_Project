from django.db import models
from django.contrib.auth.models import User
from job_posting.models import JobPosting

# Create your models here.

class ShortlistedCandidates(models.Model):
    candidate_image = models.ImageField(default='default.jpg')
    candidate_name = models.CharField(max_length=300, null=True)
    candidate_email = models.EmailField(default=None, null=True)
    candidate_phone = models.CharField(max_length=300, null=True)
    candidate_institute = models.CharField(max_length=500, null=True)
    candidate_degree = models.CharField(max_length=500, null=True)
    candidate_cgpa = models.FloatField(null=True)
    candidate_match = models.FloatField(null=True)
    candidate_location = models.CharField(max_length=400, null=True)
    candidate_gender = models.CharField(max_length=200, null=True)
    candidate_resume_path = models.CharField(max_length=100, null=True)
    job_posting_reference = models.ForeignKey(JobPosting, related_name='shortlisted_candidates_posting_r', on_delete=models.CASCADE, null=True )