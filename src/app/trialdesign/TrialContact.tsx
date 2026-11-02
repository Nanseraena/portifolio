"use client";

import styles from "./trialdesign.module.css";

const contactFacts = [
  { label: "Email", value: "enanansera311@gmail.com", href: "mailto:enanansera311@gmail.com" },
  { label: "Phone", value: "+256 779 393684", href: "tel:+256779393684" },
  { label: "Based in", value: "Kampala, Uganda" },
];

export default function TrialContact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.contactTopline}><span>05 / Start a conversation</span><span>Open to opportunities</span></div>
      <div className={styles.contactGrid}>
        <div className={styles.contactInvitation}>
          <p className={styles.contactMark} aria-hidden="true">✳</p>
          <h2 id="contact-title">Let&apos;s make<br />something <em>useful.</em></h2>
          <p>I&apos;m open to software development opportunities, product teams, and thoughtful digital work.</p>
          <a className={styles.emailLink} href="mailto:enanansera311@gmail.com">enanansera311@gmail.com <span aria-hidden="true">↗</span></a>
          <dl className={styles.contactFacts}>
            {contactFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.href ? <a href={fact.href}>{fact.value}</a> : fact.value}</dd></div>)}
          </dl>
        </div>

        <div className={styles.contactFormShell}>
          <div className={styles.contactSuccess}>
            <span aria-hidden="true">✦</span><p>Let&apos;s connect.</p><small>Send an email and I&apos;ll respond as soon as I can.</small>
            <a href="mailto:enanansera311@gmail.com?subject=Portfolio%20enquiry">Email Ena ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
