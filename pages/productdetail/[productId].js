import { Fragment } from 'react'
import classes from './productdetail.module.css'
import { useRouter } from 'next/router'
import { useEffect , useState} from "react";
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

function ProductDetail(){
    const router = useRouter()
    const { productId } = router.query


    //--Product fetching
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch('https://nextshopexample-default-rtdb.asia-southeast1.firebasedatabase.app/hotproducts.json')
        .then(response => response.json())
        .then(data => {
            const transformedProduct = [];

            //transform json obj to array
            for (const key in data){
                if (key == productId) {
                    transformedProduct.push({
                        id: key, 
                        name: data[key].name,
                        image: data[key].image,
                        slug: data[key].slug,
                        price: data[key].price,
                        desc: data[key].desc,
                    });
                }   
            }

            setProduct(transformedProduct[0]);
            console.log('transformedProduct: ' + JSON.stringify(transformedProduct[0]));

            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!product) {
        return <p>No data yet</p>
    }
    //--Product fetching
    
    const imagePath = `/images/product/${product.image}`;

    return (
        <Fragment>
            <div className={classes.product_slot}>
                <div className={classes.product_image}>
                    <Image 
                        src={imagePath} 
                        alt="{name}"
                        width="100%"
                        height="100%"
                        layout="responsive"
                    />
                </div>
                <div className={classes.product_content}>
                    <div className={classes.product_inner_content}>
                        <div>
                            <b>{product.name}</b>
                        </div>
                        <div className={classes.product_price}>
                            $ {product.price}
                        </div>
                    </div>
                    <div className={classes.product_desc}>
                        <ReactMarkdown>{product.desc}</ReactMarkdown>
                    </div>
                    <div className={classes.product_button}>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default ProductDetail;