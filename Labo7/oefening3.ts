const fetch = require('node-fetch');

const doFetch = async()=>{
    let pageNumber = 1;
        while(true){
            let response = await fetch('https://icanhazdadjoke.com/search?term=dog&limit=5&page=' + pageNumber, {
            headers: {
                'Accept': 'application/json'
            }
        });
        let json = await response.json();
        json.results.forEach((j:any)=>console.log(j.joke));
        if(json.next_page <= pageNumber){
            break;
        }
        pageNumber++;
    }
    
}

doFetch();

export{};