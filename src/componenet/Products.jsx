import React from 'react'
import { produsts } from '../data/products'
import Product from './Product'
import styles from "../componenet/Product.module.css"
import Container from './UI/Container'

function Products() {
  return (
   <Container>
    <h1 className={styles.productHeading}>Best Shoping Website</h1>
    <div  className={styles.products}>
      {produsts.map(product => <Product key={product.id} {...product}/>)}
    </div>
       
        </Container>
  )
}

export default Products