import React from "react";
import { useCart } from "react-use-cart";

const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
      <div className='card'>
      <br></br>
        <img
          src={props.img}
          className='card-img-top '
          alt='hh'
          width={250}
          height={250}
        />
        <hr></hr>
        <div className='card-body text-center'>
          <h5 className='card-title text-capitalize'>{props.title}</h5>
          <p className='card-text'>{props.dsc}</p>
          <h6 className='lead text' style={{fontWeight:'bold',fontSize:'16px'}}>price: $ {props.price}</h6>
          <button
            className='btn btn-success'
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
