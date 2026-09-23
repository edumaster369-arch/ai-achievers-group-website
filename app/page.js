import Image from 'next/image'
import logoImage from '../images/logo.jpg'
import workingPhoto from '../images/working.jpg'
import styles from './page.module.css'

const bookingLink = 'https://cal.com/achievers-group/20min'

export default function HomePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="MockTrack home">
          <Image src={logoImage} alt="MockTrack logo" width={1024} height={1024} priority />
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="#services">What we do</a>
          <a href="#process">How it works</a>
          <a className={styles.navContact} href="#contact">Talk to us</a>
        </nav>
      </header>

      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <Image
          className={styles.heroPhoto}
          src={workingPhoto}
          alt="A placement officer and final-year student reviewing a readiness tracker in a college office"
          width={1024}
          height={1024}
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Campus interview readiness · Pune</p>
          <h1 id="hero-title">MockTrack: interview readiness for Pune placement cells.</h1>
          <p className={styles.heroLine}>Two mock rounds. One clear readiness record for the batch.</p>
          <a className={styles.primaryButton} href={bookingLink}>Book a 20 minute call <span aria-hidden="true">↗</span></a>
        </div>
        <p className={styles.photoNote}>A clearer view of interview readiness, together.</p>
      </section>

      <section className={styles.problemSection} aria-labelledby="problem-title">
        <div className={`${styles.narrow} ${styles.problemLayout}`}>
          <div>
            <p className={styles.sectionLabel}>The placement cell reality</p>
            <h2 id="problem-title">The part of the job that keeps coming back.</h2>
          </div>
          <div className={styles.problemLines}>
            <p>Our final-year students freeze in the first interview round.</p>
            <p>We have no list of who is ready, who is pending and who has dropped off.</p>
            <p>We chase the same forty students by phone every week.</p>
            <p>We pay outside trainers per batch, with nothing to show parents or management.</p>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection} id="services" aria-labelledby="services-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>One batch, one focused drive</p>
            <h2 id="services-title">A readiness picture you can work with.</h2>
          </div>
          <div className={styles.serviceGrid}>
            <article className={styles.service}>
              <Icon kind="record" />
              <h3>Mock interview feedback to readiness record</h3>
              <p>Each round becomes a clear student readiness record.</p>
            </article>
            <article className={styles.service}>
              <Icon kind="board" />
              <h3>Batch readiness follow-up board</h3>
              <p>See who is ready, pending or needs a follow-up.</p>
            </article>
            <article className={styles.service}>
              <Icon kind="digest" />
              <h3>Weekly fresher hiring digest</h3>
              <p>A hiring digest prepared for the placement cell.</p>
            </article>
          </div>
          <p className={styles.price}>Rs 50,000 a project</p>
          <p className={styles.priceNote}>One price covers everything these three services do.</p>
        </div>
      </section>

      <section className={styles.processSection} id="process" aria-labelledby="process-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>A simple three-step drive</p>
            <h2 id="process-title">From first mock to a clear next step.</h2>
          </div>
          <ol className={styles.steps}>
            <li><span className={styles.stepNumber}>01</span><h3>Set up one batch</h3><p>The drive is set up for one final-year batch.</p></li>
            <li><span className={styles.stepNumber}>02</span><h3>Run two mock rounds</h3><p>Each student receives a readiness record.</p></li>
            <li><span className={styles.stepNumber}>03</span><h3>See where to follow up</h3><p>The placement cell gets a readiness scorecard for management and a tracker of who is ready and who needs chasing.</p></li>
          </ol>
        </div>
      </section>

      <section className={styles.aboutSection} id="about" aria-labelledby="about-title">
        <div className={styles.aboutLayout}>
          <div className={styles.aboutCopy}>
            <p className={styles.sectionLabel}>Who we are</p>
            <h2 id="about-title">A steady hand for placement officers.</h2>
            <p className={styles.aboutName}>AI Achievers Group</p>
            <p>We started MockTrack because placement officers were chasing the same forty students by phone every week, without a clear list of who was ready.</p>
            <p>Our work is calm, organised and focused on one batch at a time.</p>
          </div>
          <Image
            className={styles.aboutPhoto}
            src={workingPhoto}
            alt="A placement officer working with a final-year student in a campus office"
            width={1024}
            height={1024}
            sizes="(max-width: 760px) 100vw, 34vw"
          />
        </div>
      </section>

      <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
        <div className={styles.contactInner}>
          <p className={styles.sectionLabel}>Start with a conversation</p>
          <h2 id="contact-title">Make the next batch easier to see.</h2>
          <a className={styles.primaryButton} href={bookingLink}>Book a 20 minute call <span aria-hidden="true">↗</span></a>
          <div className={styles.contactLinks}>
            <a href="https://wa.me/917058190468?text=Hello%20MockTrack%2C%20I%27d%20like%20to%20know%20more.">Message me on WhatsApp</a>
            <a href="mailto:edumaster369@gmail.com?subject=MockTrack%20enquiry">Email me</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="#top" aria-label="MockTrack home"><Image src={logoImage} alt="MockTrack logo" width={1024} height={1024} /></a>
        <p>MockTrack · Pune</p>
        <a href="#top" className={styles.backToTop}>Back to top ↑</a>
      </footer>
    </main>
  )
}

function Icon({ kind }) {
  const paths = {
    record: <><path d="M8 3h8l4 4v14H4V3h4Z" /><path d="M16 3v5h5M8 13l2.5 2.5L16 10" /></>,
    board: <><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M8 8h8M8 12h8M8 16h5M6 8h.01M6 12h.01M6 16h.01" /></>,
    digest: <><path d="M5 3h14v18H5zM8 7h8M8 11h8M8 15h5M8 18h8" /><path d="M3 6v15h14" /></>,
  }

  return <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>
}
