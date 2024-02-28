// 1)

let age = 14;
if (age >= 14 || age <= 90){
    console.log(true);
}


// 2)

let a = '';
let b = 7;
let c = 1;
let d = 2;
alert(a || c && b || d);


// 3)

let age = 18;
let hasLicense = true;
if( age >= 18 && hasLicense == true){
    console.log(hasLicense);
}else{
    console.log(hasLicense == false)
}


// 4)

let age = 33;
if(age <= 18 || age >= 65){
    console.log('мне нужно отдыхать и не писать код');
}else{
console.log('мой возраст подходит для выполнения этой задачи');
}
