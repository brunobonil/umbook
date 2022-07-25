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
        
        requested_user: Usuario = Usuario.objects.get(pk=userID)

        # Controlar si es el propietario
        if request.user == requested_user:
            albums = [Album.objects.filter(usuario=requested_user),]
        else:
            # En caso de no ser el propietario
            groups = Grupo.objects.filter(propietario=requested_user)
            albums = [g.album_set.all() for g in groups if request.user in g.miembros.all()]
            """
            La linea anterior itera sobre los grupos del usuario solicitado y agrega a una lista
            'auxiliar' aquellos en los que el usuario solicitante se encuentre. Por ultimo agrega
            a la lista final (albums) los albums que referencian a los grupos dentro de la lista
            auxiliar. De esta forma queda una lista con los albumes que el usuario solictante tiene
            permiso de ver en base a los grupos en los que se encuentra.
            """
        data = {
            "result": {
                "user": UsuarioProfileSerializer(requested_user).data,
                "albums": [AlbumSerializer(a, many=True).data for a in albums]
            },
            "errors": None,
        }

        return Response(data, status=200)

