# REST framework imports
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *


class ShowUserProfileView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )

    def get(self, request, userID, **kwargs):
        # Controlar si es el propietario

        # En caso de no ser el propietario
        requested_user: Usuario = Usuario.objects.get(pk=userID)
        groups = Grupo.objects.filter(propietario=requested_user)
        albums: list(Album) = [g.album_set.all() for g in groups if request.user in g.miembros.all()]
        
        """
        Equivalente al one-liner:

        allowed_groups = []
        for group in groups:
            members = group.miembros.all()
            if request.user in members:
                allowed_groups.append(group)

        """
        print(f"\n\n\n\n{albums}\n\n\n\n")

        data = {
            "result": {
                "user": UsuarioProfileSerializer(requested_user).data,
                "albums": [AlbumSerializer(a, many=True).data for a in albums]
            },
            "errors": None,
        }

        

        return Response(data, status=200)

