import{covidapi} from "./covidapis";
let casesByCountries:any;
const selectedcountrydiv =document.querySelector("#selectedcountry") as HTMLElement;
export const fetchdata= async()=>
{
    
    selectedcountrydiv.style.display="none";
    const datasummaries= await covidapi.getsummary();
    //console.log()
    casesByCountries = datasummaries.Country.sort((a:any, b:any) => b.TotalConfirmed - a.TotalConfirmed)
    const country:HTMLSelectElement = document.querySelector("#country-filter") as HTMLSelectElement;
    country.innerHTML= "<option selected value=''></option>";
    
    
    
    const table = document.getElementById("data") as HTMLTableElement;
    table.innerHTML = `<tr> 
             <th>Country</th>
            <th>TotalConfirmed</th>
            <th>TotalRecovered</th>
            <th>TotalDeaths</th>
       </tr>`

    for (let i = 0; i <casesByCountries.length; i++) {
        const option = document.createElement("option") as HTMLOptionElement;
           option.value = option.text = casesByCountries[i].Country;
           country.append(option);
       const row = `
            <tr>
                <td>${casesByCountries[i].Country}</td>
                <td>${casesByCountries[i].TotalConfirmed}</td>
                <td>${casesByCountries[i].TotalRecovered}</td>
                <td>${casesByCountries[i].TotalDeaths}</td>
            </tr>`
          table.innerHTML += row;
        
    }
}
 export const fetchselectedcountry= async(item:string)=>
 {
        //console.log(item);
        const flagdata=await covidapi.getflag();
       
        const filter =document.querySelector("#selectedcountryfilter") as HTMLSelectElement;
        const tablediv=document.querySelector("#data") as HTMLTableElement;
        
        const country=document.querySelector("#countryName") as HTMLElement;
        const TotalConfirmed=document.querySelector("#TotalConfirmed") as HTMLElement;
        const TotalRecovered=document.querySelector("#TotalRecovered") as HTMLElement;
        const TotalDeaths=document.querySelector("#TotalDeaths") as HTMLElement;
        const NewConfirmed=document.querySelector("#NewConfirmed") as HTMLElement;
        const NewRecovered=document.querySelector("#NewRecovered") as HTMLElement;
        const NewDeaths=document.querySelector("#NewDeaths") as HTMLElement;
        selectedcountrydiv.style.display="block";
        filter.style.display ="none";
        tablediv.style.display="none";
        for(let i=0;i<casesByCountries.length;i++)
        {
            //console.log(flagdata[i].name);
           // console.log(casesByCountries[i].Country);
            if(item==casesByCountries[i].Country )
            {
                country.innerHTML+=casesByCountries[i].Country;
                TotalConfirmed.innerHTML+=casesByCountries[i].TotalConfirmed;
                TotalRecovered.innerHTML+=casesByCountries[i].TotalRecovered;
                TotalDeaths.innerHTML+=casesByCountries[i].TotalDeaths;
                NewConfirmed.innerHTML+=casesByCountries[i].NewConfirmed;
                NewRecovered.innerHTML+=casesByCountries[i].NewConfirmed;
                NewDeaths.innerHTML+=casesByCountries[i].NewDeaths;


            }
            if(flagdata[i].name==item)
            {
                const img =document.createElement("img") ;
                img.src=flagdata[i].flag;
                img.height=100;
              //  img.width= country.offsetWidth;
                country.append(img);
            }
        }



}

