import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

import ArrowBackIcon from '@/public/icons/arrow-back.svg'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <Link href="#">
            <Image src={ArrowBackIcon} alt='Arrow back icon' />
            Back
          </Link>
          <div>
            <h1>Your estimation for <span>Mary’s NY Townhouse</span></h1>
            <p>Here is a detailed estimate for your customized home. Review each section to ensure <br />
              your choices match your preferences. Adjust any options as needed to create your <br />
              perfect living space.</p>
          </div>
        </header>
        <div>

        </div>
      </main>
    </div>
  );
}
