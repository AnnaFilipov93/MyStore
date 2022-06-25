import React from 'react'
import './Main.css';

const Main = (props) => {   
    let currentProducts = [];
    const {onAdd , products,queryParam} = props;
    
    if(queryParam.length !== 0){
        currentProducts = products.filter(p => p.product_name.toLowerCase().includes(queryParam.toLowerCase()));
    }
    else{
        const path = window.location.pathname;
    
        if(path === '/' || path === '/home' || path === '/Products' || path === '/Products/Products'){
            currentProducts = products;
        } else if (path.split('/')[2] === 'Dog'){
            currentProducts = products.filter(p => p.category === 'dog'); 
        } else if(path.split('/')[2] === 'Cat' ){
            currentProducts = products.filter(p => p.category === 'cat');
        }else if (path.split('/')[2] === 'Rodent'){
            currentProducts = products.filter(p => p.category === 'rodent');
        }
    }
    const listItems = currentProducts.map((item) =>
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
            <h3 style={{color:'white'}}>All Toys</h3>
            <div className="main_content">    
                {listItems.lenght !== 0 ? listItems : <h4 className='container'>Coming soon</h4>}
            </div>
        </div>
    )
}
export default Main;