from django.contrib import admin
from .models import GetHelp
# Register your models here.
all_get_help_models = [GetHelp]  # made a list; register function can take iterable list
admin.site.register(all_get_help_models)
