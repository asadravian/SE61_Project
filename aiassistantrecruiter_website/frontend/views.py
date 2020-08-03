from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie 
def index(request):
    request.META["CSRF_COOKIE_USED"] = True
    return render(request, 'frontend/index.html')