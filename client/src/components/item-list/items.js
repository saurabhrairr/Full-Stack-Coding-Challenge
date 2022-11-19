import axios from "axios";
import { useEffect, useState } from "react";
import "./item.css";
const Items = ()=> {
    const [items, setItems] = useState([]);
    useEffect(()=> {
        axios({
            method: "GET",
            url: "http://localhost:3002/item"
        }).then((itemData)=> {
            setItems(itemData.data.item);
            console.log(itemData.data.item);
        }).catch((err)=> {
            console.log(err)
        })
    }, [])
    const handleBuy = ()=> {

    }
    const handleCart = (item)=> {
        console.log(item);
        const payload = {
            itemid: item.item_id
        }
        const authToken = localStorage.getItem("authorization");
        //fetch(url, "")
        fetch("http://localhost:300/cart/add",{
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                authorization: authToken,
                "Content-Type": "application/json"
            }
        }).then((data)=>data.json()).then((res)=> {
            console.log(res)
        }).catch((err)=> {
            console.log(err)
        })
    }
    return(
        <>
    <div className="container">
        {items.map((item,i)=> {
            return (
                <div className="item-card" key={i}>
            <div className="item-heading">
                {item.item_name}
            </div>
            <div className="item-price">
                {`Rs. ${item.total_quantity}`}
            </div>
            <div className="item-price">
                {item.actual_price}
            </div>
           
            <button type="button" onClick={()=> {handleCart(item)}}>Add To Cart</button>
            <button type="button" onClick={handleBuy}>Buy Now</button> 
        </div>
            )
        })}
        
    </div>
    </>
    )
    
};
export default Items