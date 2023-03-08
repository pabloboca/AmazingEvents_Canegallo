import data from "./amazing.js"
const card = document.getElementById("card")
let tarjetas = ''

for (let d of data.events) {
    if (d.date > data.currentDate) {
        tarjetas += `
            <div class="card pt-2 mb-4 shadow" style="width: 15rem;">
                <img src="${d.image}" class="card-img-top w-100 b_shadow altura ofc" alt="party">
                <div class="card-body text-center">
                    <h5 class="card-title">${d.name}</h5>
                    <p class="card-text">${d.description}</p>
                </div>
                <div class="card-footer d-flex justify-content-around align-items-center">
                    <span class="card-text ">Price: ${d.price}</span>
                    <a href="./details.html" class="btn btn-danger b_shadow_button">Details</a>
                </div>
            </div>
        `
    }
}

card.innerHTML = tarjetas