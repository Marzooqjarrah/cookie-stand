'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let city = [];
function Cities(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.totalCookiesperDay = 0;
    this.cookiesperhour = [];
    this.customernumber = [];
    city.push(this)

}


Cities.prototype.gitcustomerperhour = function () {

    for (let i = 0; i < 14; i++) {
        this.customernumber.push(random(this.min, this.max));
    }
}
let totals2 = 0;

Cities.prototype.gticookiesperhour = function () {
    for (let i = 0; i < 14; i++) {
        this.cookiesperhour.push(Math.floor(this.customernumber[i] * this.avg));

        this.totalCookiesperDay += this.cookiesperhour[i];
    }
}



let Seattle = new Cities('Seattle', 23, 65, 6.3);
let Tokyo = new Cities('Tokyo', 3, 24, 1.2);
let Dubai = new Cities('Dubai', 11, 38, 3.7);
let Paris = new Cities('Paris', 20, 38, 2.3);
let Lima = new Cities('Lima', 2, 16, 4.6);



let parent = document.getElementById('parent');

let table = document.createElement('table');
parent.appendChild(table);




function makeheader() {

    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);

    let firstTh = document.createElement('th');
    headingRow.appendChild(firstTh);
    firstTh.textContent = "Name"

    for (let i = 0; i < 14; i++) {
        let hoursTH = document.createElement('th');
        headingRow.appendChild(hoursTH);
        hoursTH.textContent = hours[i];
    }




    let lastTh = document.createElement('th');

    headingRow.appendChild(lastTh);
    lastTh.textContent = 'total daily';


}

Cities.prototype.render = function () {
    let dataRow = document.createElement('tr');

    table.appendChild(dataRow);

    let nameTd = document.createElement('td');

    dataRow.appendChild(nameTd);

    nameTd.textContent = this.name;

    for (let i = 0; i < 14; i++) {
        let cookiesTd = document.createElement('td');

        dataRow.appendChild(cookiesTd);

        cookiesTd.textContent = this.cookiesperhour[i];
    }

    let totalTd = document.createElement('td');
    dataRow.appendChild(totalTd);

    totalTd.textContent = this.totalCookiesperDay;

}




function makefooter() {

    let footerRow = document.createElement('tr');
    footerRow.setAttribute('id', 'total');
    table.appendChild(footerRow);

    let firstTh = document.createElement('th');
    footerRow.appendChild(firstTh);

    firstTh.textContent = 'Totals';


    let totalOfTotals = 0;

    for (let i = 0; i < 14; i++) {
        console.log(hours[i]);

        let totalForEachHour = 0;

        for (let j = 0; j < city.length; j++) {
            totalForEachHour += city[j].cookiesperhour[i];

            totalOfTotals += city[j].cookiesperhour[i];
        }

        console.log(totalForEachHour);


        let footerTh = document.createElement('th');
        footerRow.appendChild(footerTh);

        footerTh.textContent = totalForEachHour;

    }


    let lastTh = document.createElement('th');

    footerRow.appendChild(lastTh);

    lastTh.textContent = totalOfTotals;


}




console.log(city);

makeheader();

for (let i = 0; i < city.length; i++) {
    city[i].gitcustomerperhour();
    city[i].gticookiesperhour();
    city[i].render();
}


makefooter();






let form =document.getElementById('form');

form.addEventListener('submit', submitter);

function submitter (event) {
event.preventDefault();
// console.log(event);

let name = event.target.Name.value;
console.log(name);

let min = event.target.min.value;
console.log(min);


let max = event.target.max.value;
console.log(max);

let avg= event.target.avg.value;
console.log(avg);


let newstory = new Cities (name, min, max, avg);
 newstory.gitcustomerperhour();
 newstory.gticookiesperhour();
 newstory.render();
 console.log(newstory);
document.getElementById('total').remove();

makefooter();
}


// let newRow = document.getElementById("lastTh").remove();

// let lastRow= document.createElement('newRow');

// lastRow.appendChild(table);








    












        