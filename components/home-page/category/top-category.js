import Image from 'next/image';
import Link from 'next/link';
import classes from './top-category.module.css'

function TopCategory() {
    return ( 
        <section className={classes.top_category}>
            <div className={classes.top_category_body}>
                <div style={{margin: '7px', fontSize: '14px', align: 'center', textAlign: 'center', minWidth: '60px', minHeight: '60px', display: 'inline-block' }}>
                    <Link href='/'>
                        <a>
                            <Image 
                                src="/images/category/cauliflower.png" 
                                alt="cauliflower.png" 
                                width={46} 
                                height={46}
                            />
                            <div>Cauliflower</div>
                        </a>
                    </Link>
                </div>
                <div style={{margin: '7px', fontSize: '14px', align: 'center', textAlign: 'center', minWidth: '60px', minHeight: '60px', display: 'inline-block' }}>
                    <Link href='/'>
                        <a>
                            <Image 
                                src="/images/category/tangerine.png" 
                                alt="tangerine.png" 
                                width={46} 
                                height={46}
                            />
                            <div>Tangerine</div>
                        </a>
                    </Link>
                </div>
                <div style={{margin: '7px', fontSize: '14px', align: 'center', textAlign: 'center', minWidth: '60px', minHeight: '60px', display: 'inline-block' }}>
                    <Link href='/'>
                        <a>
                            <Image 
                                src="/images/category/vegetables.png" 
                                alt="vegetables.png" 
                                width={46} 
                                height={46}
                            />
                            <div>Vegetables</div>
                        </a>
                    </Link>
                </div>
                <div style={{margin: '7px', fontSize: '14px', align: 'center', textAlign: 'center', minWidth: '60px', minHeight: '60px', display: 'inline-block' }}>
                    <Link href='/'>
                        <a>
                            <Image 
                                src="/images/category/broccoli.png" 
                                alt="broccoli.png" 
                                width={46} 
                                height={46}
                            />
                            <div>Broccoli</div>
                        </a>
                    </Link> 
                </div>
                <div style={{margin: '7px', fontSize: '14px', align: 'center', textAlign: 'center', minWidth: '60px', minHeight: '60px', display: 'inline-block' }}>
                    <Link href='/'>
                        <a>
                            <Image 
                                src="/images/category/kiwi.png" 
                                alt="kiwi.png" 
                                width={46} 
                                height={46}
                            />
                            <div>Kiwi</div>
                        </a>
                    </Link>      
                </div>     
                <div style={{margin: '7px', fontSize: '14px', align: 'center', textAlign: 'center', minWidth: '60px', minHeight: '60px', display: 'inline-block' }}>
                    <Link href='/'>
                        <a>
                            <Image 
                                src="/images/category/cauliflower.png" 
                                alt="cauliflower.png" 
                                width={46} 
                                height={46}
                            />
                            <div>Cauliflower</div>
                        </a>
                    </Link>
                </div>
                <div style={{margin: '7px', fontSize: '14px', align: 'center', textAlign: 'center', minWidth: '60px', minHeight: '60px', display: 'inline-block' }}>
                    <Link href='/'>
                        <a>
                            <Image 
                                src="/images/category/tangerine.png" 
                                alt="tangerine.png" 
                                width={46} 
                                height={46}
                            />
                            <div>Tangerine</div>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={classes.top_category_text_info}>
                Stickers made by 
                <Link href="https://www.flaticon.com/authors/stickers" title="Stickers"> Stickers </Link> 
                from 
                <Link href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</Link>
            </div>
        </section>
    );
}

export default TopCategory;