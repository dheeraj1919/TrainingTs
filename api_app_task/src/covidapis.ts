//import {getCovidData} from "./GetData";
import { fetchRequest } from "./fetchRequest";
export const covidapi ={

    getsummary: async ()=> {
        return await fetchRequest(covidApiEndPoints.summary());

    },
    getcontry: async ()=>
    {
        return await fetchRequest(covidApiEndPoints.Country());
    },
    getflag: async ()=>
    {
        return await fetchRequest('https://restcountries.eu/rest/v2/all');
    }
}
const covid_api_base:string= 'https://api.covid19api.com/'

const covidApiEndPoints = {
    summary: () => {
        return getApiPath('summary');
    },
    Country:()=>
    {
        return getApiPath('country');
    }
}
const getApiPath = (end_point:string) => {
    return covid_api_base + end_point
}