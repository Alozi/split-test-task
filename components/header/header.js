'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import classes from './header.module.scss';
import NavLink from "./nav-link.js";

import ShareIcon from '@/public/icons/share.svg';
import CloudIcon from '@/public/icons/cloud.svg';
import AccountIcon from '@/public/icons/account.svg';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <button
                    className={`${classes.burger} ${menuOpen ? classes.open : ''}`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                </button>

                <nav className={`${classes.nav} ${menuOpen ? classes.active : ''}`}>
                    <ul>
                        <li>
                            <NavLink href="/book-a-call" primary={true} onClick={handleLinkClick}>Book A Call</NavLink>
                        </li>
                        <li>
                            <NavLink href="/share" onClick={handleLinkClick}>
                                <Image src={ShareIcon} alt='Share icon' />
                                Share
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/save" onClick={handleLinkClick}>
                                <Image src={CloudIcon} alt='Cloud icon' />
                                Save
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/profile" onClick={handleLinkClick}>
                                <Image src={AccountIcon} alt='Account icon' />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}