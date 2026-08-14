

import readline from "readline/promises";
import {stdin , stdout} from "process";
import {readFile,writeFile} from "fs/promises";
const FILE ="product.json";
const getCart=async () =>{
    const data = await readFile(FILE,"utf-8");
    return JSON.parse(data);
};
const saveCart = async (myCart)=>{
    await writeFile(FILE,JSON.stringify(myCart,null,2));
};
const addToCart = async (product)=>{
    const myCart =await getCart();
    const isFound = myCart.find((item)=> item.id === product.id);
    if(isFound){
        isFound.qty +=product.qty;

    }else{
        myCart.push(product);
    }
    await saveCart(myCart);
    console.log(`product added/updated with id ${product.id}into cart`);
};
const showCart = async () =>{
const data = await getCart();
console.table(data);
};

const main = async()=>{
    let choice;
    const cin = readline.createInterface({input : stdin , output : stdout});
    do{
  console.log("welcome to flipcart 🆓"); 
  console.log("1...........show cart");
  console.log("2...........add product");
  console.log("3...........remove product");
  console.log("4...........update quantity");
  console.log("5...........exit");
  choice = await cin.question("enter your choice:");
  switch (Number(choice)){
    case 1 :
        console.log(" show products");
        break;
    case 2:
let data = await cin.question("Enter id,name,price,qty:");
const [id,name,price,qty]=data
.split(",")
.map((item)=>item.trim());
const product ={id: Number(id),name,price: Number(price),qty: Number(qty)};
        break;
    case 3:
        console.log("remove product");
        break;
    case 4:
        console.log("update product quantity")
        break;
    case 5:
        console.log("see you later");
        break;

        default:
            console.log("invalid choice ! try again 👍");

  }
    }while(choice!=5);
    cin.close();
};
main();