from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class JobPosting(models.Model):
    job_title = models.CharField(max_length=200)
    vacancy_count = models.IntegerField()
    applicants_count = models.IntegerField(null=True, blank=True)
    screening_ideal_fit_progress = models.IntegerField(null=True, blank=True)
    upload_source = models.CharField(max_length=200, null=True, blank=True)
    post_date = models.DateTimeField(auto_now_add=True)
    user_reference = models.ForeignKey(User, related_name='job_posting_user_r', on_delete=models.CASCADE, null=True)


class JobDescription(models.Model):
    from job_posting.models import JobPosting
    relevant_skillset = models.TextField()
    skillset_gravity=models.DecimalField(max_digits=3, decimal_places=2, default=0)
    preferred_institution = models.TextField(null=True, blank=True) # 1. blank=True for django to accept empty string value passed 2. null=True to allow database to accept empty and null value 
    education_background = models.TextField()
    required_education_level = models.TextField()
    education_gravity=models.DecimalField(max_digits=3, decimal_places=2, default=0)
    relevant_experience = models.TextField()
    experience_gravity=models.DecimalField(max_digits=3, decimal_places=2, default=0)
    relevant_professional_certifications = models.TextField(null=True, blank=True)
    age_requirement = models.TextField(null=True, blank=True)
    held_position = models.TextField(null=True, blank=True)
    job_posting_reference = models.ForeignKey(JobPosting, related_name='job_description_posting_r', on_delete=models.CASCADE, null=True)

class JobPostingStatus(models.Model):
    from job_posting.models import JobPosting
    is_deleted = models.BooleanField()
    is_current = models.BooleanField()
    is_completed = models.BooleanField()
    job_posting_reference = models.ForeignKey(JobPosting, related_name='job_status_posting_r', on_delete=models.CASCADE, null=True)




