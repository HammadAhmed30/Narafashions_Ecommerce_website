import { Link } from "react-scroll";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loading";

const LandingPage = () => {
  const [innerheight, set_innerHeight] = useState(0);
  useEffect(() => {
    set_innerHeight(window.innerHeight);
  }, []);

  return (
    <div
      
      style={{
        height: `${innerheight}px`,
      }}
      className={`${styles.color_main_landing_page} width-100`}
      id="home"
    >
      <div className={styles.video_holder}>
        <video  autoPlay muted loop className={styles.main_video}>
          <source src="/video/background_vid.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={`${styles.main_flex_cnt_landing_page} res-1400`}>
        <div className={styles.main_cnt_heading_landing_page_holder}>
          <h1 className={styles.main_heading_landing_page}>
            Abrade the
            <br />
            best
            <br />
            apparel
          </h1>
          <Link
            to="browseproducts"
            style={{ fontFamily: "poppins" }}
            spy={true}
            offset={50}
            smooth={true}
            duration={500}
          >
            <button className={styles.landing_page_explore_more_btn}>
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
