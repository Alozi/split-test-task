import Image from "next/image";
import classes from "./exterior.module.scss";

import SectionTitle from "../common/section-title";
import LinkWithIcon from "@/components/common/link-with-icon";
import ExteriorImage from '@/public/images/exterior-image.png';

import SetIcon from '@/public/icons/set.svg';
import DarkWood from '@/public/images/dark-wood-color.png';
import LightGrey from '@/public/images/light-grey-color.png';

export default function Exterior() {
    return <section className={classes.wrapper}>
        <div>
            <header>
                <SectionTitle>Exterior</SectionTitle>
                <LinkWithIcon href="#" title="Edit" icon={SetIcon} />
            </header>

            <table className={classes.table}>
                <tbody>
                    <tr>
                        <td className={classes.title}>1. Exterior cladding</td>
                        <td className={classes.middle}>
                            <Image src={DarkWood} alt="Dark wood" width={38} height={38} />
                            <span>Dark wood</span>
                        </td>
                        <td className={classes.price}>+ $4,123.45</td>
                    </tr>
                    <tr>
                        <td className={classes.title}>2. Exterior cladding</td>
                        <td className={classes.middle}>
                            <Image src={LightGrey} alt="Light grey" width={38} height={38} />
                            <span>Light gray</span>
                        </td>
                        <td className={classes.price}>+ $4,123.45</td>
                    </tr>
                    <tr>
                        <td className={classes.title}>3. Exterior cladding</td>
                        <td className={classes.middle}>
                            <Image src={DarkWood} alt="Dark wood" width={38} height={38} />
                            <span>Dark wood</span>
                        </td>
                        <td className={classes.price}>+ $4,123.45</td>
                    </tr>
                    <tr style={{ height: '24px' }}></tr>
                    <tr className={classes.totalRow}>
                        <td className={classes.totalLabel} colSpan={2}>Total:</td>
                        <td className={classes.totalPrice}>+ $5,800.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={classes.image}>
            <Image src={ExteriorImage} alt="Exterior image" />
        </div>
    </section>
}