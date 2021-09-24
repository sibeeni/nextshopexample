import { Fragment } from 'react';
import MainHeader from './main-header';
import MainSubHeader from './main-subheader';
import MainFooter from './main-footer';
import MainNavFooter from './main-nav-footer';
import classes from './layout.module.css';

function Layout (props) {
    return (
        <Fragment >
            <div className={classes.main_layout} >
                <MainHeader />
                <MainSubHeader />
                <main>{props.children}</main>
                <MainFooter />
                <MainNavFooter />
            </div>
        </Fragment>
    )
}

export default Layout;