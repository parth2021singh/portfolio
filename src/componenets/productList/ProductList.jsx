import React from 'react'
import "./ProductList.css"
import Product from "../product/Product"
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">
              Explore More on UI
            </h1>
            <p className="pl-desc">
                In ad velit eiusmod amet irure labore eu laborum duis. Ipsum eu nisi deserunt qui. Exercitation eiusmod reprehenderit amet consectetur sit cupidatat pariatur.
            </p>
        </div>
    <div className="pl-list">
      {
        products.map((item,id)=>{
            return(
                <Product key={id} img={item.img} link={item.link}/>
            )
        })
      }
    </div>
    </div>
  )
}

export default ProductList
