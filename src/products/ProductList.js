import React, {Component} from 'react';
import { Product } from './Product';



let handleSubmit = function(product){
    console.log('came inside the handle submit function ', product);
}

export class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[   
                {
                    id:1,
                    name:'Vivo',
                    price:15000
                },
                {
                    id:2,
                    name:'Samsung',
                    price:20000
                },
                {
                    id:3,
                    name:'I-Phone',
                    price:40000
                }
            ]
        };
    }

    
    render(){
                return (
                <div className="row">
                   <h1>Number of Products : {this.state.products.length}</h1>
                   {
                       this.state.products.map(product =>
                        <Product key={product.id} data = {product} click={handleSubmit}/>
                    )}
                </div>
            );
    }
}