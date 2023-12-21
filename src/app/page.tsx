"use client";
import Image from 'next/image';
import styles from './page.module.css'
import image1 from '@/assets/images/web_image1.png'
import image2 from '@/assets/images/web_image2.png'
import image3 from '@/assets/images/web_image3.png'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0px)';
        }
      });
    }, {
      threshold: 0.4 // 조정하여 애니메이션 시작 시점 조절 가능
    });

    document.querySelectorAll(`.${styles.image}`).forEach((img) => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <h1 className={styles.description}>세상 모든 장소에 왔다감</h1>
      <Image src={image1} alt="image1" className={styles.image} />
      <h1 className={styles.description}>당신의 마음에도 왔다감</h1>
      <Image src={image2} alt="image2" className={styles.image} />
      <h1 className={styles.description}>당신이 머물렀던 곳을 공유해보세요</h1>
      <Image src={image3} alt="image3" className={styles.image} />
    </div>
  )
}
