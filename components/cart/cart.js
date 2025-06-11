import Link from 'next/link';
import SectionTitle from '../common/section-title';
import classes from './cart.module.scss';

import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
});

export default function Cart({ ...props }) {
    return (<div {...props}>
        <section className={classes.wrapper}>
            <header>
                <SectionTitle colorLight={true}>Summary</SectionTitle>
            </header>
            <ul className={classes.table}>
                <li>
                    <span className={classes.title}>Base price</span>
                    <span className={classes.price}>$82,800.00</span>
                </li>
                <li>
                    <span className={classes.title}>Exterior options</span>
                    <span className={classes.price}>+ $123,45</span>
                </li>
                <li>
                    <span className={classes.title}>Interior options</span>
                    <span className={classes.price}>+ $123,45</span>
                </li>
                <li>
                    <span className={classes.title}>Ground floor <br />options</span>
                    <span className={classes.price}>+ $123,45</span>
                </li>
                <li>
                    <span className={classes.title}>Second floor <br />options</span>
                    <span className={classes.price}>+ $123,45</span>
                </li>
                <li>
                    <span className={classes.title}>Kitchen options</span>
                    <span className={classes.price}>+ $123,45</span>
                </li>
                <li>
                    <span className={classes.title}>Bathroom options</span>
                    <span className={classes.price}>+ $123,45</span>
                </li>
                <li>
                    <span className={classes.title}>Living room  <br />options</span>
                    <span className={classes.price}>+ $123,45</span>
                </li>
                <li>
                    <span className={classes.title}>Bedroom options</span>
                    <span className={classes.price}>+ $123,45</span>
                </li>
                <li>
                    <span className={classes.title}>Extra - M&E default  <br />option</span>
                    <span className={classes.price}>+ $123,45</span>
                </li>
                <li>
                    <span className={classes.title}>Extra - Insulation option B</span>
                    <span className={classes.price}>+ $123,45</span>
                </li>
                <li>
                    <span className={classes.title}>Extra - Eco Solar Panels</span>
                    <span className={classes.price}>+ $123,45</span>
                </li>
            </ul>
            <div className={classes.totalRow}>
                <div>
                    <span>price estimate</span>
                    <span className={classes.totalPrice}>$96,453.22</span>
                </div>
                <div>
                    <span>monthly payments <Link href="#">More Info</Link></span>
                    <span className={classes.totalPrice}>$6,453.22</span>
                </div>
                <button className={inter.className}>send inquiry</button>
            </div>
        </section>
    </div>);
}