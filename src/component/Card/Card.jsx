import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";



const Card = () => {
  


    const [data, setData] = useState([]);

    const [selectedData, setSelectedData] = useState([]);

    const [totalCredit , setTotalCredit] = useState(0);

    const [remainingCredit, setRemainingCredit] = useState(20);

    const [totalPrice , setTotalPrice] = useState(0);

    

    

  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])


  const handleSelelectData = (data) => {

    let total = data.credit;
    let totalPrice = data.price;
         
    const isExist = selectedData.find(item => item.id === data.id);
    if(isExist)
    {
     
      toast.error('This Course already add pls next Course try. Thank you', {
        position: toast.POSITION.TOP_RIGHT,
      });
      
    }
    else{
      selectedData.forEach(item => {
        total = total + item.credit;
        totalPrice = totalPrice + item.price;
      });

      const remeninngCR = 20 - total;
      
      if(20 < total)
      {
        toast.error('Your Credit limits only 20 credits', {
          position: toast.POSITION.TOP_LEFT,
        });
      }
      else{
        setTotalPrice(totalPrice)
        setTotalCredit(total);
        setRemainingCredit(remeninngCR);
        
        const newData = [...selectedData, data];
        setSelectedData(newData);
      }


      
    }
    
   
  }
  
    
             
    return (
        <div className="w-11/12 mx-auto ">
            <h1 className="text-center text-4xl font-bold mt-4 md:mt-8">Course Registration</h1>
         <div className="home_container md:flex mt-9 gap-4 space-y-4">

            <div className="card-container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 md:w-9/12 gap-4">
               {
                data.map((datas) => (
                    <div key={datas.id} className="card  bg-base-100 shadow-xl space-y-4">
                    <figure className="mt-4"><img src={datas.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="text-lg font-bold">{datas.course_name}</h2>
                      <p className="text-sm font-normal">{datas.detiels}.....</p>
                      <div  className="flex justify-between  mb-4">
                        <div>
                            <p className="flex"> 
                              <span ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                             <path d="M12 1V23" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg></span> 
                             <p>price: {datas.price}</p></p>
                        </div>
                        <div>
                            <p className="flex">
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg></span>
                             <p> Credit : {datas.credit}</p></p>
                        </div>
                      </div>
                      <div className="card-actions justify-center">
                        <button onClick={() =>handleSelelectData(datas)} className="btn btn-primary md:px-12 lg:px-24">Select</button>
                      </div>
                    </div>
                  </div>
                ))
               }
            </div>

            <div className="card h-max bg-base-100 shadow-lg">
             
               <Cart 
               selectedData={selectedData} 
               totalCredit={totalCredit}
               remainingCredit={remainingCredit}
               totalPrice={totalPrice}
               ></Cart>
             
            </div>
             
         </div>
         <ToastContainer />
        </div>
    );
};

export default Card;