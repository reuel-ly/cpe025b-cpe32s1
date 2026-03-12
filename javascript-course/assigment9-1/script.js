// Code Challenge #1
// function getRandomSet(m, n, uniq, sorted) {
//     let retVal = uniq ? new Set() : [];
//     let push = (e) => uniq ? retVal.add(e) : retVal.push(e);
//     let length = () => uniq ? retVal.size : retVal.length;

//     for(;length() < m;) {
//         push(Math.floor(Math.random() * Math.floor(n)));
//     }

//     return sorted ? [...retVal].sort((n1, n2) => n1 - n2) : [...retVal];
// }


// console.log(getRandomSet(10, 20, false, false));
// console.log(getRandomSet(10, 20, false, true));
// console.log(getRandomSet(10, 20, true, false));
// console.log(getRandomSet(10, 20, true, true));

// Code Challenge #2
// let nameRegExp = /^[A-Z][a-z]+$/;
// let emailRegExp = /^([a-zA-Z]+\.)*[a-zA-Z]+@([a-zA-Z]+\.)+[a-zA-Z]{2,3}$/;

// class User {
//     #name;
//     #surname;
//     #email;

//     constructor(name, surname, email) {
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//     }

//     get name() {
//         return this.#name;
//     }
//     set name(val) {
//         if (typeof val === 'string' && val.match(nameRegExp)) {
//             this.#name = val;
//         } else {
//             throw(new Error(`Incorrect name format: ${val}`));
//         }
//     }
//     get surname() {
//         return this.#surname;
//     }
//     set surname(val) {
//         if (typeof val === 'string' && val.match(nameRegExp)) {
//             this.#surname = val;
//         } else {
//             throw(new Error(`Incorrect surname format: ${val}`));
//         }
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(val) {
//         if (typeof val === 'string' && val.match(emailRegExp)) {
//             this.#email = val;
//         } else {
//             throw(new Error(`Incorrect email format: ${val}`));
//         }
//     }
// }

// try {
//     let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
//     console.log(user1);
//     let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
    
// } catch(err) {
//     console.log(err.message);
// }

// Code Challenge #3
// class Users {
//     #users;

//     constructor() {
//         this.#users = new Map();
//     }

//     add(name, surname, email) {
//         try{
//             this.#users.set(email, new User(name, surname, email));
//         } catch(e) {
//             console.log(e.message);
//         }
//     }

//     delete(email) {
//         return this.#users.delete(email);
//     }

//     get(email) {
//         return this.#users.get(email);
//     }

//     getAll(sortBy) { //name,surname,email
//         return [...this.#users].sort((u1,u2) => u1[1][sortBy] > u2[1][sortBy] ? 1 : -1).map(u => u[1]);
//     }
// }

// let users = new Users();
// users.add("Aaaa", "Bbbb", "cccc@gmail.com");
// users.add("Mmmm", "Ffff", "eeee@gmail.com");
// users.add("Aaaa", "Bbbb", "cccc@gmail.com");
// users.add("Xxxx", "Oooo", "dddd@gmail.com");
// console.log(users.get("dddd@gmail.com"));
// console.log(users.getAll("name").map(u => u.name));
// console.log(users.getAll("surname").map(u => u.surname));
// console.log(users.getAll("email").map(u => u.email));

// Code Challenge #4

// class Point {
//     constructor(x, y) {
//         this.type = 'point';
//         this.x = x;
//         this.y = y;
//     }
// }

// class Line {
//     constructor(points) { // [[x, y], [], [], ...]
//         this.type = 'line';
//         this.points = points.map(p => new Point(p[0], p[1]));
//     }
// }

// class Figure {
//     constructor(elements = []) {
//         this.addElements();
//     }

//     addElements(elements = []) {
//         this.elements = {
//             points: elements.filter(e => e.type === 'point'),
//             lines: elements.filter(e => e.type === 'line')
//         }        
//     }

//     addPoint(x, y) {
//             this.elements.points.push(new Point(x, y));
//     }

//     addLine(points=[]) { // [[x, y], [], [], ...]
//         this.elements.lines.push(new Line(points));
//     }

//     toJSON() {
//         return JSON.stringify(this.elements);
//     }

//     fromJSON(data="{}", add=false) {
//         let obj = JSON.parse(data);
//         if(add) {
//             this.elements.points = this.elements.points.concat(obj.points||[]);
//             this.elements.lines = this.elements.lines.concat(obj.lines||[]);
//         } else {
//             this.elements = obj;
//         }
//     }

//     deleteAll() {
//         this.elements.points = [];
//         this.elements.lines = [];
//     }
// }

// let f = new Figure();
// f.addPoint(10,20);
// f.addPoint(10,10);
// f.addLine([[10,20], [30,40], [50,60]]);
// let json = f.toJSON();
// console.log(json);
// f.fromJSON(json, true);
// console.log(f.elements.points.length);
// console.log(f.elements.lines.length);
// f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
// console.log(f.elements.points.length);
// console.log(f.elements.lines.length);

// Code Challenge #5

// class Point {
//     constructor(x, y) {
//         this.type = 'point';
//         this.x = x;
//         this.y = y;
//     }
// }

// class Line {
//     constructor(points) { // [[x, y], [], [], ...]
//         this.type = 'line';
//         this.points = points.map(p => new Point(p[0], p[1]));
//     }
// }

// class Figure {
//     constructor(elements = []) {
//         this.addElements();
//     }

//     addElements(elements = []) {
//         this.elements = {
//             points: elements.filter(e => e.type === 'point'),
//             lines: elements.filter(e => e.type === 'line')
//         }        
//     }

//     addPoint(x, y) {
//             this.elements.points.push(new Point(x, y));
//     }

//     addLine(points=[]) { // [[x, y], [], [], ...]
//         this.elements.lines.push(new Line(points));
//     }

//     toJSON() {
//         return JSON.stringify(this.elements);
//     }

//     fromJSON(data="{}", add=false) {
//         let obj = JSON.parse(data);
//         if(add) {
//             this.elements.points = this.elements.points.concat(obj.points||[]);
//             this.elements.lines = this.elements.lines.concat(obj.lines||[]);
//         } else {
//             this.elements = obj;
//         }
//     }

//     deleteAll() {
//         this.elements.points = [];
//         this.elements.lines = [];
//     }

//     static isSamePoint(point1, point2) {
//     return point1 && point2 && point1.x && point1.y && point2.x && point2.y && point1.x === point2.x && point1.y === point2.y;
// }

//     static isSameLine(line1, line2) { 
//         let retVal = line1 && line2 && line1.points && line1.points && line1.points.length === line2.points.length;
//         if(retVal) {
//             retVal = line1.points.every((p,i) => {
//                 let {x, y} = line2.points[i];
//                 return p.x === x && p.y === y;
//             })
//         }
//         return retVal;
//     }

//     sortPoints() {
//         this.elements.points = this.elements.points.sort((p1, p2) => p2.x - p1.x == 0 ? p2.y - p1.y : p2.x - p1.x);
//     }

//     sortLines() {
//         this.elements.lines = this.elements.lines.sort((l1, l2) => {
//             let retVal = 0;
//             for(let i=0; i<l1.points.length; i++) {
//                 retVal = l2.points[i].x - l1.points[i].x == 0 ? l2.points[i].y - l1.points[i].y : l2.points[i].x - l1.points[i].x;
//                 if(retVal) {
//                     break;
//                 }
//             };
//             return retVal;
//         });
//     }

//     cleanUp() {
//         this.sortPoints();
//         this.elements.points = this.elements.points.reduce((p,c) => Figure.isSamePoint(p[p.length - 1], c) ? p : p.push(c) && p, []);
//         this.sortLines();
//         this.elements.lines = this.elements.lines.reduce((p,c) => Figure.isSameLine(p[p.length - 1], c) ? p : p.push(c) && p, []);
//     }
// }

// let f = new Figure();
// f.addPoint(10,20);
// f.addPoint(10,10);
// f.addLine([[10,20], [30,40], [50,60]]);
// let json = f.toJSON();
// console.log(json);
// f.fromJSON(json, true);
// console.log(f.elements.points.length);
// console.log(f.elements.lines.length);
// f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
// console.log(f.elements.points.length);
// console.log(f.elements.lines.length);

// Code Challenge #1
// class MyIterable {
//     constructor() {
//         this.data = [];
//     }

//     get length() {
//         return this.data.length;
//     }

//     has(n) {
//         return this.data.includes(n);
//     }

//     add(n) {
//         if(!this.has(n)) {
//             this.data.push(n);
//         }
//     }

//     del(n) {
//         let index = this.data.indexOf(n);
//         if(index !== -1) {
//             this.data.splice(index, 1);
//         }
//     }

//     [Symbol.iterator] = function* (){
//         for(let index = 0; index<this.length; index++) {
//             yield this.data[index];
//         }
//     }
// }

// let iterable = new MyIterable();
// iterable.add(2);
// iterable.add(5);
// iterable.add(3);
// iterable.add(2);
// iterable.del(3);


// console.log(iterable.length); // -> 2
// console.log(iterable.has(2)); // -> true
// console.log(iterable.has(3)); // -> false
// console.log(...iterable); // -> 2 5

// Code Challenge #2

// let myDecorator = function(fn) {
//     let cache = new Set();
//     let included = function(...args) {
//         let found = false;
//         for(let e of cache) {
//             let index = 0;
//             console.log(`${e}`)
//             found = true;
//             for(let arg of args) {
//                 console.log(`   ${arg}`);
//                 if(arg !== e[index++]) {
//                     found = false;
//                     break;
//                 }
//             }
//             if(found) {
//                 break;
//             }
//         }
//         return found;
//     }
//     return function(...args) {
//         if(included(...args)) {
//             console.log(`arguments already used: ${args}`);
//         } else {
//             cache.add(args);
//         }
//         fn(...args);

//     }
// }

// let sum = function(...args) {
//     let retVal = 0;
//     for(let arg of args) {
//         retVal += arg;
//     }
//     return retVal;
// }
// let dfn = myDecorator(sum);
// dfn(2, 3, 4);
// dfn(4, 5);
// dfn(2, 3, 4); // -> arguments already used: 2,3,4
// dfn(4, 5); // -> arguments already used: 4,5

// Code Challenge #3

// let getPromiseArray = function(args) {
//     let promises = args.map(arg => new Promise(function(resolve, reject){
//         if(Number.isInteger(arg) && arg > 0) {
//             let rnd = Math.random();
//             setTimeout(resolve(arg), arg);
//         } else {
//             reject(new Error(`${arg} is not a positive integer`))
//         }
//     }));
//     return promises;
// }

// let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
// Promise.all(promises1).then(a => console.log(`all: ${a}`))
// .catch(e => console.log(`all: ${e.message}`)); // -> any: 10 
// Promise.any(promises1).then(a => console.log(`any: ${a}`)).
// catch(e => console.log(`any: ${e.message}`)); // -> all: a is not a positive integer

// Code Challenge #4

// let getWeather = function(location, info) {
//     let cities;
//     let url = "http://localhost:3000/weather";
//     const maxWindSpeed = 15;
//     const minTemp = -20; 

//     let showWindInfo = function(weather){
//         console.log(`WIND: ${weather.wind.speed} m/s, ${weather.wind.deg} deg`);
//         if(weather.wind.speed > maxWindSpeed) {
//             console.log(`WARNING! Wind speed over ${maxWindSpeed} m/s`);
//         }
//     };

//     let showInfo = function(weather, type){
//         console.log(`${type.toUpperCase()}: ${weather[type]} ${type === 'temp' ? 'C' : '%'}`);
//         if(type === 'temp' && Number(weather.temp) < minTemp) {
//             console.log(`WARNING! Temperature below ${minTemp} degrees`);
//         }
//     };

//     if(!Array.isArray(location)) {
//         cities = [location]
//     } else {
//         cities = location;
//     }
//     let infoQuery = '&info=';
//     let promises = cities.map(city => fetch(`${url}?city=${city}${info && info !== 'all'?infoQuery + info:''}`));
//     Promise.all(promises)
//         .then(responses => Promise.all(responses.map(response => response.json())))
//         .then(data => {
//             for(let city of data) {
//                 console.log('');
//                 console.log(`CITY: ${city.city}`);
//                 for(let key in city.weather) {
//                     if(key === 'wind') {
//                         showWindInfo(city.weather);
//                     } else {
//                         showInfo(city.weather, key);
//                     }
//                 }
//             }
//         })
//         .catch(e => console.log(e.message));
// }

// let weather1 = getWeather('Berlin', 'wind');
// // CITY: Berlin
// // WIND: 16 m/s, 117 deg
// // WARNING! Wind speed over 15 m/s

// let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
// // CITY: Oslo
// // WIND: 8 m/s, 170 deg
// // CLOUDS: 0 %
// // TEMP: 0 C
// // PRECIPITATION: 0 %
// //
// // CITY: Yakutsk
// // WIND: 0 m/s, 0 deg
// // CLOUDS: 0 %
// // TEMP: -40 C
// // WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %

// Code Challenge #5

let getWeather = async function(location, info) {
    let cities;
    let url = "http://localhost:3000/weather";
    const maxWindSpeed = 15;
    const minTemp = -20; 

    let showWindInfo = function(weather){
        console.log(`WIND: ${weather.wind.speed} m/s, ${weather.wind.deg} deg`);
        if(weather.wind.speed > maxWindSpeed) {
            console.log(`WARNING! Wind speed over ${maxWindSpeed} m/s`);
        }
    };

    let showInfo = function(weather, type){
        console.log(`${type.toUpperCase()}: ${weather[type]} ${type === 'temp' ? 'C' : '%'}`);
        if(type === 'temp' && Number(weather.temp) < minTemp) {
            console.log(`WARNING! Temperature below ${minTemp} degrees`);
        }
    };

    if(!Array.isArray(location)) {
        cities = [location]
    } else {
        cities = location;
    }
    let infoQuery = '&info=';
    let promises = cities.map(city => fetch(`${url}?city=${city}${info && info !== 'all'?infoQuery + info:''}`));
    try {
        let responses = await Promise.all(promises);
        let data = await Promise.all(responses.map(response => response.json()));
        for(let city of data) {
            console.log('');
            console.log(`CITY: ${city.city}`);
            if(city.weather) {
                for(let key in city.weather) {
                    if(key === 'wind') {
                        showWindInfo(city.weather);
                    } else {
                        showInfo(city.weather, key);
                    }
                }
            } else {
                console.log('weather unknown');
            }
        }
    } catch(e) {
        console.log(e.message);
    }
}

let weather1 = getWeather('Berlin', 'wind');
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %