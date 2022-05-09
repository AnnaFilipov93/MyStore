import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
    render() {
        return (
           
            <div className="row">
                  <h1>SOUL MATE</h1>
                    <div >
                        <img src="https://www.kolbopet.co.il/wp-content/uploads/2021/05/Dogs-category-1.jpg" alt="dog" width="300" height="300"></img>
                        <a href="Products/Dog" target="_blank">Dog toys</a>
                    </div>
                    <div >
                        <img src="https://www.kolbopet.co.il/wp-content/uploads/2021/05/Cats-category-1.jpg" alt="cat" width="300" height="300"></img>
                        <a href="Products/Cat" target="_blank">Cat toys</a>
                    </div>
                    <div >
                        <img src="https://www.kolbopet.co.il/wp-content/uploads/2021/05/Rodent-category-1.jpg" alt="Rodent" width="300" height="300"></img>
                        <a href="Products/Rodent" target="_blank">Rodent toys</a>
                    </div>
            </div>
            
        )
    }
}
