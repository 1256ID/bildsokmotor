let form = document.querySelector('form');
let imageList = document.querySelector('#pictures');

let previousPage = false
let nextPage = false;

form.onsubmit = async event => {
    event.preventDefault();

   
    

    let search = form.search.value; 
    
  
    
    
    
    
    let color = form.color.value;
    let pageNr = 1;
    
    

    let url = "https://pixabay.com/api/?key=33470155-a1510963a99de7f2888f9d89f&q=" + color + "+" + search + "&per_page=10" + "&page=" + pageNr;

    let response = await fetch(url);
    let json = await response.json();

    
    

   

    
    for (let hit of json.hits) {

        let img = document.createElement('img');
        img.src = hit.previewURL;
        let li = document.createElement('li');

        li.appendChild(img);
        imageList.appendChild(li);
    }

    imageList.append(id, preview);

    

    form.search.value = "";
    form.color.value = "";

    nextPage = true;
};


    
