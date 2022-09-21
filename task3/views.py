from xml.dom.minidom import Document
from django.shortcuts import render 
from data.models import dataNew # from name_of_model import class_name
import requests 
def home(request):
    # url='https://corona-virus-world-and-india-data.p.rapidapi.com/api'
    # headers = {
	# "X-RapidAPI-Key": "09b9dfadb2mshf5ba1c16d320933p127796jsn5e4b856101ec",
	# "X-RapidAPI-Host": "corona-virus-world-and-india-data.p.rapidapi.com"
    # }
    # response = requests.request("POST",url , headers=headers).json()
    # country=response.get('countries_stat')
    #return render(request,'index.html',{'response':country,'input':input})
    
    answer= request.POST.get('text','default')
    response=requests.get('https://api.github.com/users').json()
    if request.method=='POST':
        # op1=request.POST.get('data1')
        # print(op1)
        # op2=request.POST.get('data2')
        # op3=request.POST.get('data3')
        # op4=request.POST.get('data4')
        # letsave=dataNew(login=op1,id_user=op2,type=op3,nodeid=op4) #variable_name=model_name(field_name=variable_name,....)
        letsave=dataNew(login=answer)
        letsave.save()
        DataId=dataNew.objects.get(login='ezmobius').count()
        print(DataId)
    return render(request,'index.html',{'response':response,'input':answer})