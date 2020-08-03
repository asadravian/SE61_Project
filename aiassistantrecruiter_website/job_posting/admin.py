from django.contrib import admin
from .models import JobDescription, JobPosting, JobPostingStatus
# Register your models here.
all_job_posting_models = [JobDescription, JobPosting, JobPostingStatus]  # made a list of all the models because register function can take iterable list
admin.site.register(all_job_posting_models)