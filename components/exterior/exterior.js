import styles from "./exterior.module.scss";

import SectionTitle from "../common/section-title";
import LinkWithIcon from "@/components/common/link-with-icon";
import SetIcon from '@/public/icons/set.svg';

export default function Exterior() {
    return <div className={styles.wrapper}>
        <div>
            <SectionTitle>Exterior</SectionTitle>
            <LinkWithIcon href="#" title="Edit" icon={SetIcon} />
        </div>
    </div>
}