const BASE_URL = 'https://pixabay.com/api/';
const KEY = '22269810-55457156398dac84727ab5964';
const perPage = '12';
let page = 1;

function fetchImages(searchImages) {
  return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchImages}&page=${page}&per_page=${perPage}&key=${KEY}`)
  .then(response => {   
    if(response.ok) {      
    return response.json();
    }     
  }).then((response) => { 
    incrementPage();    
    console.log(response.hits); 
    return response.hits;
  });    
}

function incrementPage() {  
  return page += 1;
}

const api = {
  fetchImages
}

export default api;