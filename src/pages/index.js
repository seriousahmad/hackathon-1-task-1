import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Read the Book - 5 min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Physical AI & Humanoid Robotics: The Future of Embodied Intelligence">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4 margin-bottom--lg padding--none">
                <div className="card">
                  <div className="card__header">
                    <h3>Chapter 1: The Robotic Nervous System (ROS 2)</h3>
                  </div>
                  <div className="card__body">
                    <p>Explore the Robot Operating System as the foundational nervous system for robotic platforms, covering distributed computing, message passing, and real-time control systems.</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--secondary button--block" to="/docs/chapters/robotic-nervous-system">
                      Read Chapter
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col--4 margin-bottom--lg padding--none">
                <div className="card">
                  <div className="card__header">
                    <h3>Chapter 2: The Digital Twin (Gazebo & Unity)</h3>
                  </div>
                  <div className="card__body">
                    <p>Discover how digital twin technology enables safe testing and development of robotic systems in virtual environments before deployment to physical platforms.</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--secondary button--block" to="/docs/chapters/digital-twin">
                      Read Chapter
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col--4 margin-bottom--lg padding--none">
                <div className="card">
                  <div className="card__header">
                    <h3>Chapter 3: The AI-Robot Brain (NVIDIA Isaac™)</h3>
                  </div>
                  <div className="card__body">
                    <p>Examine advanced AI frameworks and neural architectures that power autonomous robotic decision-making and learning in complex environments.</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--secondary button--block" to="/docs/chapters/ai-robot-brain">
                      Read Chapter
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h2>About This Textbook</h2>
                <p>Welcome to the definitive guide exploring the convergence of artificial intelligence and physical robotics. This textbook delves into the cutting-edge field of embodied intelligence, where AI systems interact with the physical world through sophisticated robotic platforms.</p>

                <h3>Learning Outcomes</h3>
                <ul>
                  <li>Design and implement robotic systems using modern AI frameworks</li>
                  <li>Integrate perception, planning, and control systems for embodied intelligence</li>
                  <li>Deploy and test robotic systems in both simulated and real-world environments</li>
                  <li>Understand the ethical and practical implications of autonomous robotic systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}