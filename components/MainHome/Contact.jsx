import styles from "../../styles/Home.module.css"




const ContactPart = () =>{
    return(
        <div className="width-100">
            <div className={styles.contact_res_1400_40}>
                <div className={styles.contact_part_contact_section}>
                    <div className={styles.contact_info_contact_section}>
                        <h1 className={styles.heading_contact_page}>Contact Us</h1>
                        <div className={styles.flex_div_items_contact}>
                            <img className={styles.image_icon_contact} src="/src/location.png" alt="" />
                            <p className={styles.heading_logo_know_about_us_para_contact}>Malik Shan Street Boota Road,Pacca Garha Sialkot -51310, Pakistan.</p>
                        </div>
                        <div className={styles.flex_div_items_contact}>
                            <img className={styles.image_icon_contact} src="/src/phone.png" alt="" />
                            <p className={styles.heading_logo_know_about_us_para_contact}>WhatsApp: +92 302 0061000</p>
                        </div>
                        <div className={styles.flex_div_items_contact}>
                            <img className={styles.image_icon_contact} src="/src/email.png" alt="" />
                            <p className={styles.heading_logo_know_about_us_para_contact}>sales@narafashions.com</p>
                        </div>
                    </div>
                    <div className={styles.logo_contact_section}>
                        <img className={styles.logo_contact_section_img} src="/src/logo.png" alt="" />
                        <p className={styles.logo_contact_section_para}>We pride ourselves on providing exceptional services to our customers. We offer a wide range of customization options to help you create the perfect athletic apparel for your needs. Whether you're looking to add your team's logo, create a custom design, or personalize your gear with your name or number, we have the expertise and resources to make it happen.  </p>
                    </div>
                </div>
                <div className={styles.subscribe_contact_section}>
                    <div className={styles.subscribe_contact_section_heading_part}>
                        <img className={styles.subscribe_contact_section_heading_part_img} src="/src/web.png" alt="" />
                        <p className={styles.subscribe_contact_section_heading_part_para}>Subscribe to our Newsletter</p>
                    </div>
                    <div className={styles.subscribe_contact_section_input_part}>
                        <input className={styles.subscribe_contact_section_input_part_input} placeholder="Email" type="email" />
                        <div className={styles.btn_input_subscribe_div}>
                            <img className={styles.subscribe_contact_section_input_part_btn} src="/src/right.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactPart;