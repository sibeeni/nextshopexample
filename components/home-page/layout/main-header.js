import Link from 'next/link';
import classes from './main-header.module.css'
import Image from 'next/image';

function MainHeader(){
    return (
        <header>
            <div className={classes.header}>
            <Link href='/'>
                <a>
                    <div>
                        <Image 
                            src="/images/header/logo_ns.png" 
                            alt="Next store image" 
                            width={200} 
                            height={200}
                        />
                    </div>
                </a>
            </Link>
            </div>
        </header>

    )
}

export default MainHeader;