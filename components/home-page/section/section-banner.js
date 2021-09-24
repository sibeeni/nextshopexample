import Image from 'next/image';
import Link from 'next/link';
import classes from './section-banner.module.css'

function SectionBanner() {
    return ( 
        <section>
            <div className={classes.section_banner}>
                <div className={classes.section_banner_title}>Today interesting promotion</div>
                <div className={classes.section_banner_content}>
                    <div>
                        <Link href='/'>
                            <Image 
                                src="/images/section/section_i.png" 
                                alt="section_i" 
                                width={200} 
                                height={100}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
                            <Image 
                                src="/images/section/section_ii.png" 
                                alt="section_ii" 
                                width={200} 
                                height={100}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
                            <Image 
                                src="/images/section/section_iii.png" 
                                alt="section_iii" 
                                width={200} 
                                height={100}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
                            <Image 
                                src="/images/section/section_iv.png" 
                                alt="section_iv" 
                                width={200} 
                                height={100}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionBanner;