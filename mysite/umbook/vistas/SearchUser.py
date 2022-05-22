# REST framework imports
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

# Serializers imports
from ..serializers import *

# Model imports
from django.db.models import Q

class SearchUserView(GenericAPIView):
    def get(self, request, query, **kwargs):

        # SQL Syntax:
        # SELECT ... FROM usuario WHERE username ILIKE "%{query}%" OR
        #   first_name ILIKE "%{query}%" OR
        #   last_name ILIKE "%{query}%"
        
        users = Usuario.objects.filter(
            Q(username__icontains=query) | Q(first_name__icontains=query) | Q(last_name__icontains=query)
        )

        # Almacenar usuarios serializados en una lista
        s_list = [UsuarioPreviewSerializer(user).data for user in users]

        return Response({"data": s_list, "results": len(s_list)}, status=200)