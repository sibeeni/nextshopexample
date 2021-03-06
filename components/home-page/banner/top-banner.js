import Image from 'next/image';
import Link from 'next/link';
import classes from './top-banner.module.css'

function TopBanner(props) {
    const { id, name, image } = props.banners[0];
    const imagePath = `/images/topbanner/${image}`;

    return ( 
        <section>
            <div className={classes.top_banner}>
                <Link href='https://www.freepik.com/photos/background'>
                    <a>
                        <Image 
                            src={imagePath} 
                            alt="Background photo created by jcomp - www.freepik.com" 
                            width={500} 
                            height={250}
                        />
                    </a>
                </Link>
                <div className={classes.top_banner_text_info}>
                    <Link href='https://www.freepik.com/photos/background'>
                        Background photo created by jcomp - www.freepik.com
                    </Link>    
                </div>
            </div>
        </section>
    );
}

export default TopBanner;