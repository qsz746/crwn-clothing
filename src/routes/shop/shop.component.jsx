import React from 'react';
import Layout from '../../layout/layout.component';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import styles from './shop.module.css';

const Shop=() =>{
    const {products} = useContext(ProductsContext);
    return (
        <Layout>
            <div className={styles.productsContainer}>
                {products.map((product) =>(
                    <ProductCard product={product}/>
                ))}
            </div>
        </Layout>
    );
  };

export default Shop;  