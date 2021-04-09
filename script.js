1
let cars = ["audi","bmw", "lexus", "volkswagen", "porsche"]; 
for (let i = 1; i < cars.length; i++) {
    console.log(cars[i]);
}

2
let names=['magda','nino','nikolozi','nia','giorgi','ia']
for(let i=0;i<names.length;i++){
    if(names[i].length>3){
        console.log(names[i])
    }
}

3
var numbers=[12,10,9,6,7,3,11,17]
for(var i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        console.log(numbers[i])
    }
}
var numbers=[12,10,9,6,7,3,11,17]
for(var i=0;i<numbers.length;i++){
    if(numbers[i]%2==1){
        console.log(numbers[i])
    }
}

4
let car = ["audi","bmw", "lexus", "volkswagen", " porsche"]; 
    console.log(car[1]);

5
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
}
console.log(person.eyecolor);

6
let names=['magda','nino','nikolozi','nia','giorgi','ia']
for(let i=0;i<names.length;i++){
        console.log(names[i]);
    }

7
let numbers=[5,25,89,120,36]
numbers.push('javascript','python');
numbers.unshift('css','html');
console.log(numbers);
let summ=(numbers.length);
console.log(summ);

8
var fruites=['banani','fortoxali','msxali']
fruites.push('ananasi','vashli');
fruites.unshift('sazamtro');
console.log(fruites);
var summ=(fruites.length);
console.log(summ);
fruites.splice(2,0,'mango');
console.log(fruites);
fruites.pop();
fruites.shift();
console.log(fruites);
var summ=fruites.length;
console.log(summ);

9
let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche", "bentley"]
let newarray=cars.slice(2,6);
console.log(newarray);
cars.slice(1,0);
console.log(cars);

10
let names=['Nika", "Natia", "Anamaria", "Zura", "tekla", "Mari", "Sandro'];
for(let a=0; a<1; a++){
    if(names.length == 5 && names[4]=='nika') {
        console.log('masivis raodenoba 5 da bolo elementi nika');
    }

    else if(names.length==7  || names[0]=='sandro'){
        console.log('masivis raodenoba 7 da pirveli elementi sandro')
    }
    else{
        console.log('error');
    }
 }