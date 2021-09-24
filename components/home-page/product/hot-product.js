import Image from 'next/image';
import Link from 'next/link';
import classes from './hot-product.module.css'
import ProductsGrid from './product/products-grid';

function HotProduct(props) {
    return ( 
        <section>
            <div className={classes.hot_product}>
                <div className={classes.hot_product_title}>Hot products</div>
                <ProductsGrid products={props.products}/>
            </div>
        </section>
    );
}

export default HotProduct;