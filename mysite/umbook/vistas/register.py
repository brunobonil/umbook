# REST framework imports
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

# Serializers imports
from ..serializers import *

class RegisterView(GenericAPIView):
    """
    Vista para el registtro de usuarios en la aplicacion.
    Las comprobaciones son realizadas por el serializador,
    UsuarioSerializer.
    """

    serializer_class = UsuarioSerializer
    def post(self, request, **kwars):
        s = UsuarioSerializer(data=request.data)

        if s.is_valid():
            s.save()
            return Response({"msg": "Registration done succesfully"}, status=200)
        else:
            return Response({"msg": "Error during registration", "err": s.errors}, status=500)

