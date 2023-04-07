import styles from "../../styles/Home.module.css"





const LandingPage = () =>{
    return(
        <div className={`${styles.color_main_landing_page} width-100`}>
            <div className={`${styles.main_flex_cnt_landing_page} res-1400`}>
                <div className={styles.main_cnt_heading_landing_page_holder}>
                    <h1 className={styles.main_heading_landing_page}>Abrade the<br />best<br />apparel</h1>
                    <button className={styles.landing_page_explore_more_btn}>Explore More</button>
                </div>
                <img className={styles.image_shirt_landing_page} src="/src/image_shirt_landing_page.png" alt="" />
            </div>
        </div>
    )
}

export default LandingPage;