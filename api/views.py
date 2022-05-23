import imp
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from yaml import serialize
from .models import Note
from .serializers import NoteSerializer
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint':'/notes/',
            'method':'GET',
            'body':None,
            'description':"array of notes"

        }
    ]
    return Response(routes)

@api_view(['GET'])
def listNotes(request):
    notes=Note.objects.all()
    serializer=NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getNote(request,id):
    note=Note.objects.get(id=id)
    serializer=NoteSerializer(note, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def createNote(request):
    data=request.data
    note=Note.objects.create(body=data['body'], name=data['name'])
    serializer=NoteSerializer(note,many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def updateNote(request, id):
    data=request.data
    note=Note.objects.get(id=id)
    serializer=NoteSerializer(instance=note, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(request, id):
    note=Note.objects.get(id=id)
    note.delete()
    return Response('note is deleted')





