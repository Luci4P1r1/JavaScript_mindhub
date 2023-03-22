const eventsContainer = document.querySelector(".containerCards");
let checkboxes = document.getElementById("checkbox");
const search = document.getElementById('search-input');
let apiData = [];

console.log (apiData);
function getData() {
  fetch('https://mindhub-xj03.onrender.com/api/amazing')
  //fetch ('./scripts/amazing.json')
    .then((response) => response.json())
    .then((apiData) => {
      pastEvents = apiData.events.filter(
        (event) => event.date < apiData.currentDate
      );
      console.log(apiData);
      pushCards(pastEvents, eventsContainer);
      getCategory(pastEvents, checkboxes);
      checkboxEvents('input[type="checkbox"]');
      console.log(pastEvents);
    })
    .catch((error) => console.log(error.message));
}
getData();

//imprime cards y si no identifica ninguna que coincida con la búsqueda devuelve mensaje

function pushCards(arrData, container) {
  let eventsCards= '';

  if (arrData.length > 0) {
 arrData.map((event) =>{eventsCards += `<div class="card h-100 border-primary" style="width: 18rem; height: 20rem; ">
  <img src="${event.image}" alt="${event.alt}">
<div class="card-body container text-center">
 <h5 class="card-title flew-grow-1">${event.name}</h5>
     <p class="card-text flex-grow-1">${event.description}</p>
     <div class="btn-group d-flex space-between">
       <button type="button" class="btn btn-light">Price $${event.price}</button>
       <a href='./details.html?id=${event._id}'>See more</a>
     </div>
   </div>
</div>`});

 return container.innerHTML = eventsCards;
}
   else{
    return  container.innerHTML =`<p>No results found. Try other search filters :)</p>`
   }

};
//atrapar categorias

function getCategory(arrData, container) {
  let allCategories = [];

  arrData.forEach((event) => {
    // si no existe en el array, agrega el elemento
    if (allCategories.indexOf(event.category) < 0) {
      allCategories.push(event.category);
    }
  });
  //ordena:
  //let ordererCategories = allCategories.sort();

  let categories = "";

  allCategories.forEach(
    (category) =>
  (categories += `<div class="form-check form-check-inline" id="checkbox">
  <input class="form-check-input" type="checkbox" id="checkbox" value="${category}">
  <label class="form-check-label" for="checkbox">${category}</label></div>`)
);
return container.innerHTML = categories;
}


//checkboxes

function checkboxEvents(container){
  let categoryCheck = document.querySelectorAll(container);
  categoryCheck.forEach((category)=>category.addEventListener('change', filterCheck))
  console.log(categoryCheck)
}



function filterCheck(e) {
  console.log(e)
  let categoryCheck = document.querySelectorAll('input[type="checkbox"]')
  let selectedCheck = Array.from(categoryCheck).filter((item) => item.checked).map((item) => item.value)
  let filtered = pastEvents.filter(event => selectedCheck.includes(event.category))
  console.log(filtered)
  if(selectedCheck.length > 0){
    return pushCards(filtered, eventsContainer)
  }
  else{
 return  pushCards(pastEvents, eventsContainer)
  }
 
}
//buscador

/*function searchEvents(container){

  let search = document.querySelector(container);
  search.addEventListener("keyup",filterSearch)
  console.log(search)
}*/

function filterSearch(e) {
  console.log(e)
  let result =  search.value.toLowerCase()
  let filteredEvents = pastEvents.filter(event => event.name.toLocaleLowerCase().startsWith(result) ||
  event.description.toLowerCase().startsWith(result) ||
  event.category.toLowerCase().startsWith(result));
  console.log(filteredEvents);
   return  pushCards(filteredEvents, eventsContainer)
}
search.addEventListener('keyup', filterSearch)


