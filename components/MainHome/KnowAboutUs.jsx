import styles from "../../styles/Home.module.css"




const KnowAboutUs = () =>{
    return(
        <div className="width-100" id="about">
            <div className={styles.image_know_about_us}>
                <div className={styles.image_know_about_us_image_main}>
                    <img src="/src/know about us.png" alt="" />
                </div>
                <div className={styles.description_div_cnt}>
                    <div className={styles.heading_logo_know_about_us}>
                        <h2 className={styles.heading_logo_know_about_us_h2}>Know<br />About Us</h2>
                        <img className={styles.heading_logo_know_about_us_logo} src="/src/logo.png" alt="" />
                    </div>
                    <p className={styles.heading_logo_know_about_us_para}>NaraFashion Sportswear is passionate about creating high-quality, durable and stylish athletic apparel for people who want to look and feel their best while pursuing an active lifestyle. We believe that everyone deserves access to clothing that supports their goals, whether they're a professional athlete or just getting started on their fitness journey. That's why we work tirelessly to design and manufacture top-of-the-line products that meet the needs of athletes of all levels. From innovative fabrics and cutting-edge technologies to bold designs and vibrant colors, we're committed to delivering the best possible sportswear experience to our customers.</p>
                    {/* <button className={styles.heading_logo_know_about_us_btn}>Learn More</button> */}
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default KnowAboutUs;