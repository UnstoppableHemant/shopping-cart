
import Buttons from './buttons'
import { useState } from 'react'


const ProductItem=(props)=>{
    var totalPriceCount=0;
    //const [totalPriceCount,setTotalPriceCount] = useState(0);
    //console.log(count);
    return(
        <div className="m-3 mt-12 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">{
            props.productElem.map((item)=>{
                totalPriceCount += item.priceCount;
                console.log(totalPriceCount);
                //setTotalPriceCount(totalPriceCount+item?.priceCount);
                return(
                    <>
                    <div className="m-2 p-2 items-center hover:border-2 hover:border-[#0074D9] hover:scale-105 hover:transition-shadow">
                        <img src={item?.productImage} className='w-50 h-40'/>
                        <h1 className='text-2xl'>{item?.productName}</h1>
                        <h3 className='text-sm'>Quantity: {item?.productquantity}</h3>
                        <h3 className='text-md'>Price: ₹{item?.productPrice}/-</h3>
                        {/* {item.hideAddToCart?"":} */}
                        {item.hideAddToCart ? 
                        <div className={`flex items-center text-2xl mt-1 h-[48px]`}>
                        <Buttons btnname="-" id={item?.id} style="h-[40px] border-2 border-[#0074D9] w-[25%] hover:bg-[#0074D9] hover:text-white" val={item.quantityCount} clickEvent={props.removeCartHandler}/>
                        <div className='h-[40px] border-2 border-x-0 border-y-[#0074D9] w-[50%] text-center'>{item.quantityCount}</div>
                        <Buttons btnname="+" id={item?.id} style="h-[40px] border-2 border-[#0074D9] w-[25%] hover:bg-[#0074D9] hover:text-white" val={item.quantityCount} clickEvent={props.addProductHandler}/></div>
                        :<Buttons btnname="Add to Cart" id={item?.id} style="border-2 border-[#FF851B] hover:bg-[#FF851B] hover:text-white focus:scale-90 p-1.5 mt-2 w-full" clickEvent={props.addCartHandler}/>}
                        {/* <Buttons btnname="Remove from Cart" style="bg-[#0074D9] p-1.5 m-1 text-white"/>            */}
                    </div>
                    </>
                );
            })
        }
        <div className='fixed bottom-[30px] right-[30px] text-center items-center bg-[#FF851B] text-white w-[120px] h-[40px]'>
            <Buttons btnname={`Cart ₹${totalPriceCount}/-`} style="w-full h-full"/>
        </div>
        </div>
    )
}

export default ProductItem;