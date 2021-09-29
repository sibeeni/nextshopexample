import Image from 'next/image';
import Link from 'next/link';
import classes from './search-product.module.css'
import ProductsGrid from './product/products-grid';

function SearchProduct(props) {
    return ( 
        <section>
            <div className={classes.search_product}>
                <div className={classes.search_product_title}>Search products</div>
                <ProductsGrid products={props.products}/>
            </div>
        </section>
    );
}

export default SearchProduct;