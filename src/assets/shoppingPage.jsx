import Nav from "./commonComponents/nav";
//import grocery from "./img/grocery.png";
import veggies from "./img/fresh-veggies.png";
import potato from './img/products/potato.png'
import onion from './img/products/onion.png'
import apple from './img/products/apple.png'
import guava from './img/products/guava.png'
import pomegranate from './img/products/pomegranate.png'
import ProductItem from "./commonComponents/products";
import { useEffect, useState } from 'react';
import Cart from "./commonComponents/cart";
// import Buttons from "./commonComponents/buttons";
const productElements = [
    {
        id: Math.ceil(Math.random() * 100000000),
        productName: "Potato",
        productquantity: "1kg",
        productPrice: "25",
        productImage: potato,
        hideAddToCart: false,
        quantityCount:0,
        priceCount:0
    },
    {
        id: Math.ceil(Math.random() * 100000000),
        productName: "Onion",
        productquantity: "1kg",
        productPrice: "30",
        productImage: onion,
        hideAddToCart: false,
        quantityCount:0,
        priceCount:0
    },
    {
        id: Math.ceil(Math.random() * 100000000),
        productName: "Apple",
        productquantity: "1kg",
        productPrice: "80",
        productImage: apple,
        hideAddToCart: false,
        quantityCount:0,
        priceCount:0
    },
    {
        id: Math.ceil(Math.random() * 100000000),
        productName: "Guava",
        productquantity: "1kg",
        productPrice: "60",
        productImage: guava,
        hideAddToCart: false,
        quantityCount:0,
        priceCount:0
    },
    {
        id: Math.ceil(Math.random() * 100000000),
        productName: "Pomegranate",
        productquantity: "1kg",
        productPrice: "100",
        productImage: pomegranate,
        hideAddToCart: false,
        quantityCount:0,
        priceCount:0
    }
]

const ShoppingPage = () => {
    const productElement = JSON.parse(localStorage.getItem("cartItems"));
    const cartCount = parseInt(localStorage.getItem("cartCount")||"0");
    const [productCount, setProductCount] = useState(cartCount);
    const [productElem, setProductElem] = useState(productElement||productElements);
    useEffect(()=>{
        localStorage.setItem("cartItems",JSON.stringify(productElem));
    },[productElem]);
    useEffect(()=>{
        localStorage.setItem("cartCount",productCount);
    },[productCount]);
    const incrementCount = (e) => {
        setProductCount(productCount + 1);
        productElem.map((item) => { if (e.target.id == item.id) {
            item.hideAddToCart = true;
            item.quantityCount=1;
            item.priceCount=parseInt(item.productPrice)*item.quantityCount;
        }});
        setProductElem([...productElem]);
        console.log(productElem);
    };
    const decrementCount = (e) => {
        if (e.target.value > 1){
            productElem.map((item) => { if (e.target.id == item.id){
                item.quantityCount--;            
                item.priceCount=parseInt(item.productPrice)*item.quantityCount;}});
            return setProductElem([...productElem]);
        }
        setProductCount(productCount - 1);
        productElem.map((item) => { if (e.target.id == item.id){
            item.hideAddToCart = false;
            item.quantityCount=0;
            item.priceCount=parseInt(item.productPrice)*item.quantityCount;
        }});
        setProductElem([...productElem]);
    };
    const addProductCount=(e)=>{
        productElem.map((item) => { if (e.target.id == item.id){
            item.quantityCount++;        
            item.priceCount=parseInt(item.productPrice)*item.quantityCount;}});
        setProductElem([...productElem]);
        console.log(productElem);
    };
    return (
        <>
            <Nav productCount={productCount} />
            <div className="absolute top-[200px] lg:top-[100px] md:top-[100px]">
            {/* <div className="absolute lg:top-[100px] md:top-[150px] sm:top-[200px] xs:top-[200px]"> */}
                <div className="w-full grid grid-cols-2 items-center text-center">
                    <img src={veggies} className="" />
                    <div className="">
                        <span className="text-5xl">GRAB</span>
                        <br /><span className="text-2xl">50% - 60%</span>
                        <br /> off on fresh fruits,
                        <br /> vegetables, etc.. <br />
                        <br /><span className="mt-4 p-2 bg-[#FF851B]">USECODE : GRABOFF</span>

                    </div>
                </div>
                <ProductItem productElem={productElem} addCartHandler={incrementCount} removeCartHandler={decrementCount} addProductHandler={addProductCount}/>
            </div>
        </>
    );
}
export default ShoppingPage;