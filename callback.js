// callback function

//filter() 메소드

words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

function callback(element) {
console.log(element);
if (element.length > 6) {
return true;
} else {
return false;
}
}
newWords = words.filter(callback);
console.log(newWords);


//화살표 함수

const simple = function() {
console.log('simple!');
};

const simple = () => console.log('simple!');


//forEach() 메소드

const fruits = ["mango", "papaya", "pineapple", "apple"];

fruits.forEach((fruit) => {console.log("I want to eat a " + fruit);});

// map() 메소드

const animals = ["Hen","elephant","llama","leopard","ostrich","Whale","octopus","rabbit","lion","dog",];

const secretMessage = animals.map((animal) => {return animal;});

console.log(secretMessage);




const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map((number) => {return number / 100;});

console.log(smallNumbers);