const containerCards = document.querySelector('#containerCards')

let generateCards = pushCards(data.events)

containerCards.innerHTML = generateCards

function pushCards(arrayData){
    let newCards =  '';
    for (const event of arrayData) {
        newCards += `<div class="card h-100 border-primary bg-primary-gradient" style="width: 18rem; height: 20rem; ">
           <img src="${event.image}" alt="${event.alt}">
        <div class="card-body container text-center">
          <h5 class="card-title flew-grow-1">${event.name}</h5>
              <p class="card-text flex-grow-1">${event.description}</p>
              <div class="btn-group d-flex space-between">
                <button type="button" class="btn">Price $${event.price}</button>
              <a href="details.html">See more</a>
              </div>
            </div>
        </div>`
        }
    return newCards
}
