from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)

    # if the user is deleted profile gets deleted
    # but if the profile is deleted then the user still lives
    secondary_email = models.EmailField(max_length=250, null=True)
#     image = models.ImageField(default='default.png', upload_to='profile_pics')
    organization = models.CharField(max_length=250, null=True)
    employee_count = models.IntegerField(null=True)
    office_address = models.TextField(max_length=650, null=True)
    phone_number = models.CharField(max_length=15, null=True)
    membership_plan = models.CharField(max_length=50, null=True)

    def __str__(self):
        return f'{self.user.username} Profile'
