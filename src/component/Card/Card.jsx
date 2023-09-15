import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";




const Card = () => {

    const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])
 
    
             
    return (
        <div className="w-11/12 mx-auto ">
            <h1 className="text-center text-4xl font-bold mt-4 md:mt-8">Course Registration</h1>
         <div className="home_container md:flex mt-9 gap-4">

            <div className="card-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-9/12 gap-4">
               {
                data.map((datas) => (
                    <div key={datas.id} className="card  bg-base-100 shadow-xl space-y-4">
                    <figure className="mt-4"><img src={datas.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="text-lg font-bold">{datas.course_name}</h2>
                      <p className="text-sm font-normal">{datas.detiels}.....</p>
                      <div  className="flex justify-between  mb-4">
                        <div>
                            <p>  price: {datas.price}</p>
                        </div>
                        <div>
                            <p>Credit : {datas.credit}</p>
                        </div>
                      </div>
                      <div className="card-actions justify-center">
                        <button className="btn btn-primary md:px-12 lg:px-24">Select</button>
                      </div>
                    </div>
                  </div>
                ))
               }
            </div>

            <div className="card h-max bg-base-100 shadow-lg">
             <Cart></Cart>
            </div>
             
         </div>

        </div>
    );
};

export default Card;