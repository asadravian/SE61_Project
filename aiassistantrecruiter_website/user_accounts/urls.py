from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI, UpdateProfile
from knox import views as knox_views

from django.contrib.auth import views as auth_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/user/<int:pk>/', UpdateProfile.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('reset_password/', auth_views.PasswordResetView.as_view(template_name="user_accounts/password_reset.html"),
         name='reset_password'),
    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(template_name="user_accounts/password_reset_sent.html"),
         name='password_reset_done'),
    path('reset/<uidb64>/<token>', auth_views.PasswordResetConfirmView.as_view(template_name="user_accounts/password_reset_form.html"),
         name='password_reset_confirm'),
    path('reset_password_complete/',
         auth_views.PasswordResetCompleteView.as_view(template_name="user_accounts/password_reset_done.html"), name='password_reset_complete'),
]


# Steps to Reset Email:
# 1. Submit Email Form
# 2. Email Sent Success Message
# 3. Link to Password Reset Form in the Email Provided by User
# 4. Password Successfully Changed Message

# accounts/password_change/done/ [name='password_change_done']
# accounts/password_reset/ [name='password_reset']
# accounts/password_reset/done/ [name='password_reset_done']
# accounts/reset/<uidb64>/<token>/ [name='password_reset_confirm']
# accounts/reset/done/ [name='password_reset_complete']


from rest_framework import routers # use it because you wanna use default paths by the rest_framework
from . api import ProfileViewset


router = routers.DefaultRouter()
router.register('api/profile', ProfileViewset, 'profile')

urlpatterns += router.urls # for router to give the urls that are registered above