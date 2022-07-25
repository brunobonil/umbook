# REST framework imports
from rest_framework.permissions import BasePermission


class IsAdmin(BasePermission):
    """
    Permitir el acceso unicamente a usuario administradores.
    """

    def has_permission(self, request, view):
        return bool(request.user and (request.user.is_admin or request.user.is_staff))