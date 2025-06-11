import Image from "next/image";
import Link from "next/link";

import classes from './link-with-icon.module.scss';

export default function LinkWithIcon({ title, icon, ...props }) {
    return <Link href="#" className={classes.link} {...props}>
        <Image src={icon} alt={title} />
        {title}
    </Link>
}