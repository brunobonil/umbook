from rest_framework import serializers
from .models import *
from django.contrib.auth.password_validation import validate_password

class UsuarioSerializer(serializers.ModelSerializer):
    """
    Serializador para el modelo Usuario. Utilizado en el registro de usuarios.
    Posee las validaciones necesarias para registrar a un usuario de forma correcta.
    """
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True, validators=[])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Usuario
        fields = '__all__'

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Passwords fields do not match."})
        return attrs

    def create(self, validated_data):
        user: Usuario = Usuario.objects.create(
            username=validated_data["username"],
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            is_active=True
        )

        user.set_password(validated_data["password"])
        user.save()

        return user


class UsuarioPreviewSerializer(serializers.ModelSerializer):
    """
    Serializador para el modelo Usuario. Utilizado para devolver usuarios de la
    base de datos, con sus datos minimos. Muestra unicamente id, username,
    first_name y last_name.
    """
    class Meta:
        model = Usuario
        fields = (
            "pk",
            "username",
            "first_name",
            "last_name"
        )


class UsuarioProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = [
            "pk",
            "username",
            "first_name",
            "last_name",
            "email",
        ]


class NotificacionesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Notificacion
        fields = "__all__"

class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = (
            "pk",
            "nombre",
            "usuario",
            "grupo",
        )

class FotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foto
        fields = "__all__"