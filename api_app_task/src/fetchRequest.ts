export const fetchRequest = async (url:string) => {
    //console.log(url);
    const response = await fetch(url);
    return response.json()
}