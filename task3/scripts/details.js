const queryString = location.search

let params = new URLSearchParams(queryString)

const forId = params.get("id")

const oneEvent = data.events.find(data => data._id == forId)

const container = document.querySelector('#containerCards')
container.innerHTML = `<div class="card mb-4">
            <img src="${oneEvent.image}" alt="${oneEvent.alt}" class="img-top style="width: 18rem; height: 20rem;">
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