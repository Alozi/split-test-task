import classes from './section-title.module.scss';

export default function SectionTitle({ children, colorLight }) {
    let linkClasses = `${classes.title}`;

    if (colorLight) {
        linkClasses += ` ${classes.colorLight}`;
    }

    return <h2 className={linkClasses}>{children}</h2 >
}