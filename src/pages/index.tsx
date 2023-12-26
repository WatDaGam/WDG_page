import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

const styles = {
  description: {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '30rem 0',
    paddingTop: '30rem',
    textAlign: 'center',
  },
}

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
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

    document.querySelectorAll('[data-fade-in]').forEach((img) => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ overflowY: "hidden", display: "flex" }}>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <h1 className="description">세상 모든 장소에 왔다감</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/web_image1.png" alt="image1" className="image" data-fade-in />
      <h1 className="description">당신의 마음에도 왔다감</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/web_image3.png" alt="image3" className="image" data-fade-in />
      <h1 className="description">당신이 머물렀던 곳을 공유해보세요</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/web_image2.png" alt="image2" className="image" data-fade-in />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; 2023 왔다감</p>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          {/* <div class="footer-center">
            <ul class="social-icons">
              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            </ul>
          </div> */}
          <div className="footer-right">
            <p>Contact Us: 서울특별시 강남구 개포동 416</p>
            <p>Email: support@watdagam.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>왔다감 - WDG</title>
