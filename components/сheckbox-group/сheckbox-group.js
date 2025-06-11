'use client';

import { useState } from 'react';

import classes from './сheckbox-group.module.scss';
import SectionTitle from '../common/section-title';

const options = [
  {
    id: "option1",
    title: "Solar and lithium batteries Upgrade",
    shortDesc: "Short Description",
    premium: "Premium Option",
    description: "Description of upgrade variant here",
  },
  {
    id: "option2",
    title: "Tesla Charging Upgrade",
    shortDesc: "Short Description",
    premium: "Premium Option",
    description: "Description of upgrade variant here",
  },
  {
    id: "option3",
    title: "Tesla Charging Upgrade",
    shortDesc: "Short Description",
    premium: "Premium Option",
    description: "Description of upgrade variant here",
  },
];

export default function CheckboxGroup() {
  const [checked, setChecked] = useState({});

  console.log(checked);

  const toggleCheck = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className={classes.wrapper}>
      <header>
        <SectionTitle>Eco Upgrades</SectionTitle>
        <p>Below are the details of the upgrades you have selected, tailored to meet your preferences and needs. Review and confirm these choices to finalize your personalised home design.</p>
      </header>

      <div className={classes.container}>
        {options.map(({ id, title, shortDesc, premium, description }) => {
          const isChecked = checked[id];

          return (
            <label
              key={id}
              htmlFor={id}
              className={`${classes.option} ${isChecked ? classes.checked : ""}`}
            >
              <input
                id={id}
                type="checkbox"
                checked={isChecked || false}
                onChange={() => toggleCheck(id)}
              />

              <div className={`${classes.checkbox} ${isChecked ? classes.checkboxChecked : ""}`}>
                {isChecked && <div className={classes.innerCircle} />}
              </div>

              <div className={classes.content}>
                <h3>{title}</h3>
                <p>{shortDesc}</p>
                <hr />
                <span>{premium}</span>
                <p>{description}</p>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
}