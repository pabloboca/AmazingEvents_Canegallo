import data from "./amazing.js";


const card = document.getElementById("card")


let tarjetas = '';

for (let d of data.events) {
    tarjetas += `
        <div class="card pt-2 shadow" style="width: 15rem;">
            <img src="${d.image}" class="card-img-top w-100 h-50 b_shadow" alt="party">
            <div class="card-body text-center">
                <h5 class="card-title">${d.name}</h5>
                <p class="card-text">${d.description}</p>
                <span class="card-text pe-2 ps-3">Price: ${d.price}</span>
                <a href="./details.html" class="btn btn-danger b_shadow_button">More</a>
            </div>
        </div>
    `
}

card.innerHTML = tarjetas