import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ()=> {
    const authToken = localStorage.getItem("authorization");
    const [cartData, setCartData] = useState([]);
    const [price, setPrice] = useState(0);
    useEffect(()=> {
        fetch("http://localhost:3002/cart", {
            headers: {
                authorization: authToken
            }
        }).then((res)=>res.json()).then((data)=> {
            setCartData(data.cart)
        })
    }, [])

    // const handlePrice = () => {
    //     let ans = 0;
    //     cartData.map((item) => (ans += item.actual_price * item.price));
    //     setPrice(ans);
    //   };
    return (
        <>
        
        <article>
      {cartData.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.item_name} alt="" />
            <p>{item.actual_price}</p>
            <p>{item.total_quantity}</p>

          </div>
          <div>
            <button onClick={() =>(item, 1)}>+</button>
            <button>{item.actual_price}</button>
            <button onClick={() => (item, -1)}>-</button>
          </div>
          <div>
            <span>{item.actual_price}</span>
        
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
        
        </>
    )
}
export default Cart;