from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# User Serializer
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    # fields = ('id', 'username', 'email') # it is used in the api and redux state also has first_name and last_name now
    fields = ('id', 'username', 'email', 'first_name', 'last_name')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    # fields = ('id', 'username', 'email', 'password')
    fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
    user.first_name = validated_data['first_name']
    user.last_name = validated_data['last_name']
    user.save()
    # user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'], validated_data['first_name'], validated_data['last_name']) # this is wrong
    return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")


from user_accounts.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'