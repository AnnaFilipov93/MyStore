import React from 'react'
import './Main.css';

const Main = (props) => {   

    const {onAdd , products} = props;
    
    console.log("products: ",products);
    const listItems = products.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <button className="btn" onClick={() => onAdd(item)}>Add to cart 
                </button>
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