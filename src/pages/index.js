import React, { useEffect } from 'react';
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
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={`hero__title ${styles.animatedTitle}`}>{siteConfig.title}</h1>
            <p className={`hero__subtitle ${styles.animatedSubtitle}`}>{siteConfig.tagline}</p>
          </div>
          <div className={styles.headerImage}>
            <img 
              src="/img/ChatGPT Image 2025年4月1日 10_31_41.png" 
              alt="蔡家乐的照片" 
              className={styles.profileImageHeader}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  useEffect(() => {
    // 添加滚动动画效果
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll(`.${styles.fadeIn}`).forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll(`.${styles.fadeIn}`).forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <Layout
      title={`Welcome to my website`}
      description="Welcome to my website">
      {/* 移除 MouseFollower 组件 */}
      <HomepageHeader />
      <main>
        {/* Apple 风格的内容区域 */}
        <section className={styles.appleSection}>
          <div className="container">
            <div className={`${styles.fadeIn} ${styles.appleHeadline}`}>
              <h2>About me</h2>
              <p className={styles.appleSubtitle}>
              Hello! I'm Cai Jiale, welcome to my personal website. 
              I'm a developer who loves technology and is passionate about programming and new technologies. 
              I believe technology can change the world and I'm committed to creating valuable products through my skills.
              </p>
            </div>
          </div>
        </section>

        {/* 技能部分 - Apple 风格 */}
        <section className={`${styles.appleSection} ${styles.grayBg}`}>
          <div className="container">
            <div className={`${styles.fadeIn} ${styles.appleFeatures}`}>
              <h2>Skills</h2>
              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🌐</div>
                  <h3>Front-end develop</h3>
                  <p>React, Vue, JavaScript, HTML, CSS</p>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🔧</div>
                  <h3>Tools</h3>
                  <p>Git, VScode, Chrome DevTools</p>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🎨</div>
                  <h3>Design</h3>  {/* 修正 "Desigh" 为 "Design" */}
                  <p>Ant-Design, Element-plus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 兴趣爱好部分 */}
        <section className={styles.appleSection}>
          <div className="container">
            <div className={`${styles.fadeIn} ${styles.appleHeadline}`}>
              <h2>Hobbies</h2>
              <div className={styles.hobbyGrid}>
                <div className={styles.hobbyItem}>
                  <div className={styles.hobbyIcon}>🎬</div>
                  <p>Films</p>
                </div>
                <div className={styles.hobbyItem}>
                  <div className={styles.hobbyIcon}>🏔️</div>
                  <p>Travel</p>
                </div>
                <div className={styles.hobbyItem}>
                  <div className={styles.hobbyIcon}>⚽️</div>
                  <p>Football</p>
                </div>
                <div className={styles.hobbyItem}>
                  <div className={styles.hobbyIcon}>🗣️</div>
                  <p>Study</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
