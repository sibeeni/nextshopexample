import Link from 'next/link';
import classes from './main-nav-footer.module.css'
import Image from 'next/image';

function MainNavFooter(){
    return (
        <footer className={classes.nav_footer}>
            <nav>
                <div className={classes.nav_footer_grid}>
                    <div className={classes.nav_footer_grid_div_left}>
                        <Link href='/'>
                            <a>
                                <Image 
                                    src="/images/common/home.png" 
                                    alt="Home" 
                                    width={22} 
                                    height={22}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className={classes.nav_footer_grid_div_right}>
                        <Link href='/'>
                            <a>
                                <Image 
                                    src="/images/common/cart.png" 
                                    alt="Cart" 
                                    width={22} 
                                    height={22}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </footer>
    )
}

export default MainNavFooter;