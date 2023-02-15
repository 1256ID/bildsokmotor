let form = document.querySelector('form');
let imageList = document.querySelector('#pictures');
let buttons = document.querySelector('.navButtons');

form.onsubmit = async event => {
    event.preventDefault();

    let search = form.search.value; 
     
    let color = form.color.value;
    let pageNr = 1;
    

    empty(imageList);


    let url = "https://pixabay.com/api/?key=33470155-a1510963a99de7f2888f9d89f&q=" + color + "+" + search + "&per_page=10" + "&page=" + pageNr;

    let response = await fetch(url);
    let json = await response.json();

    importResults(json);

    form.search.value = "";
    form.color.value = "";

    nextPage = true;

    if (nextPage === true) {

        let navButtonPrevious = document.createElement('button');
        let navButtonNext = document.createElement('button');

        navButtonPrevious.textContent = "Previous Page";
        navButtonNext.textContent = "Next page";

        buttons.appendChild(navButtonPrevious);
        buttons.appendChild(navButtonNext);

        navButtonNext.onclick = async event => {
            event.preventDefault();

            empty(imageList);

            pageNr++;
            let url = "https://pixabay.com/api/?key=33470155-a1510963a99de7f2888f9d89f&q=" + color + "+" + search + "&per_page=10&page=" + pageNr;

            let response = await fetch(url);
            let json = await response.json();

            importResults(json);
        
        };

        navButtonPrevious.onclick = async event => {

            event.preventDefault();

            empty(imageList);
            pageNr--;
            let url = "https://pixabay.com/api/?key=33470155-a1510963a99de7f2888f9d89f&q=" + color + "+" + search + "&per_page=10&page=" + pageNr;

            let response = await fetch(url);
            let json = await response.json();

            importResults(json);
        
        }
    };
}

function createGallery() {

}

function empty(element) {
    while (element.firstElementChild) {
        element.firstElementChild.remove();
    }
}


function importResults (json)  {

       for (let hit of json.hits) {
   
           let img = document.createElement('img');
           img.src = hit.webformatURL;
           let li = document.createElement('li');
   
           li.appendChild(img);
           imageList.appendChild(li);
        }
   
}