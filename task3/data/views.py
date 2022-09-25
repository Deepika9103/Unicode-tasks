from django.shortcuts import render
from .models import dataNew
from .filters import dataNewFilter
# Create your views here.
def showData(request):
    db_data = dataNew.objects.all()
    return render(request,'index.html',{'data':db_data})

def displaying(request):
    myfilter = dataNewFilter()
    return render(request,'index.html',{'filters':myfilter})
