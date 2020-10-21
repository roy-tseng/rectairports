export const fetchJsonData = async (url) => {
    url = 'https://cors-anywhere.herokuapp.com/'+url
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json ; charset=UTF-8',
            'Access-Control-Allow-Origin':'*'
          }
    });
    
    return await response.json();
}

const FetchHelpers = {
    FetchJSONHelper : fetchJsonData
}

export default FetchHelpers;

