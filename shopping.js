const inputTag=document.getElementsByClassName("form-control")[0];
const shoppingList=document.getElementsByClassName('shoppingListContainer')[0];
let productId=1;

const handleChange=(event)=>{

    const inputitem=event.target.value;
    const productContainer=document.createElement("div");
    productContainer.classList.add("productContainer")

    const parentDiv=document.createElement("div");
    parentDiv.classList.add("productName");
    // <i class="fa-solid fa-trash-can"></i>

    parentDiv.addEventListener("click", ()=>{
        const classExit=parentDiv.classList.contains("purchased");
        classExit ? parentDiv.classList.remove("purchased"):parentDiv.classList.add("purchased")

    
    })
    const spanTag=document.createElement("span");

    const trashIcon=document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash-can");
    trashIcon.addEventListener("click", (event)=>{
        productContainer.remove();
        
    })


    spanTag.id=productId;

    const product=productId.toString()+". "+inputitem
    

    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv,trashIcon)
    shoppingList.append(productContainer)

    inputTag.value='';
    productId++;

    
}
inputTag.addEventListener("change", handleChange);


