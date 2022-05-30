# REST framework imports
from httplib2 import Authentication
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *

# Model imports
from ..models import Notificacion


class UserNotificationsView(GenericAPIView):
    authorization_classes = (
        Authentication,
    )

    def get(self, request, **kwargs):
        print(request.user)
        print(request.user.pk)
        notifications = Notificacion.objects.filter(propietario=request.user.pk)
        s_notifications = [NotificacionesSerializers(notif).data for notif in notifications]

        return Response({"data": s_notifications, "results": len(s_notifications)}, status=200)
