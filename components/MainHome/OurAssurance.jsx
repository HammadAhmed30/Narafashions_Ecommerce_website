import styles from "../../styles/Home.module.css";

const OurAssurance = () => {
  return (
    <div className="width-100">
      <div className={styles.image_know_about_us_assu}>
        <div className={styles.description_div_cnt}>
          <div className={styles.heading_logo_know_about_us}>
            <h2 className={styles.heading_logo_know_about_us_h2}>
              Our
              <br />
              Assurance
            </h2>
          </div>
          <div className={styles.main_styling_listing_items_icons_part_speciality}>
            <div className={styles.flex_div_items_assu}>
              <img
                className={styles.image_icon_assu}
                src="/src/delivery-truck.png"
                alt=""
              />
              <p className={styles.heading_logo_know_about_us_para}>
                All the items will be delivered in time.
              </p>
            </div>
            <div className={styles.flex_div_items_assu}>
              <img
                className={styles.image_icon_assu}
                src="/src/verify.png"
                alt=""
              />
              <p className={styles.heading_logo_know_about_us_para}>
                The quality of the items will be Top-Notch.
              </p>
            </div>
            <div className={styles.flex_div_items_assu}>
              <img
                className={styles.image_icon_assu}
                src="/src/certificate.png"
                alt=""
              />
              <p className={styles.heading_logo_know_about_us_para}>
                ISO 9001 & CE Certified
              </p>
            </div>
            <div className={styles.flex_div_items_assu}>
              <img
                className={styles.image_icon_assu}
                src="/src/support.png"
                alt=""
              />
              <p
                style={{ textTransform: "lowercase" }}
                className={styles.heading_logo_know_about_us_para}
              >
                We are available 24/7 at info@narafashions.com
              </p>
            </div>
          </div>
        </div>
        <div className={styles.image_know_about_us_image_main}>
          <img src="/src/our_assurance.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurAssurance;
