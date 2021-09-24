import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'
import TopBanner from '../components/home-page/banner/top-banner';
import TopCategory from '../components/home-page/category/top-category';
import SectionBanner from '../components/home-page/section/section-banner';
import HotProduct from '../components/home-page/product/hot-product';
import useSWR from 'swr';
import { useEffect , useState} from "react";

//https://nextshopexample-default-rtdb.asia-southeast1.firebasedatabase.app/topbanner.json
/*const DUMMY_TOP_BANNERS = [
    { 
        id: 'b1',
        name: 'Healthy Vegetables Wooden Table', 
        image: 'healthy-vegetables-wooden-table.jpg', 
    },
];
*/

//https://nextshopexample-default-rtdb.asia-southeast1.firebasedatabase.app/hotproducts.json
/*const DUMMY_HOT_PRODUCTS = [
  { 
      slug: 'p1',
      id: 'p1',
      name: 'Apple', 
      price: '3.5',
      image: 'apple.jpg', 
  },
  { 
      slug: 'p2',
      id: 'p2',
      name: 'Blueberry', 
      price: '5.5',
      image: 'blueberry.jpg', 
  },
  { 
      slug: 'p3',
      id: 'p3',
      name: 'Grape', 
      price: '4.5',
      image: 'grape.jpg', 
  },
  { 
      slug: 'p4',
      id: 'p4',
      name: 'Orange', 
      price: '2',
      image: 'orange.jpg', 
  },
  { 
      slug: 'p5',
      id: 'p5',
      name: 'Strawberry', 
      price: '3.75',
      image: 'strawberry.jpg', 
  },
  { 
      slug: 'p6',
      id: 'p6',
      name: 'Watermelon', 
      price: '7',
      image: 'watermelon.jpg', 
  },
];*/

function Home(props) {
  //--Top banner fetching
  const topBanner=props.topBanner;
  //console.log('topBanner: ', topBanner);
  //--Top banner fetching
  

  //--Hot product fetching
  const [hotProduct, setHotProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      setIsLoading(true);

      fetch('https://nextshopexample-default-rtdb.asia-southeast1.firebasedatabase.app/hotproducts.json')
      .then(response => response.json())
      .then(data => {
          const transformedHotProduct = [];

          //transform json obj to array
          for (const key in data){
              transformedHotProduct.push({
                  id: key, 
                  name: data[key].name,
                  image: data[key].image,
                  slug: data[key].slug,
                  price: data[key].price,
              });
          }

          setHotProduct(transformedHotProduct);
          setIsLoading(false);
      });
  }, []);

  if (isLoading) {
      return <p>Loading...</p>
  }

  if (!hotProduct) {
      return <p>No data yet</p>
  }
  //--Hot product fetching
  

  return (
    <Fragment>
      <TopBanner banners={topBanner}/>
      <TopCategory />
      <SectionBanner />
      <HotProduct products={hotProduct}/>
    </Fragment>
  )
}


export async function getStaticProps() {
  const response = await fetch('https://nextshopexample-default-rtdb.asia-southeast1.firebasedatabase.app/topbanner.json');

  const data = await response.json();
  const transformedTopBanner = [];

  //transform json obj to array
  for (const key in data){
    transformedTopBanner.push({
          id: key, 
          name: data[key].name,
          image: data[key].image,
      });
  }

  return { props: { topBanner: transformedTopBanner}, revalidate: 10};
  //return { props: { topBanner: transformedTopBanner} };
}


export default Home;