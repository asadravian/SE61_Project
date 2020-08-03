from django.db import models
from job_posting.models import JobPosting

class File(models.Model):
    file_name = models.CharField(max_length=100)
    job_posting_reference = models.ForeignKey(
        JobPosting, related_name='files_job_posting_r', on_delete=models.CASCADE, null=True)