from tokenize import group
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from ..models import Grupo
from ..serializers import GrupoSerializer


class ListGroups(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )

    def get(self, request):

        userID = request.user.pk
        print(userID)
        groups = Grupo.objects.filter(propietario=userID)
        data={
            "result":{
                "userID": userID,
                "groups": GrupoSerializer(groups, many=True).data
            }
        }
        return Response(status=200, data=data)

