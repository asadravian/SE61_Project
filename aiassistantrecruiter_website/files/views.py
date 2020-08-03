from django.shortcuts import render
from django.http import HttpResponse
from files.functions import handle_uploaded_files

from django.views.decorators.csrf import requires_csrf_token, ensure_csrf_cookie

@ensure_csrf_cookie
def index(request):
    if request.method == 'POST':
        request.META["CSRF_COOKIE_USED"] = True
        # loop for storing files in local server
        for i in range(len(request.FILES)):
            handle_uploaded_files(request.FILES['file' + str(i)])
        return HttpResponse('Success: Uploaded Successfully')
    else:
        return HttpResponse('App:Files>Views: Request is not coming [No File Sent To Server] [Request method other than POST]')