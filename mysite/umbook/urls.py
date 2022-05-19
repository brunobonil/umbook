from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .vistas.register import RegisterView

urlpatterns = [

    # Register urls
    path('register/', RegisterView.as_view(), name='register'),
    # path('confirm/', ConfirmView.as_view(), name='confirm'),
    
    # Auth urls
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]