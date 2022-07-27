# REST framework imports
from sre_constants import AT_LOC_BOUNDARY
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# Serializers imports
from ..serializers import *

class CreateAlbumView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )

    def post(self, request, **kwargs):

        usuario = request.user
        grupo = Grupo.objects.get(pk=request.data['grupo'])
        data = {
            "nombre": request.data['nombre'],
            "usuario": usuario.pk,
            "grupo": grupo.pk,
        }

        album_s = AlbumSerializer(data=data)
        print(album_s)
    
        if album_s.is_valid():
            album_s.save()
            return Response(status=200, data=album_s.data)
        else:
            return Response(status=400)