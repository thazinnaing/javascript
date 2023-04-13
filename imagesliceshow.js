const myButton=document.getElementById("myButton");
const image=document.getElementsByClassName("imgclass")[0];
const imagegallery=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRY5cXXejqahBh7ekV0KwLikRVie9FjwoyIAENPdw&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwrZ6Gqh__WBwetcQhzVo4fLYzTqqzmyAojNegL-6vswimzeYW2dZ7543OI6R43JVQQA&usqp=CAU",
"https://wallpaperaccess.com/full/7372368.jpg",
"https://images.pexels.com/photos/3450887/pexels-photo-3450887.jpeg?auto=compress&cs=tinysrgb&w=400",
"https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg?auto=compress&cs=tinysrgb&w=400"]

let imgcount=0;
const myFunction=()=>{
    if(imgcount===imagegallery.length){
        image.src="https://bit.ly/3oeKqVS";
        imgcount=0;
        return;
    }
    
    const imagelink=imagegallery[imgcount];
    image.src=imagelink;
    console.log("Imagecounter: ",imgcount);
    imgcount+=1;
}

myButton.addEventListener("click",myFunction);

