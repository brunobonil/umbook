# REST framework imports
from rest_framework.generics import RetrieveUpdateAPIView, ListCreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *

# Permission imports
from ..permissions.IsAdmin import IsAdmin


class AdminSingleUserView(RetrieveUpdateAPIView):
    """
    Vista que permite realizar operaciones de:
        - Lectura
        - Modificacion

    Sobre una instancia de usuario especifica, la cual
    es obtenida mediante el campo 'pk'
    """
    permission_classes = (
        IsAuthenticated,
        IsAdmin,
    )

    queryset = Usuario.objects.filter(is_admin=False)
    serializer_class = UsuarioAdminSerializer
    lookup_url_kwarg = "userID"


class AdminUserListCreateView(ListCreateAPIView):
    """
    Vista que permite operaciones de:
        - Listado de todos los usuario
        - Creacion de una instancia de usuario
    """
    permission_classes = (
        IsAuthenticated,
        IsAdmin,
    )

    queryset = Usuario.objects.filter(is_admin=False)

    def get_serializer_class(self):
        if self.request.method == "GET":
            return UsuarioAdminSerializer
        else:
            return UsuarioSerializer