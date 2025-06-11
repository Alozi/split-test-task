'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import Link from 'next/link';
import SectionTitle from '../common/section-title';
import classes from './cart.module.scss';

import { Inter } from 'next/font/google';

import CartIcon from '@/public/icons/cart.svg'

const inter = Inter({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
});

export default function Cart({ ...props }) {
    const cartRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <div {...props} ref={cartRef}>
                <section className={`${classes.wrapper} ${isOpen ? classes.open : ''}`}>
                    <header>
                        <SectionTitle colorLight={true}>Summary</SectionTitle>
                        <button
                            className={classes.closeButton}
                            onClick={() => setIsOpen(false)}
                            aria-label="Close cart"
                        >
                            ×
                        </button>
                    </header>
                    <ul>
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
            </div>
            <button
                className={classes.floatingButton}
                onClick={() => setIsOpen(true)}
                aria-label="Open cart"
            >
                <Image src={CartIcon} alt='Account icon' />
            </button>
        </>
    );
}