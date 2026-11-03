"use client";

import { useState } from "react";
import styles from "./trialdesign.module.css";

export interface SectionMenuItem { label: string; href: string; number: string; icon: string; }

export default function SectionMenu({ sections }: { sections: SectionMenuItem[] }) {
  const [open, setOpen] = useState(false);
  return <div className={styles.sectionMenu}>
    <button className={styles.menuTrigger} type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="section-menu"><span className={styles.menuKicker}>Navigate</span><span className={styles.menuCurrent}>Sections</span><i className={open ? styles.menuOpen : undefined} aria-hidden="true" /></button>
    <nav id="section-menu" className={`${styles.menuPanel} ${open ? styles.menuPanelOpen : ""}`} aria-label="Section navigation"><div className={styles.menuPanelTop}><span>Portfolio</span><span>{sections.length} sections</span></div>{sections.map((section) => <a key={section.href} href={section.href} onClick={() => setOpen(false)}><small>{section.number}</small><b>{section.label}</b><i className={section.icon} aria-hidden="true" /></a>)}</nav>
  </div>;
}
