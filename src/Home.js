import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ItemCard from'./itemCard';
import data from  './data';
function componentName() {
  
  return (
    <div>
      <h2 className="text-center">All Items</h2>
      <section className="py-4 container">
            <div className="row justify-content-center">
            {data.productData.map((item,index)=>{
            return(

            <ItemCard
             img={item.img} 
            title={item.title}
             desc={item.desc}
              item={item}  
              price={item.price}
               key={index} />
            )
            })}
            
            </div>
           
      </section>
    </div>
  );
}

export default componentName;
