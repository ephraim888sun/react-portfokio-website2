import React from 'react'
import Product from '../product/Product'
import { products } from '../../data'
import './productList.css'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((d) => (
          <Product key={d.id} img={d.img} link={d.link} />
        ))}
      </div>
    </div>
  )
}

export default ProductList