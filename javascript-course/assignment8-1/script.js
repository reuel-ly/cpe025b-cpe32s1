//Code Challenge #1

let paintings = [
  { title: "Mona Lisa", artist: "Leonardo da Vinci", year: 1503 },
  { title: "The Last Supper", artist: "Leonardo da Vinci", year: 1495 },
  { title: "Starry Night", artist: "Vincent van Gogh", year: 1889 },
  { title: "The Scream", artist: "Edvard Munch", year: 1893 },
  { title: "Guernica", artist: "Pablo Picasso", year: 1937 },
  { title: "The Kiss", artist: "Gustav Klimt", year: 1907 },
  { title: "Girl With a Pearl Earring", artist: "Johannes Vermeer", year: 1665 },
  { title: "The Birth of Venus", artist: "Sandro Botticelli", year: 1485 },
  { title: "Las Meninas", artist: "Diego Velázquez", year: 1656 },
  { title: "The Creation of Adam", artist: "Michelangelo", year: 1512 }
];

// for (let i = 0; i < paintings.length; i++){
//     console.log(JSON.stringify(paintings[i]))
// }

//Code Challenge #2
// class Image{
//     #imageArr = []
//     constructor(title, artist, date){
//         this.title = title;
//         this.artist = artist;
//         this.date = date;
//     }
// }

// function getImages(title, artist, date){
//     let image = new Image(title, artist, date);
//     return image;
// }

// images1 = paintings.map(painting => new Image(painting.title, painting.artist, painting.date));
// images2 = paintings.map(painting => getImages(painting.title, painting.artist, painting.date));
// console.log("images1: ", JSON.stringify(images1))
// console.log("images2: ", JSON.stringify(images2))

//Code Challenge #3
// class Image {
//     constructor(title, artist, date) {
//         this.title = title;
//         this.artist = artist;
//         this.date = date;
//     }
//     show() {
//         console.log(`${this.title} (${this.artist}, ${this.date})`);
//     }
// }
// const images = {
//     list: [],
//     contains(title) {
//         return this.list.some(image => image.title === title);
//     },
//     add(title, artist, date) {
//         if (!this.contains(title)) {
//             this.list.push(new Image(title, artist, date));
//         }
//     },
//     show() {
//         this.list.forEach(image => image.show());
//     },
//     clear() {
//         this.list = [];
//     }
// };

// // Test sequence
// images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
// images.add('The Last Supper', 'Leonardo da Vinci', 1495);
// images.add('The Starry Night', 'Vincent van Gogh', 1889);
// images.add('Mona Lisa', 'Leonardo da Vinci', 1503); // duplicate, should be ignored

// images.show();
// // -> Mona Lisa (Leonardo da Vinci, 1503)
// // -> The Last Supper (Leonardo da Vinci, 1495)
// // -> The Starry Night (Vincent van Gogh, 1889)

// images.clear();
// images.show(); // -> (nothing, list is empty)

//Code Challenge #4

// class Image {
//     constructor(title, artist, date) {
//         this.title = title;
//         this.artist = artist;
//         this.date = date;
//     }
//     show() {
//         console.log(`${this.title} (${this.artist}, ${this.date})`);
//     }
// }
// const images = {
//     list: [],
//     contains(title) {
//         return this.list.some(image => image.title === title);
//     },
//     add(title, artist, date) {
//         if (!this.contains(title)) {
//             this.list.push(new Image(title, artist, date));
//         }
//     },
//     edit(title, newArtist, newDate) {
//         const image = this.list.find(image => image.title === title);
//         if (image) {
//             image.artist = newArtist;
//             image.date = newDate;
//         }
//     },
//     show() {
//         this.list.forEach(image => image.show());
//     },
//     clear() {
//         this.list = [];
//     },
//     delete(title) {
//         const index = this.list.findIndex(image => image.title === title);
//         if (index !== -1) {
//             this.list.splice(index, 1);
//         }
//     }
// }
    


// images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
// images.add('The Last Supper', 'Leonardo da Vinci', 1495);
// images.add('The Starry Night', 'Vincent van Gogh', 1889);
// images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
// images.delete('The Last Supper');
// images.show();
// // -> Mona Lisa (Leonardo da Vinci, 1504)
// // -> The Starry Night (Vincent van Gogh, 1889)

// Code Challenge #5
function deepComp(a, b) {
    // If strictly equal return true
    if (a === b) return true;

    // If either is not an object, or is null, they're not equal
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return false;
    }

    const keysA = Object.keys(a); // only enumerable properties, ignores methods
    const keysB = Object.keys(b);

    // If they have different number of properties, not equal
    if (keysA.length !== keysB.length) return false;

    // Check every key in a exists in b and its value matches (recursively)
    for (const key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepComp(a[key], b[key])) return false; // recurse
    }

    return true;
}

// Tests
let a = {x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b = {x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c = {x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d = {x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e = {x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f = {x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};

console.log(deepComp(a, b)); // -> true
console.log(deepComp(a, c)); // -> false
console.log(deepComp(a, d)); // -> false
console.log(deepComp(a, e)); // -> false
console.log(deepComp(a, f)); // -> false
