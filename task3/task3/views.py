from xml.dom.minidom import Document
from django.shortcuts import render 
from data.models import dataNew   # from name_of_model import class_name
import requests 
def home(request):
    answer= request.POST.get('text','default')
    response=requests.get('https://api.github.com/users').json()
    counter=dataNew.objects.all().count()
    count1=0
    op1=''
    op2=0
    op3=''
    if request.method=='POST':
        for i in response:
            if(i['login'] == answer):
                op1=i['login']
                op2=i['id']
                op3=i['type']
        letsave=dataNew(login=op1,id_user=op2,type=op3) #variable_name=model_name(field_name=variable_name,....)
        letsave.save()
    for i in response:
        if(i['login'] == answer):
            count1=dataNew.objects.filter(login=answer).count()
            #count1=count1+1

    return render(request,'index.html',{'response':response,'input':answer,'counter':counter,'login_count':count1})

def showData(request):
    if request.method=='GET':
        input_value=request.GET.get('search','default')
        # print(input_value)
       
        data=dataNew.objects.all()
        newFilter1 = dataNew.objects.filter(login=input_value)
        newFilter2 = dataNew.objects.filter(type=input_value)
        #newFilter3 = dataNew.objects.filter(id_user=input_value)
    return render(request,'search.html',{'filters':newFilter1,'filter1':newFilter2})
        