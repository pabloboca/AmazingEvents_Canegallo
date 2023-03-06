import data from "./amazing.js";

const card = document.getElementById("card");
let tarjetas = '';

for(d of data) {
    tarjetas += `
        <div class="card pt-2 shadow" style="width: 15rem;">
            <img src="${d.events.image}" class="card-img-top w-100 h-50 b_shadow" alt="party">
            <div class="card-body text-center">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <span class="card-text pe-2 ps-3">Price: </span>
                <a href="./details.html" class="btn btn-danger b_shadow_button">More</a>
            </div>
        </div>
    `
}
console.log(tarjetas)
