import { Fragment } from 'react'
import classes from './search.module.css'
import { useRouter } from 'next/router'
import { useEffect , useState} from "react";
import Image from 'next/image';
import SearchProduct from '../../components/home-page/product/search-product';


function SearchPage(){
    const [keywords, setKeywords] = useState('')
    const [fetchedData, setFetchedData] = useState('')
    const [isFound, setIsFound] = useState(false)

    async function fetchData() {
        if (keywords){
            fetch('https://nextshopexample-default-rtdb.asia-southeast1.firebasedatabase.app/hotproducts.json')
            .then(response => response.json())
            .then(data => {
                console.log('keywords: [' + keywords + ']');
                const transformedProduct = [];

                //transform json obj to array
                for (const key in data){
                    if (data[key].name.toLowerCase().includes(keywords)) {
                        transformedProduct.push({
                            id: key, 
                            name: data[key].name,
                            image: data[key].image,
                            slug: data[key].slug,
                            price: data[key].price
                        });
                    }   
                }

                if (transformedProduct && transformedProduct.length > 0) {
                    console.log('transformedProduct: ' + transformedProduct);
                    setIsFound(true);
                    setFetchedData(transformedProduct);
                }
            });
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

      
    const handleSubmit = e => {
        e.preventDefault();
        fetchData()
    }

    return (
        <Fragment>
            <div className={classes.search_section}>
                <form onSubmit={handleSubmit}>
                    <div className={classes.search_grid}>
                        <input 
                            className={classes.input_search} 
                            id="name"
                            name="name" 
                            type="text"
                            autoComplete="name" 
                            value={keywords}
                            onChange={e => setKeywords(e.target.value)}
                            required />
                        <button className={classes.button_search} type="submit">Search</button>
                    </div>
                </form>
                
                {isFound
                    ? <SearchProduct products={fetchedData}/>
                    : <div>No product</div>
                }
            </div>
        </Fragment>
    )
}


export default SearchPage;