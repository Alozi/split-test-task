import Image from 'next/image';
import classes from './header.module.scss';
import NavLink from "./nav-link.js";

import ShareIcon from '@/public/icons/share.svg';
import CloudIcon from '@/public/icons/cloud.svg';
import AccountIcon from '@/public/icons/account.svg'

export default function Header() {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink href="/book-a-call" primary={true}>Book A Call</NavLink>
                    </li>
                    <li>
                        <NavLink href="/share">
                            <Image src={ShareIcon} alt='Share icon' />
                            Share
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/save">
                            <Image src={CloudIcon} alt='Cloud icon' />
                            Save
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/profile">
                            <Image src={AccountIcon} alt='Account icon' />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}