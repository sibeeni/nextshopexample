import Link from 'next/link';
import classes from './main-footer.module.css'

function MainFooter(){
    return (
        <footer className={classes.footer}>
            <nav>
                <div className={classes.footer_title}>
                    Next Store@2021
                </div>
                <div>
                    An experimental and learning project made with NextJS !
                </div>
                <br/>
                <div>
                    <Link href="/about">About</Link>
                </div>
                <br/>
                <div>
                    Logo made by freelogodesign.org<br/>
                    Section image from pexels.com<br/>
                    Background photo created by jcomp - www.freepik.com<br/>
                    Stickers made by Stickers from www.flaticon.com<br/>
                </div>
            </nav>
        </footer>
    )
}

export default MainFooter;