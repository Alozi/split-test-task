import Link from "next/link";

import classes from './header.module.scss';

export default function Header() {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link href="/book-a-call">Book A Call</Link>
                    </li>
                    <li>
                        <Link href="/share">Share</Link>
                    </li>
                    <li>
                        <Link href="/save">Save</Link>
                    </li>
                    <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}