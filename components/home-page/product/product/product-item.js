import Link from 'next/link';
import classes from './product-item.module.css';
import Image from 'next/image';

function ProductItem(props) {
    const { slug, id, name, price, image } = props.product;

    const imagePath = `/images/product/${image}`;
    const linkPath = `/productdetail/${id}`;

    return (
        <div className={classes.product_item_content}>
            <Link href={linkPath}>
                <a>
                    <div className={classes.product_item_image}>
                        <Image 
                            src={imagePath} 
                            alt="{name}"
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className={classes.product_item_name}>{name}</div>
                    <div className={classes.product_item_price}>$ {price}</div>                            
                </a>
            </Link>
        </div>
    );
}

export default ProductItem;