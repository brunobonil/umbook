from operator import truediv
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..serializers import AlbumSerializer, FotoSerializer

from ..models import Album, Foto, Grupo


class ViewAlbumView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )

    def get(self, request, albumID):

        album : Album = Album.objects.get(pk = albumID)
        if request.user == album.usuario:
            photosList = Foto.objects.filter(album=albumID)

        else:
            grupo: Grupo = Grupo.objects.get(pk = album.grupo.pk)
            member = [member for member in grupo.miembros.all() if(member==request.user)]
            if member:
                photosList = Foto.objects.filter(album=albumID)
            else:
                return Response(status=401)

        data = {
            "result": {
                "album": AlbumSerializer(album).data,
                "photosList": FotoSerializer(photosList, many=True).data,
            }
        }

        return Response(data, status=200)
    