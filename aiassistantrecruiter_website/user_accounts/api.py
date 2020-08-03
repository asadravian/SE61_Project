from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    # user.first_name = request.data['first_name'] # the sent data from signup form can be accessed here but the changes are not saved because we have to go through DRF
    # user.last_name = request.data['last_name']
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

# Login API
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

# Get User API
class UserAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer

  def get_object(self):
    return self.request.user

# class UserAPI(generics.GenericAPIView):
#     def retrieve(request, *args, **kwargs):
#       return self.request.user

#     def update(request, *args, **kwargs):

class UpdateProfile(generics.UpdateAPIView):
    from django.contrib.auth.models import User
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    # def get_queryset(self):
    #   user = self.request.user
    #   return user

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance = self.request.user
        instance.first_name = request.data.get("first_name")
        instance.last_name = request.data.get("last_name")
        instance.save()

        # return Response("User Info Modified")
        User = dict(id=instance.id, username=instance.username, email=instance.email, first_name=instance.first_name, last_name=instance.last_name)
        return Response(User)

        # serializer = self.get_serializer(data=instance)
        # serializer = self.get_serializer(data=request.data)
        # serializer.is_valid(raise_exception=True)
        # self.perform_update(serializer)

        # return Response(serializer.data)
        


from user_accounts.models import Profile
from rest_framework import viewsets
from . serializers import ProfileSerializer

class ProfileViewset(viewsets.ModelViewSet):
   
    # permission_classes = [
    #     permissions.IsAuthenticated
    # ]
   
    serializer_class = ProfileSerializer

    def get_queryset(self): 
        # from django.contrib.auth.models import User
        # return Profile.objects.filter(user=User.objects.get(pk=9)) works but explicit
        return Profile.objects.filter(user=self.request.user) # this is what I wanted
        # return Profile.objects.get(self.request.user)
        # return Profile.objects.get(pk=9)
        # return Profile.objects.get(user=self.request.user)
        # return Profile.objects.all()

    # def perform_create(self, serializer): 
    #     serializer.save(user_reference=self.request.user)