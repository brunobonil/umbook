from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .vistas.Register import RegisterView
from .vistas.SearchUser import SearchUserView
from .vistas.AddFriend import AddFriendView
from .vistas.AcceptFriendRequest import AcceptFriendRequestView
from .vistas.UserNotificationsView import UserNotificationsView
from .vistas.SingleNotificationView import SinleNotificationView
from .vistas.ListFriendsView import ListFriendsView
from .vistas.SingleUserView import SingleUserView

urlpatterns = [

    # Notification module
    path('notifications/', UserNotificationsView.as_view(), name='notifications'),
    path('notifications/<notificationID>/', SinleNotificationView.as_view(), name='single_notification'),

    # Friends module
    path('users/<query>/', SearchUserView.as_view(), name='query_users'),
    path('add_friend/<userID>/', AddFriendView.as_view(), name='add_friend'),
    path('accept_friend/<requestID>/', AcceptFriendRequestView.as_view(), name='accept_friend'),
    path('friends/', ListFriendsView.as_view(), name='friends'),

    # get specific user information from a notification
    path('user/<notificationID>/', SingleUserView.as_view(), name='get_user'),

    # Register urls
    path('register/', RegisterView.as_view(), name='register'),
    # path('confirm/', ConfirmView.as_view(), name='confirm'),
    
    # Auth urls
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]