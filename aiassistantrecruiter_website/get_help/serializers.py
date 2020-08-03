from rest_framework import serializers
from get_help.models import GetHelp

class GetHelpSerializer(serializers.ModelSerializer):
    class Meta:
        model = GetHelp
        fields = '__all__'
