from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .vistas.Register import RegisterView
from .vistas.SearchUser import SearchUserView
from .vistas.AddFriend import AddFriendView
from .vistas.AcceptFriendRequest import AcceptFriendRequestView

urlpatterns = [

    # Friends module
    path('users/<query>/', SearchUserView.as_view(), name='query_users'),
    path('add_friend/<userID>/', AddFriendView.as_view(), name='add_friend'),
    path('accept_friend/<requestID>/', AcceptFriendRequestView.as_view(), name='accept_friend'),

    # Register urls
    path('register/', RegisterView.as_view(), name='register'),
    # path('confirm/', ConfirmView.as_view(), name='confirm'),
    
    # Auth urls
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]