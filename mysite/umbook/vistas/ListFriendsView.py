# REST framework imports
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *


class ListFriendsView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )


    def get(self, request, **kwargs):
        friends = request.user.amigos.all()

        s_friends = [UsuarioPreviewSerializer(friend).data for friend in friends]
        return Response(s_friends, status=200)
