import classes from './products-grid.module.css';
import ProductItem from './product-item';

function ProductsGrid (props) {
    const { products } = props;
    
    return (
        <div className={classes.grid_product_grid}>
            {products.map( (product) => (
                <ProductItem key={product.slug} product={product}/>
            ))}
        </div>
    );
}

export default ProductsGrid;