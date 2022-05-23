# REST framework imports
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *


class AddFriendView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )


    def post(self, request, userID, **kwargs):

        emisor = request.user
        propietario = Usuario.objects.get(pk=userID)

        data = {
            "emisor": emisor.pk,
            "propietario": propietario.pk,
            "contenido": "Solicitud de amistad",
        }

        notif = NotificacionesSerializers(data=data)

        if notif.is_valid():
            notif.save()
            return Response({
                    "msg": "Request sent succesfully",
                    "emisor": request.user.username,
                    "propietario": propietario.username,
            })

        else:
            return Response({
                "msg": "Failed sending request",
                "err": notif.errors,
            })
