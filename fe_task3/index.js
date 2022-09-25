document.getElementById("button").addEventListener('click',getData);


function getData(){
    country=document.getElementById('c1').value;
    let i;

    countries=[];
    cases=[];
    deaths=[];
    recovered=[];

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09b9dfadb2mshf5ba1c16d320933p127796jsn5e4b856101ec',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api',options)
    .then(res=> res.json())
    .then(data=>{
        console.log(data.countries_stat)
        for (i=0;i<288;i++)
        {
            countries.push(data.countries_stat[i].country_name);
            cases.push(data.countries_stat[i].cases);
            deaths.push(data.countries_stat[i].deaths);
            recovered.push(data.countries_stat[i].total_recovered);
        }
       

    })
    .catch(err => console.log(err));

    for(i=0;i<288;i++)
    {
        if(countries[i]==country)
        {
            document.getElementById('noc').innerHTML=`${cases[i]}`;
            document.getElementById('nod').innerHTML=`${deaths[i]}`;
            document.getElementById('norc').innerHTML=`${recovered[i]}`;
        }
    }

}
        // for(i=0;i<228;i++)
        // {
        //     if(country.value == data.countries_stat.country_name[i])
        //     {
        //         output1=country.cases
        //         document.getElementById('noc').innerHTML=output1
        //     }

        // }