import { Patrick_Hand } from "next/font/google";
import { siteConfig } from "@/lib/config";
import styles from "./ServicesCard.module.css";

const handwriting = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-board-handwriting",
  display: "swap",
});

export function ServicesCard() {
  return (
    <aside aria-labelledby="services-heading" className={`${styles.positioner} ${handwriting.variable}`}>
      <div className={`floating-card ${styles.board}`}>
        <h2 id="services-heading" className={styles.heading}>Services</h2>
        <ol className={styles.list}>
          {siteConfig.services.map((service, index) => (
            <li key={service.name} className={styles.service}>
              <span aria-hidden="true" className={styles.number}>{index + 1}.</span>
              <div>
                <h3 className={styles.name}>{service.name}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div aria-hidden="true" className={styles.tray}>
          <span className={styles.chalk} />
          <span className={styles.eraser} />
        </div>
      </div>
    </aside>
  );
}
