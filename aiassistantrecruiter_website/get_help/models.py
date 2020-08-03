from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class GetHelp(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    post_date = models.DateTimeField(auto_now_add=True)
    help_type = models.TextField(max_length=10)
    user_reference = models.ForeignKey(User, related_name='get_help_user_r', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title
