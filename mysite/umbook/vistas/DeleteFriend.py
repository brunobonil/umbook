# REST framework imports
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Serializers imports
from ..serializers import *


class DeleteFriendView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )


    def delete(self, request, userID, **kwargs):

        emisor = request.user
        friendToDelete = Usuario.objects.get(pk=userID)

        # elimino de la lista de amigos del emisor
        emisorFriends = emisor.amigos.all()
        emisorFriendsNew = emisorFriends.exclude(pk=friendToDelete.pk)
        emisor.amigos.set(emisorFriendsNew)

        # tengo que modificar la lista de amigos de cada uno
        
        #elimino de la lista de amigos del amigo que borre desde el emisor tb 
        friendToDeleteFriends = friendToDelete.amigos.all()
        friendToDeleteFriendsNew = friendToDeleteFriends.exclude(pk=emisor.pk)
        friendToDelete.amigos.set(friendToDeleteFriendsNew)


        data = {
            "result":{},
            "errors":None
        }

        return Response(data, status=200)