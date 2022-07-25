# REST framework imports
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *

# Model imports
from django.core.exceptions import ObjectDoesNotExist
from ..models import Notificacion, Usuario


# 'user/<notificationID>/'
class SingleUserView(GenericAPIView):

    permission_classes = (
        IsAuthenticated,
    )

    def get(self, request, notificationID, **kwargs):

        try:
            print('single user view')
            notif = Notificacion.objects.get(pk=notificationID)
            s_notif = NotificacionesSerializers(notif).data
            emisor_id = s_notif['emisor']
            emisor = Usuario.objects.get(id=emisor_id)
            s_emisor = UsuarioSerializer(emisor).data
            errors = None
            status = 200
        except ObjectDoesNotExist:
            s_notif = None
            errors = "User does not exist."
            status = 404
            
        return Response({"data": s_emisor, "err": errors}, status=status)

