import classes from "./page.module.scss";

import BackButton from "@/components/common/back-button";
import Exterior from "@/components/exterior/exterior";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <header className={classes.header}>
          <BackButton />
          <div>
            <h1>Your estimation for <span>Mary’s NY Townhouse</span></h1>
            <p>Here is a detailed estimate for your customized home. Review each section to ensure <br />
              your choices match your preferences. Adjust any options as needed to create your <br />
              perfect living space.</p>
          </div>
        </header>
        <div className={classes.wrapper}>
          <Exterior />
          {/* <Cart /> */}
          {/* <Upgrades /> */}
        </div>
      </main>
    </div>
  );
}
