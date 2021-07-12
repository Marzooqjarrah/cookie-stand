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
   this.cookiesperhour= [];
    this.customernumber= [];
city.push(this)
}

Cities.prototype.gitcustomerperhour = function () {

    for (let i = 0; i < 14; i++) {
        this.customernumber.push(random(this.min, this.max));
    }
}

Cities.prototype.gticookiesperhour = function () {
    for (let j = 0; j < 14; j++) {
        this.cookiesperhour.push(Math.floor(this.customernumber[j] * this.avg));
    }

}


// Cities.prototype.cookies(x, y) = function () {
//     let value = x * y;
//     value = Math.floor(value);
//     return value;
// }


let Seattle = new Cities
    ('Seattle', 23, 65, 6.3);
    Seattle.gitcustomerperhour();
    Seattle.gticookiesperhour();
    // Seattle.cookies();

// Seattle.Cities();
console.log(Seattle);



let Tokyo = new Cities
    ('Tokyo', 3, 24, 1.2);

// Tokyo.Cities();
Tokyo.gitcustomerperhour();
Tokyo.gticookiesperhour();
// Tokyo.cookies;

console.log(Tokyo);



let Dubai = new Cities
    ('Dubai', 11, 38, 3.7);

// Dubai.Cities();
Dubai.gitcustomerperhour();
Dubai.gticookiesperhour();
// Dubai.cookies;

console.log(Dubai);



let Paris = new Cities
    ('Paris', 20, 38, 2.3);

// Paris.Cities();
Paris.gitcustomerperhour();
Paris.gticookiesperhour();
// Paris.cookies;

console.log(Paris);



let Lima = new Cities
    ('Lima', 2, 16, 4.6);

// Lima.Cities();
Lima.gitcustomerperhour();
Lima.gticookiesperhour();
// Lima.cookies;

console.log(Lima);




function header(){


    let parent=document.getElementById('parent');

    
    let table=document.createElement('table');
    parent.appendChild(table);

    let headingRow=document.createElement('tr');
    table.appendChild(headingRow);

    let thEl=document.createElement('th');
    headingRow.appendChild(thEl);
    thEl.textContent="ds"

    

    for (let i = 0; i < 14; i++) {
        let thEl=document.createElement('th');
    headingRow.appendChild(thEl);
    thEl.textContent="ds"

    }


}


Cities.prototype.render = function(){}

function footer(){

}
for (let i = 0; i < city.length; i++) {
    city[i].render();

}
console.log(Cities);























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