
from django.http import Http404
from django.core.mail import send_mail

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from .serializers import ContactSerializer

class ContactApiView(APIView):
    """
    Contact APIView
    """
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        
        serializer = ContactSerializer(data=request.data)
        
        if serializer.is_valid():
            send_mail('Contact: %s' % request.data['name'],
                      '''
                      \n
                      --------------------------------
                      \n
                      Name: %s \n
                      Email: %s \n
                      Tel: %s \n
                      Note: %s \n \n
                      --------------------------------
                      ''' %(
                          request.data['name'],
                          request.data['email'],
                          request.data['tel'],
                          request.data['text'],
                      ),
                      'jherrlin@gmail.com',
                      ['jherrlin@gmail.com'],
                      fail_silently=False
                      )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
