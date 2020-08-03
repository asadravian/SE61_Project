from rest_framework import serializers

from shortlisted_candidates.models import ShortlistedCandidates

class ShortlistedCandidatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortlistedCandidates
        fields = '__all__'