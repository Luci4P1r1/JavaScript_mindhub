console.log([document])

const eventsContainer = document.querySelector('#containerCards')
const newEvent = saveByDate (data.currentDate)

let generateCards = pushCards(data.events)

eventsContainer.innerHTML = generateCards

function saveByDate(date) {
    const dateEvent = new Date(date);
    return dateEvent;
  }

function pushCards(arrData){
    let eventsCards =  '';
    if (arrData.length == 0) {
      return `<p>No results found. Try other search filters :)</p>`;
    }
    for (const event of arrData) {
    const eventDate = saveByDate (event.date);
    if (eventDate >= newEvent) {
      arrData.map(
        (event) =>
        (eventsCards += `<div class="card h-100 border-primary" style="width: 18rem; height: 20rem; ">
           <img src="${event.image}" alt="${event.alt}">
        <div class="card-body container text-center">
          <h5 class="card-title flew-grow-1">${event.name}</h5>
              <p class="card-text flex-grow-1">${event.description}</p>
              <div class="btn-group d-flex space-between">
                <button type="button" class="btn btn-light">Price $${event.price}</button>
                <a href='./details.html?id=${event._id}'>See more</a>
              </div>
            </div>
        </div>`
    ))
        
    return eventsCards
}}}

// traer categorías

let eventsCategories = document.getElementById("checkbox");
eventsCategories.innerHTML = showCategories(getCategory(data.events));

function getCategory(arrData) {
  let allCategories = [];
  arrData.forEach((element) => {
    if (allCategories.indexOf(element.category) < 0) {
      allCategories.push(element.category);
    }
  });
  return allCategories.sort();
}

//mostrar categorías 

function showCategories(arrData) {
  let categories = "";
  arrData.map(
    (category) =>
      (categories += `<div class="form-check form-check-inline" id="checkbox">
      <input class="form-check-input" type="checkbox" id="checkbox" value="${category}">
      <label class="form-check-label" for="checkbox">${category}</label></div>`)
  );
  return categories;
}


// buscador

let searchEvent = document.getElementById("search-input");

searchEvent.addEventListener("keyup", (e) => {
eventsContainer.innerHTML = "";

  let events = data.events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchEvent.value.toLowerCase()) ||
      event.description.toLowerCase().includes(searchEvent.value.toLowerCase())
  );
  eventsContainer.innerHTML = pushCards(events);
});

//filtro por checkbox
let checkboxEvents = document.querySelectorAll(".form-check-input");

let checked = []
checkboxEvents.forEach(checkbox => {
    checkbox.addEventListener("click", ()=> {
        if(checkbox.checked === true){
            checked.push(checkbox.value);
            checkedCategoryCards(checked)
        }
        else
        {
            checked = checked.filter(category => category !== checkbox.value);
            checkedCategoryCards(checked)
          }  
        })
    } );
  
  function checkedCategoryCards(checked) {
          let checkEventCards = [];
          checked.forEach(category => {
                  const checkedEventList = data.events.filter(event => event.category == category);
                  checkedEventList.forEach(event => checkEventCards.push(event));
  
          });
         
  
          eventsContainer.innerHTML = pushCards(checkEventCards);
};
