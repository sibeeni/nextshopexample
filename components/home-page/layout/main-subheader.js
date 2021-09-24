import Link from 'next/link';
import { Fragment } from 'react';
import classes from './main-subheader.module.css'
import Image from 'next/image';


function MainHeader(){
    return (
        <Fragment>
            <nav className={classes.subheader}>
                <div className={classes.subheadercenter}>
                    <Link href="/spice">Spice</Link>
                    <Link href="/vegetable">Vegetable</Link>
                </div>
                <div className={classes.subheaderright}>
                    <Link href="/profile">
                        <a>
                            <div className={classes.subheaderright_content}>
                                <div>Profile</div>
                                <div style={{paddingLeft: '10px', marginTop: '-2px'}}>
                                    <Image 
                                        src="/images/common/user.png" 
                                        alt="Home" 
                                        width={22} 
                                        height={22}
                                    />
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </nav>
        </Fragment>

    )
}

export default MainHeader;