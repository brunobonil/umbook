# REST framework imports
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *

# Model imports
from ..models import Notificacion


class DenyFriendRequestView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )

    def get(self, request, requestID, **kwargs): 
        friend_request: Notificacion = Notificacion.objects.get(pk=requestID).delete()
        return Response({
            "msg": "Request denied",
            })