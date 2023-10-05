
// primitive and referenece type
let  lastName="Williams";
const  oldLastName=lastName;
lastName="Davis";

console.log(lastName,oldLastName );

const Jassica={
  firstName:'jassica',
  lastName:'Williams',
  age:27
}

const JassicaMarried= Jassica;
JassicaMarried.lastName='Davis';

console.log("Before married: ", Jassica);
console.log("After married: ", JassicaMarried);


const Jassica2={
  firstName:'jassica',
  lastName:'Williams',
  age:27
}

// object.assign merge two objects and create a new object 
const JassicaMarried2= Object.assign({},Jassica2);
JassicaMarried2.lastName='Davis';

console.log("Before married: ", Jassica2);
console.log("After married: ", JassicaMarried2);



// Fallback of Object.assign.it only copies the frist level elements
const Jassica3={
  firstName:'jassica',
  lastName:'Williams',
  age:27,
  family:['Bob','Alice']
}

// object.assign merge two objects and create a new object 
const JassicaMarried3= Object.assign({},Jassica3);
JassicaMarried3.lastName='Davis';

JassicaMarried3.family.push('Davis','Mary');
console.log("Before married: ", Jassica3);
console.log("After married: ", JassicaMarried3);
