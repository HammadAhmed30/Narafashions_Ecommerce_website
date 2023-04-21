import styles from "../../styles/Footer.module.css";
import Link from "next/link";




const FooterForOthers = () => {
  return (
    <div
      className="width-100"
      style={{ backgroundColor: "var(--landingPageColor)" }}
    >
      <div className={`res-1400 ${styles.main_footer}`}>
        <div className={styles.footer_linker_main_cnt}>
          <div className={styles.footer_linker_div}>
            <h1 className={styles.footer_linker_div_h1}>Categories</h1>
            <Link className={styles.footer_linker_div_link} href="/sportswear">
              Sportswear
            </Link>
            <Link className={styles.footer_linker_div_link} href="/fitnesswear">
              Fitness wear
            </Link>
            <Link className={styles.footer_linker_div_link} href="/casualwear">
              Casual wear
            </Link>
            <Link className={styles.footer_linker_div_link} href="/gloves">
              Gloves
            </Link>
            <Link
              className={styles.footer_linker_div_link}
              href="/paddlerackets"
            >
              Paddle Rackets
            </Link>
          </div>
        </div>
        <div className={styles.footer_logo_linker_part_main_cnt}>
          <div className={styles.footer_logo_linker_logo_part}>
            <img
              className={styles.footer_logo_linker_logo_part_img}
              src="/src/logo.png"
              alt=""
            />
            <p className={styles.footer_logo_linker_logo_part_para}>
              narafashions.com
            </p>
          </div>
          <div className={styles.footer_logo_linker_part_image_cnt}>
            <a className={styles.footer_logo_linker_part_image_cnt_img} href="">
              <img
                className={styles.footer_logo_linker_part_image_cnt_main_img}
                src="/src/facebook.png"
                alt=""
              />
            </a>
            <a className={styles.footer_logo_linker_part_image_cnt_img} href="">
              <img
                className={styles.footer_logo_linker_part_image_cnt_main_img}
                src="/src/whatsapp.png"
                alt=""
              />
            </a>
            <a className={styles.footer_logo_linker_part_image_cnt_img} href="">
              <img
                className={styles.footer_logo_linker_part_image_cnt_main_img}
                src="/src/instagram.png"
                alt=""
              />
            </a>
          </div>
          <p className={styles.footer_logo_linker_part_image_cnt_para}>
            Copyright © 2022-23, Nara Fashions, All Rights Reserved
          </p>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          fontFamily: "poppins",
          fontSize: ".9em",
          padding: "20px 0",
          fontWeight: "200",
        }}
        className="res-1400"
      >
        Designed by{" "}
        <span style={{ fontWeight: "700", fontFamily: "poppins" }}>Agaaz</span>,
        Developed by{" "}
        <span style={{ fontWeight: "700", fontFamily: "poppins" }}>
          RavalBit
        </span>
        .
      </p>
    </div>
  );
};

export default FooterForOthers;
