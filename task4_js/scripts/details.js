function getData() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
    //fetch ("./scripts/amazing.json")
      .then((response) => response.json())
      .then((apiData) => {
        console.log(apiData);
        events = apiData.events;
        console.log(events);
        const queryString = location.search;
        const params = new URLSearchParams(queryString);
        const forId = params.get("id");
        oneCard('#containerCards', events, forId);

      })
      .catch((error) => console.log(error.message));
  }
  
  getData();
  
  
//identifica las cards y las imprime

function oneCard (container, anArray, id) {
  const cardsDetail = document.querySelector(container)
  let oneEvent = anArray.find(events => events._id == id)


return cardsDetail.innerHTML = `<div class="card mb-4">
            <img src="${oneEvent.image}" alt="${oneEvent.alt}">
            <div class="card-body text-center">
            <h5 class="card-title">${oneEvent.name}</h5>
            <p class="card-text">${oneEvent.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                    <p class="price m-0">Price U$S ${oneEvent.price}</p>
                </div>
                </div>
            <div class="card-footer">
                    <div class="d-flex justify-content-between align-items-center">
                        <p><i class="fa-regular fa-calendar"></i>Date: ${oneEvent.date}</p>
                        <p><i class="fa-solid fa-location-dot"></i>Place: ${oneEvent.place}</p>
                        <p><i class="fa-solid fa-building-columns"></i>${oneEvent.category}</p>
                    </div>
                </div>   
        </div>`
}