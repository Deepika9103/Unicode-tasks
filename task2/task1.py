def func1(a,b):
    value={}
    while(a<b):
        i=list(bin(a))
        #print(f"the number is {a} the binary value is {i}")
        for items in range(len(i)-1):
                if(i[items]=='1' and i[items+1]=='1'):
                    value.update({a:"true"})
                    break
                else:
                    value.update({a:"false"})
                    continue
            

        a=a+1
    print(value)
    return value
