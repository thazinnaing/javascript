customers=[
            {name:"thazin", age:33, gender:"female"},
            {name:"naing", age:22, gender:"male"},
            {name:"putuu", age:20, gender:"male"}
]

customers.map(cuselement=>{
    cuselement.bookings=[];
    return cuselement;

})

let string="I love putuu";
let result=string.toLowerCase()
let re=string.toUpperCase()
let res=string.length

let num="10";
let toint=parseInt(num,10);

let n=10;
let tostr=n.toString()

let array=[1,2,4,5,6,7];
array.push(19);
array.unshift(11);
array.pop(0);

array.join(",")

for(prop in customers){
    if(customers[prop]['gender']==="male"){
        for(p in customers[prop]){
            console.log(customers[prop][p]);
        }
    }
}



//ordinary if else
const isMale=true;
if(isMale){
    console.log("male male");

}
else{
    console.log("female female");
}

//ternary operator
isMale ? console.log("male male") : console.log("female female");
