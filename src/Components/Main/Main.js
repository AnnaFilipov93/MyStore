import React from 'react'
import './Main.css';
import product from "../../Data/product";

const Main = () => {
    console.log(product);
    const listItems = product.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>

    );
    return (
        <div className='container'>
            <h3>All Toys</h3>
            <div className="main_content">
                  
                {listItems}
            </div>
        </div>
    )
}
export default Main;