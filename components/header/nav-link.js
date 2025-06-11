'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from './nav-link.module.scss';

export default function NavLink({ href, children, primary }) {
    const path = usePathname();

    let linkClasses = `${classes.link}`;

    if (path.startsWith(href)) {
        linkClasses += ` ${classes.active}`;
    }

    if (primary) {
        linkClasses += ` ${classes.primary}`;
    }

    return (
        <Link href={href} className={linkClasses}>
            {children}
        </Link>
    );
}