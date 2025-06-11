import classes from "./page.module.scss";

import BackButton from "@/components/common/back-button.js";
import Exterior from "@/components/exterior/exterior.js";
import CheckboxGroup from "@/components/сheckbox-group/сheckbox-group.js";
import Cart from "@/components/cart/cart";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <header className={classes.header}>
          <BackButton />
          <div>
            <h1>Your estimation for <span>Mary’s NY Townhouse</span></h1>
            <p>Here is a detailed estimate for your customized home. Review each section to ensure
              your choices match your preferences. Adjust any options as needed to create your
              perfect living space.</p>
          </div>
        </header>
        <Exterior className={classes.exterior} />
        <CheckboxGroup className={classes.checkboxes} />
        <Cart className={classes.cart} />
      </main>
    </div>
  );
}
