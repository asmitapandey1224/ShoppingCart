// let menu = document.querySelector('#menu-bars');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }

// document.querySelector('#search-icon').onclick = () =>{
//     document.querySelector('#search-form').classList.toggle('active');

// }

// document.querySelector('#close').onclick = () =>{
//     document.querySelector('#search-form').classList.remove('active');

// }

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Green Shantung Top, Gilet and Pants Set',
        image: 'img1.webp',
        price: 1200
    },
    {
        id: 2,
        name: 'Beige Straight Floral Printed Kurta',
        image: 'img2.webp',
        price: 1200
    },
    {
        id: 3,
        name: 'Red Zari Embroidered Kurta, Pants and Jacquard Dupatta',
        image: 'img3.webp',
        price: 1200
    },
    {
        id: 4,
        name: 'Off-White Asymmetrical Embellished Kurta, Tights & Mint Dupatta',
        image: 'img4.webp',
        price: 1200
    },
    {
        id: 5,
        name: 'Wine Embroidered Sheer Gilet, Kurta and Pants Set',
        image: 'img5.webp',
        price: 1200
    },
    {
        id: 6,
        name: 'Yellow-coloured Anarkali Kurta, Tights and Dupatta Set',
        image: 'img6.webp',
        price: 1200
    },
]
let listCards = [];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img class="image" src="image/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key]==null){
        listCards[key]=products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML='';
    let count=0;
    let totalPrice = 0;
    listCards.forEach((value, key) =>{
        totalPrice=totalPrice+value.price;
        count = count + value.quantity;

        if(value !=null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML= `
            <div><img src = "image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
            <button onclick= "changeQuantity(${key}, ${value.quantity -1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick= "changeQuantity(${key}, ${value.quantity +1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity ==0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}