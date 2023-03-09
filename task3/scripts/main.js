
const currentDate = data.currentDate;
const eventData = data.events;
//función que muestra todas las cartas de eventos 

console.log([document])

const containerCards = document.querySelector('#containerCards')

let generateCards = pushCards(data.events)

containerCards.innerHTML = generateCards

function pushCards(arrayData){
    let newCards =  '';
    if (arrayData.length > 0){
      arrayData.forEach(event => {
        newCards += `<div class="card h-100 border-primary bg-primary-gradient" style="width: 18rem; height: 20rem; ">
           <img src="${event.image}" alt="${event.alt}">
        <div class="card-body container text-center">
          <h5 class="card-title flew-grow-1">${event.name}</h5>
              <p class="card-text flex-grow-1">${event.description}</p>
              <div class="btn-group d-flex space-between">
                <button type="button" class="btn">Price $${event.price}</button>
              <a href="./details.?id=${event._id}">See more</a>
              </div>
            </div>
        </div>`
        });
      containerCards.innerHTML = newCards
      } else {
        containerCards.innerHTML = "<p>There are no results. Try modifying the search filters :)</p>"
      }
    }

//buscador por filtros

pushCards(data.events)


let searchBar = document.querySelector("#searchImput")
console.log (searchBar)
searchBar.addEventListener("change",()=>{
  let cards=data.events
  let filterCards= cards.filter((card)=> card.name.toLowerCase().includes(search.value.toLowerCase()))
  console.log(filterCards)
  }
)

//document.getElementById("searchButton").addEventListener("click", () => {})
 
// Obtener el valor del imput de búsqueda
 //let filterBy= document.getElementById("searchImput").value.toUpperCase();

 // Filtrar las tarjetas que contienen el término de búsqueda en el nombre o descripción
 //let filteredCards = data.events.filter(event =>event.name.toLowerCase().includes(filterBy) || event.description.toLowerCase().includes(filterBy)
 


/*
let search = document.getElementById("#search")

pushCards (data.events)

search.addEventListener("changes",()=>{
  container.Card.innerHTML=""
  let ev=data.events

  let filterCards = ev.filter((fCards)=> fCards.category.toLowerCase().includes(buscador.value.toLowerCase()))
    pushCards (filterCards);
})*/

var checkboxes = document.querySelectorAll(
  "#checkbox");

 /**Crear un array con las categorías seleccionadas
var categoryCheck = [];
checkboxes.forEach(function (checkbox) {
  if (checkbox.checked) {
    categoryCheck.push(checkbox.id);
  }
});

.addEventListener("click",()=>{
  let categoryCheck= checkbox.filter((checkbox)=> card.preventDefault().includes(search.value))
})

/*function viewingCategories() {

  const 1 = document.querySelector("idcheckbox")

  let 2 = ''
  let 3 = eventData.map(ev => ev.category)
 
  let 4 = new Set (3)
  
 4.forEach(eventcategory => {
      2 += `<div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${eventcategory}">
      <label class="form-check-label" for="inlineCheckbox1">${eventcategory}</label>
  </div>`
  });
  
  1.innerHTML = 2;
  
}*/