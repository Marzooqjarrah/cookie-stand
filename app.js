'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let city=[];
function Cities(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.totalCookiesperDay=0;
   this.cookiesperhour= [];
    this.customernumber= [];
city.push(this)

}


Cities.prototype.gitcustomerperhour = function () {

    for (let i = 0; i < 14; i++) {
        this.customernumber.push(random(this.min, this.max));
    }
}
let totals2=0;

Cities.prototype.gticookiesperhour = function () {
    for (let i = 0; i < 14; i++) {
        this.cookiesperhour.push(Math.floor(this.customernumber[i] * this.avg));

        this.totalCookiesperDay+=this.cookiesperhour[i];
    }






// Cities.prototype.cookies(x, y) = function () {
//     let value = x * y;
//     value = Math.floor(value);
//     return value;
// }


let Seattle = new Cities('Seattle', 23, 65, 6.3);
let Tokyo = new Cities ('Tokyo', 3, 24, 1.2);
let Dubai = new Cities ('Dubai', 11, 38, 3.7);
let Paris = new Cities ('Paris', 20, 38, 2.3);
let Lima = new Cities  ('Lima', 2, 16, 4.6);



let parent = document.getElementById('parent');

let table = document.createElement('table');
parent.appendChild(table);

for (let i = 0; i< city.length; i++) {
    city[i].gitcustomerperhour();
    city[i].gticookiesperhour();

}




    // Seattle.gitcustomerperhour();
    // Seattle.gticookiesperhour();
    // // Seattle.cookies();

// Seattle.Cities();






// Tokyo.Cities();
// Tokyo.gitcustomerperhour();
// Tokyo.gticookiesperhour();
// // Tokyo.cookies;







// Dubai.Cities();
// Dubai.gitcustomerperhour();
// Dubai.gticookiesperhour();
// // Dubai.cookies;







// // Paris.Cities();
// Paris.gitcustomerperhour();
// Paris.gticookiesperhour();
// // Paris.cookies;







// Lima.Cities();
// Lima.gitcustomerperhour();
// Lima.gticookiesperhour();
// // Lima.cookies;





function makeheader(){

    let headingRow=document.createElement('tr');
    table.appendChild(headingRow);

    let firstTh=document.createElement('th');
    headingRow.appendChild(firstTh);
    firstTh.textContent="Name"

    for (let i=0; i<14; i++){
        let hoursTH=document.createElement('th');
    }


    headingRow.appendChild(hoursTH);
    hoursTH.textContent=hours[i];
    
    let lastTh = document.createElement('th');

    headingRow.appendChild(lastTh);
    lastTh.textContent='total daily';


}

 Cities.prototype.render=function(){
     let dataRow=document.createElement('tr');

     table.appendChild(datarow);

let nameTd=document.createElement('td');

dataRow.appendChild(nameTd);

nameTd.textContent=this.name;

for (let i =0; i<14; i++){
    let cookiesTd=document.createElement('td');

    dataRow.appendChild(cookiesTd);

    cookiesTd.textContent=this.cookiesperhour[i];
}

let tatalTd=document.createElement('td');
dataRow.appendChild(totalTd);

totalTd.textContent=this.totalCookiesperDay;

    }

   

   
    function makefooter(){

let footerRow=document.createElement('tr');
table.appendChild(footerRow);

let firstTh=document.createElement('th');
footerRow.appendChild(firstTh);

firstTh.textContent='Totals';

let totalOfTotals=0;

for (let i = 0; i < 14; i++) {
    console.log(hours[i]);

let totalForEachHour=0;

for(let j=0; j<city.length; j++){
    totalForEachHour+=city[j];
    cookiesperhour[i];

    totalOfTotals += city[j];
    cookiesperhour[i];
}

console.log(totalForEachHour);


let footerTh= document.createElement('th');
footerRow.appendChild(footerTh);

footerTh.textContent=totalForEachHour;
    
}


let lastTh = Document.createElement('th');

footerRow.appendChild(lastTh);

lastTh.textContent = totalOftotals;


    }
    



   console.log(city);

makeheader();

for ( let i =0;i<city.length;i++){
    city[i].gitcustomerperhour();
    city[i].gticookiesperhour();
    city[i].render();
}


makefooter();
























        // let Seattle = {
        //     name: 'Seattle',
        //     min: 23,
        //     max: 65,
        //     avg: 6.3,
        //     cookiesperhour: [],
        //     customernumber: [],

        //     gitcustomerperhour: function () {
        //         for (let i = 0; i < 14; i++) {
        //             this.customernumber.push(random(this.min, this.max));

        //         }
        //     },

        //     gticookiesperhour: function () {

        //         for (let j = 0; j < 14; j++) {
        //             this.cookiesperhour.push(cookies(this.customernumber[j], this.avg))

        //         }
        //     }

        // }
        // Seattle.gitcustomerperhour();
        // function random(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }

        // function cookies(x, y) {
        //     let value = x * y;
        //     value = Math.floor(value);
        //     return value;
        // }

        // let parent = document.gitElementbyid
        // let h1 = document.createElement('h1');
        // parent.appendchild(h1);
        // parent.textContent = Seattle.name;

        // let ulelemetns = document.createElement('ul');
        // lest.appendChild(ulelemetns);


        // let lielement = document.createElement('li');
        // lielement.textContent = `${this.houres[i]}:${this.costmernumber[i]}  cookies  `;

        // ulelemetns.appendChild(lielement);

        // console.log(this.houres);

        // console.log(this.cookiesperhour);








        // let Tokyo = {
        //     name: 'Tokyo',
        //     min: 3,
        //     max: 24,
        //     avg: 1.2,
        //     cookiesperhour: [],
        //     customernumber: [],

        //     gitcustomerperhour: function () {
        //         for (let i = 0; i < 14; i++) {
        //             this.customernumber.push(random(this.min, this.max));

        //         }
        //     },
        //     gticookiesperhour: function () {

        //         for (let j = 0; j < 14; j++) {
        //             this.cookiesperhour.push(cookies(this.customernumber[j], this.avg))

        //         }
        //     }

        // }
        // Tokyo.gitcustomerperhour();
        // function random(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }

        // function cookies(x, y) {
        //     let value = x * y;
        //     value = Math.floor(value);
        //     return value;
        // }

        // let parent = document.gitElementbyid
        // let h1 = document.createElement('h1');
        // parent.appendchild(h1);
        // parent.textContent = Tokyo.name;

        // let ulelemetns = document.createElement('ul');
        // lest.appendChild(ulelemetns);


        // let lielement = document.createElement('li');
        // lielement.textContent = `${this.houres[i]}:${this.costmernumber[i]}  cookies  `;

        // ulelemetns.appendChild(lielement);

        // console.log(this.cookiesperhour);











        // let Dubai = {
        //     name: 'Dubai',
        //     min: 11,
        //     max: 38,
        //     avg: 3.7,
        //     cookiesperhour: [],
        //     customernumber: [],

        //     gitcustomerperhour: function () {
        //         for (let i = 0; i < 14; i++) {
        //             this.customernumber.push(random(this.min, this.max));

        //         }
        //     },
        //     gticookiesperhour: function () {

        //         for (let j = 0; j < 14; j++) {
        //             this.cookiesperhour.push(cookies(this.customernumber[j], this.avg))

        //         }
        //     }

        // }
        // Dubai.gitcustomerperhour();
        // function random(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }

        // function cookies(x, y) {
        //     let value = x * y;
        //     value = Math.floor(value);
        //     return value;
        // }

        // let parent = document.gitElementbyid
        // let h1 = document.createElement('h1');
        // parent.appendchild(h1);
        // parent.textContent = Dubai.name;

        // let ulelemetns = document.createElement('ul');
        // lest.appendChild(ulelemetns);


        // let lielement = document.createElement('li');
        // lielement.textContent = `${this.houres[i]}:${this.costmernumber[i]}  cookies  `;

        // ulelemetns.appendChild(lielement);
        // console.log(this.cookiesperhour);





        // let Paris = {
        //     name: 'Paris',
        //     min: 20,
        //     max: 38,
        //     avg: 2.3,
        //     cookiesperhour: [],
        //     customernumber: [],

        //     gitcustomerperhour: function () {
        //         for (let i = 0; i < 14; i++) {
        //             this.customernumber.push(random(this.min, this.max));

        //         }
        //     },
        //     gticookiesperhour: function () {

        //         for (let j = 0; j < 14; j++) {
        //             this.cookiesperhour.push(cookies(this.customernumber[j], this.avg))

        //         }
        //     }

        // }
        // Paris.gitcustomerperhour();
        // function random(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }

        // function cookies(x, y) {
        //     let value = x * y;
        //     value = Math.floor(value);
        //     return value;
        // }

        // let parent = document.gitElementbyid
        // let h1 = document.createElement('h1');
        // parent.appendchild(h1);
        // parent.textContent = Paris.name;

        // let ulelemetns = document.createElement('ul');
        // lest.appendChild(ulelemetns);


        // let lielement = document.createElement('li');
        // lielement.textContent = `${this.houres[i]}:${this.costmernumber[i]}  cookies  `;

        // ulelemetns.appendChild(lielement);

        // console.log(this.cookiesperhour);













        // let Lima = {
        //     name: 'Lima',
        //     min: 2,
        //     max: 16,
        //     avg: 4.6,
        //     cookiesperhour: [],
        //     customernumber: [],

        //     gitcustomerperhour: function () {
        //         for (let i = 0; i < 14; i++) {
        //             this.customernumber.push(random(this.min, this.max));

        //         }
        //     },
        //     gticookiesperhour: function () {

        //         for (let j = 0; j < 14; j++) {
        //             this.cookiesperhour.push(cookies(this.customernumber[j], this.avg))

        //         }
        //     }

        // }
        // Lima.gitcustomerperhour();
        // function random(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }

        // function cookies(x, y) {
        //     let value = x * y;
        //     value = Math.floor(value);
        //     return value;
        // }

        // let parent = document.gitElementbyid
        // let h1 = document.createElement('h1');
        // parent.appendchild(h1);
        // parent.textContent = Lima.name;

        // let ulelemetns = document.createElement('ul');
        // lest.appendChild(ulelemetns);


        // let lielement = document.createElement('li');
        // lielement.textContent = `${this.houres[i]}:${this.costmernumber[i]}  cookies  `;

        // ulelemetns.appendChild(lielement);

        // console.log(this.cookiesperhour);


        // function randomCostmers(min, max) {
        //     min = Math.ceil(min);
        //     max = Math.floor(max);
        //     return Math.floor(Math.random() * (max - min + 1) + min);
        // }


        // Seattle.random();
        // Tokyo.random();
        // Dubai.random();
        // Paris.random();
        // Lima.random();





        // Seattle.gticookiesperhour();
        // Tokyo.gticookiesperhour();
        // Dubai.gticookiesperhour();
        // Paris.gticookiesperhour();
        // Lima.gticookiesperhour();