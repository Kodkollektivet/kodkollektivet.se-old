from rest_framework import serializers

class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    tel = serializers.CharField(max_length=20)
    text = serializers.CharField()
