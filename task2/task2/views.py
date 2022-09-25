from django.http import HttpResponse
from task1 import func1

def index(request):
    return HttpResponse('Hello world')

def answer(request,a,b):
    return HttpResponse ("the output is %s"%func1(a,b))



