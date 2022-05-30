# REST framework imports
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *

# Model imports
from ..models import Notificacion
from django.core.exceptions import ObjectDoesNotExist


class SinleNotificationView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )

    def get(self, request, notificationID, **kwargs):

        try:
            notif = Notificacion.objects.get(pk=notificationID)
            s_notif = NotificacionesSerializers(notif).data
            errors = None
            status = 200
        except ObjectDoesNotExist:
            s_notif = None
            errors = "Notification does not exist."
            status = 404
            
        return Response({"data": s_notif, "err": errors}, status=status)

