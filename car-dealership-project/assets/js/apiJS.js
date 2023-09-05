const myForm = document.getElementById("myForm");
const modelInput = document.querySelector('input[type="value"]');
const carList = document.getElementById("carList");

myForm.addEventListener('submit',function(e){
    e.preventDefault();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '87e9a88e83mshf14e7d418d015e4p18607djsn6cfb7939a142',
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
    };
    fetch(`https://car-data.p.rapidapi.com/cars?limit=8&page=0&make=${modelInput.value}`, options)
        .then(response => response.json())
        .then(response => {
            // clear previous search results
            carList.innerHTML = "";
            // create a new list element for each car object
            response.forEach(car => {
                const carItem = document.createElement("li");
                carItem.setAttribute("class","displayCar");
                const carKeyDiv = document.createElement("div");
                const carValueDiv = document.createElement("div");
                carKeyDiv.classList.add("car-key");
                carValueDiv.classList.add("car-value");
                // create a string of all key-value pairs for this car
                Object.keys(car).forEach(key => {
                    carKeyDiv.innerHTML += `${key}<br>`;
                    carValueDiv.innerHTML += `${car[key]}<br>`;
                });
                carItem.appendChild(carKeyDiv);
                carItem.appendChild(carValueDiv);
                carList.appendChild(carItem);
            });
        })
        .catch(err => console.error(err));
});
