let form = document.querySelector('form');
let imageList = document.querySelector('#pictures');

form.onsubmit = async event => {
    event.precentDeafault();

    let search = form.search.value;
    let color = form.color.value;

    let url = "https://pixabay.com/api/?key=33470155-a1510963a99de7f2888f9d89f&q=" + color +"+" + search +"&image_type=photo";

    let response = await fetch(url);
    let json = await response.json();

 }