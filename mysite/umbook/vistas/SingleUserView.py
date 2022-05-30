# REST framework imports
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *

# Model imports
from django.core.exceptions import ObjectDoesNotExist


class SingleUserView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )

    def get(self, request, notificationID, **kwargs):

        try:
            # Hacer un get de los modelos y serializarlo
        except ObjectDoesNotExist:
            # En caso de que el usuario no exita
            
        return Response({"data": s_notif, "err": errors}, status=status)

