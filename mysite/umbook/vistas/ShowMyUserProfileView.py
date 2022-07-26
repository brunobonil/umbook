from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *


class ShowMyUserProfileView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )

    def get(self, request, userName, **kwargs):
        
        requested_user: Usuario = Usuario.objects.get(username=userName)

        albums = [Album.objects.filter(usuario=requested_user),]

        
        data = {
            "result": {
                "user": UsuarioProfileSerializer(requested_user).data,
                "albums": [AlbumSerializer(a, many=True).data for a in albums]
            },
            "errors": None,
        }

        return Response(data, status=200)

