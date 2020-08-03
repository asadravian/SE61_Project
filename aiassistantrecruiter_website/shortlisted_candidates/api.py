from shortlisted_candidates.models import ShortlistedCandidates

from rest_framework import viewsets, permissions

from . serializers import ShortlistedCandidatesSerializer

from job_posting.models import JobPosting

from django.shortcuts import get_object_or_404
from rest_framework.response import Response

class ShortlistedCandidatesViewset(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ShortlistedCandidatesSerializer


    def get_queryset(self): 
        my_data=[]
        my_username=self.request.user.id
        for queried_id in JobPosting.objects.raw('SELECT id FROM job_posting_jobposting WHERE user_reference_id=%s', [my_username]):
            id = queried_id
            for query2 in ShortlistedCandidates.objects.raw('SELECT * FROM shortlisted_candidates_shortlistedcandidates WHERE job_posting_reference_id = %s', [id.id]):
                my_data.append(query2)
        return my_data  
            

    def retrieve(self, request, pk=None):
        queryset = ShortlistedCandidates.objects.all()
        shortlisted_candidate = get_object_or_404(queryset, pk=pk)
        serializer = ShortlistedCandidatesSerializer(shortlisted_candidate)
        return Response(serializer.data)
