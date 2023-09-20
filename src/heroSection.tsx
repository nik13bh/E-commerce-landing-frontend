import { useState } from "react";
let ctr=1;
function HeroSection(){
    const [counter,setCounter]=useState(0);
    const[image,setImage]=useState("../images/image-product-1.jpg");

    return(
        <>
        <div className="md:hidden">
            <img src={image} alt="shoe images" className="mt-7" />
            <div className="flex flex-row items-center justify-center">
            <img src="../images/icon-previous.svg" alt="" className="m-3" onClick={()=>{
                
                
                if(ctr<4){
                    ctr++;

                    let imageUrl="../images/image-product-"+ctr+".jpg";
                    
                    setImage(imageUrl);
                }
                else if(ctr>=4){
                    ctr=1;
                    let imageUrl="../images/image-product-"+ctr+".jpg";
                    setImage(imageUrl);

                }

            }}/>
            <img src="../images/icon-next.svg" alt=""onClick={()=>{
                
                
                if(ctr<4){
                    ctr++;

                    let imageUrl="../images/image-product-"+ctr+".jpg";
                    
                    setImage(imageUrl);
                }
                else if(ctr>=4){
                    ctr=1;
                    let imageUrl="../images/image-product-"+ctr+".jpg";
                    setImage(imageUrl);

                }

            }}/> 
            

            </div>
            
            
            <p className="mt-10 ml-5 text-s text-orange-500 font-bold">SNEAKER COMPANY</p>
            <p className="mt-3 ml-5 text-4xl text-black-300 font-bold">Fall Limited Edition</p>
         <p className="ml-5 text-4xl text-black-300 font-bold">Sneakers</p>
         <p className="mt-4 text-s text-gray-500 ml-5">These low profile sneakers are your perfect casual wear.Featuring a durable rubber outer sole, they will withstand everything the whether will offer;</p>
         <div className="flex flex-row ml-5 mt-12">
            <p className="font-bold text-3xl text-black-300 ml-5">$125.00</p>
            <p className="ml-7 text-orange-500 bg-orange-100 rounded-lg">50%</p>
            <p className="line-through text-gray-600 text-xl ml-40 mt-2 ">250$</p>
         </div>
         <div className="flex flex-row ">
            <div className="mt-16  w-60 bg-gray-100 h-10 ml-40 rounded-lg flex items-center justify-around mt-3">
                <button className="text-orange-600 ml-3 mt-2 text-2xl font-bold" onClick={()=>{
                    setCounter(counter-1);
                }}>-</button>
                <p className="text-black-600 font-bold">{counter}</p>
                <button className="text-orange-600 ml-3 mt-2 text-2xl mb-1 font-bold " onClick={()=>{
                    setCounter(counter+1);
                }}>+</button>
                

            </div>
            
            </div>

            <div className=" mt-10 w-[70%] bg-orange-400 h-18 ml-24 rounded-xl flex flex-row items-center justify-center md:w-60 ">
                <img src="../images/icon-cart.svg" className=" text-white m-3" alt="" />
                <p className="text-white">Add to cart</p>

            </div>
         
        </div>
        <div className=" hidden md:flex flex-row">
        <div>
        <img src={image} alt="" className="max-w-md mt-20 ml-60 rounded-2xl" />
        <div className="flex flex-row">
        <img src="../images/image-product-1-thumbnail.jpg" alt="" className="w-auto h-24 ml-60 rounded-lg mt-6" onClick={()=>{
            setImage("../images/image-product-1.jpg");
        }} />
        <img src="../images/image-product-2-thumbnail.jpg" alt="" className="w-auto h-24 ml-6 rounded-lg mt-6" onClick={()=>{
            setImage("../images/image-product-2.jpg");
        }} />
        <img src="../images/image-product-3-thumbnail.jpg" alt=""  className="w-auto h-24 ml-6  rounded-lg mt-6" onClick={()=>{
            setImage("../images/image-product-3.jpg");
        }}/>
        <img src="../images/image-product-4-thumbnail.jpg" alt="" className="w-auto h-24 ml-6  rounded-lg mt-6" onClick={()=>{
            setImage("../images/image-product-4.jpg");
        }} />

        </div>
        
        </div>
        <div>
        <p className=" mt-36 ml-40 text-s text-orange-500 font-bold">SNEAKER COMPANY</p>
         <p className="mt-8 ml-40 text-4xl text-black-300 font-bold">Fall Limited Edition</p>
         <p className="mt-5 ml-40 text-4xl text-black-300 font-bold">Sneakers</p>
         <br />
         
         <p className="mt-4 text-s text-gray-500 ml-40">These low profile sneakers are your perfect casual wear</p>. <p className="text-s text-gray-500 ml-40">Featuring a durable rubber outer sole, they will withstand everything the whether will offer;</p>
         <div className="flex flex-row ml-40 mt-12">
            <p className="font-bold text-3xl text-black-300">$125.00</p>
            <p className="ml-20 text-orange-500 bg-orange-100 rounded-lg">50%</p>
            
         </div>
         <p className="line-through text-gray-600 text-xl ml-40 mt-2 ">250$</p>
         <div className="flex flex-row ">
            <div className="w-60 bg-gray-100 h-10 ml-40 rounded-lg flex items-center justify-around mt-3">
                <button className="text-orange-600 ml-3 mt-2 text-2xl font-bold" onClick={()=>{
                    setCounter(counter-1);
                }}>-</button>
                <p className="text-black-600 font-bold">{counter}</p>
                <button className="text-orange-600 ml-3 mt-2 text-2xl mb-1 font-bold " onClick={()=>{
                    setCounter(counter+1);
                }}>+</button>
                

            </div>
            <div className="w-60 bg-orange-400 h-18 ml-6 rounded-xl flex flex-row items-center justify-center ">
                <img src="../images/icon-cart.svg" className=" text-white m-3" alt="" />
                <p className="text-white">Add to cart</p>

            </div>
            

         </div>

        </div>
        </div>

        </>
        
    )
}
export default HeroSection;