/*const h1Element=document.createElement("h1");
const textNode=document.createTextNode("Welcome to Bamo");
h1Element.appendChild(textNode);
const tagCollection=document.getElementsByTagName("body");
console.log("bodyElement:",tagCollection[0]);
const bodyElement=tagCollection[0];
bodyElement.appendChild(h1Element);

const readh1element=document.getElementsByTagName("h1")[0];
console.log("After reading h1 element:",readh1element.textContent);

readh1element.textContent="Welcome to Anisakhan";
console.log("After updating h1 element.text:  ", readh1element.textContent);

readh1element.remove();

*/

// const bodyelement=document.getElementsByTagName("body")[0]
/*console.log("bodyy:",bodyelement[0]);

const parentdiv=document.getElementsByClassName("parent")[0];
parentdiv.innerHTML="";


const divwithId=document.getElementById("myId");
console.log("div with id:",divwithId)
*/

{/* <div class="parent">
        <div class="child">child one</div>
        <div class="child">child two</div>
    </div> */}

/*const parentDiv=document.createElement("div");
parentDiv.classList.add("parent","testclass")
parentDiv.classList.remove("testclass")

const childDiv1=document.createElement("div");
childDiv1.append("child one111")
childDiv1.classList.add("child")


const childDiv2=document.createElement("div");
childDiv2.append("child two222");
childDiv2.classList.add("child")

parentDiv.append(childDiv1,childDiv2);

bodyelement.appendChild(parentDiv);
*/

/*
//for inline css
const styleTestDiv=document.getElementsByClassName("styleTest")[0];
console.log("styletestdiv width:", styleTestDiv.style.width);
console.log("styletestdiv height:", styleTestDiv.style.height);
console.log("styletestdiv background color:", styleTestDiv.style.backgroundColor);

// for external stylesheet css

console.log("stylediv width:", getComputedStyle(styleTestDiv).width)
console.log("stylediv height:", getComputedStyle(styleTestDiv).height)
console.log("stylediv background-color:", getComputedStyle(styleTestDiv).backgroundColor)
*/

const myButton=document.getElementById("myButton");
const image=document.getElementsByClassName("imgclass")[0];
const originalimgsrc=image.src;
const imagearr=["https://bit.ly/3MXgWqf","https://bit.ly/3zR3cFH","https://bit.ly/3ockkms","https://bit.ly/3KW9HNB","https://bit.ly/3Mzw6Se"]
let counter=0;
const myFunction=()=>{
    if (counter===5){
        image.src=originalimgsrc;
        counter=0;
        return;
    }
    const imagelink=imagearr[counter];
    image.src=imagelink;
    counter+=1;
    console.log("counter:",counter)
   

};

myButton.addEventListener("click", myFunction)
















