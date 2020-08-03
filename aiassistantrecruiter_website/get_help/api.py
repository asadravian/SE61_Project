from get_help.models import GetHelp
from rest_framework import viewsets, permissions
from . serializers import GetHelpSerializer

class GetHelpViewset(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GetHelpSerializer

    def get_queryset(self): 
        return self.request.user.get_help_user_r.all()
    
    def perform_create(self, serializer): 
        serializer.save(user_reference=self.request.user)
