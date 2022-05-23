# REST framework imports
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *

# Model imports
from ..models import Notificacion


class AcceptFriendRequestView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )

    def post(self, request, requestID):
        friend_request: Notificacion = Notificacion.objects.get(pk=requestID)

        if friend_request.propietario == request.user:
            friend_request.emisor.amigos.add(friend_request.propietario)
            friend_request.propietario.amigos.add(friend_request.emisor)
            friend_request.delete()

            return Response({
                "msg": "Friends added",
                "friends": [
                    friend_request.emisor.username,
                    friend_request.propietario.username
                ]
            })
        
        else:

            return Response({
                "msg": "Failed to add friends",
                "err": "Authentication error"
            })