import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal,
  } = useCart();
  if (isEmpty) return <h2 className='text-center'>Your cart is empty</h2>;

  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <h5>
            Items Type ({totalUniqueItems}) total Items :({totalItems})
          </h5>
          <table className='table table-light table-hover m-3'>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} alt='gg' />
                    </td>
                    <td> {item.title} </td>
                    <td> {item.price} </td>

                    <td>quantity: {item.quantity} </td>
                    <td className='flex-row-reverse'>
                      <td>
                        <button
                          className='btn btn-success '
                          onClick={() => {
                            updateItemQuantity(item.id, item.quantity + 1);
                          }}
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <button
                          className='btn btn-success'
                          onClick={() => {
                            updateItemQuantity(item.id, item.quantity - 1);
                          }}
                        >
                          -
                        </button>
                      </td>
                      <td>
                        <button
                          className='btn btn-danger'
                          onClick={() => {
                            removeItem(item.id);
                          }}
                        >
                          Remove Item
                        </button>
                      </td>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='col-auto ms-auto'>
          <h2>Total Price :$ {cartTotal}</h2>
        </div>
        <div className='col-auto'>
          <button
            className='btn btn-primary btn-sm col-xs-2'
            onClick={() => {
              emptyCart();
            }}
          >
            Buy Now
          </button>
        </div>

        <div className='col-auto'>
          <button
            className='btn btn-danger  btn-sm col-xs-2'
            onClick={() => {
              emptyCart();
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
