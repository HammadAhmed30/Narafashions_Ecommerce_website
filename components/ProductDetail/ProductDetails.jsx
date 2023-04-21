import Link from "next/link";
import styles from "../../styles/ProductsDetails.module.css";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { commerce } from "../lib/commerce";
import Loader from "../Loader/Loading";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import ProductCard2 from "../Products Display/ProductCard2";

export default function Detalis() {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const [inquiyPage, setInquiryPage] = useState(false);
  const [product, setPtoduct] = useState([]);
  var { products, productDetails } = router.query;

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });
    setPtoduct(data);
    setLoader(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const particular_data = product.find((prod) => prod.id === productDetails);
  const filteredProducts = product.filter(
    (item) => item.categories.map((prod) => prod.slug).toString() === products
  );
  const limitedProducts = filteredProducts.slice(0, 3);

  return (
    <div
      style={{
        marginBottom: "4em",
      }}
    >
      <Head>
        <title>
          NaraFashions |{" "}
          {particular_data
            ? particular_data.name[0].toUpperCase() +
              particular_data.name.slice(1)
            : "Category"}
        </title>
      </Head>
      {loader && <Loader />}
      <SendInquiry inquiyPage={inquiyPage} setInquiryPage={setInquiryPage} />
      <div className={styles.gray_send_inquiry_headline}>
        <p className={styles.gray_send_inquiry_headline_p}>
          <span
            className={styles.gray_send_inquiry_headline_span}
            onClick={() => {
              setInquiryPage(true);
            }}
          >
            Send Inquiry
          </span>{" "}
          to acquire your desire products in one go!
        </p>
      </div>
      {particular_data && (
        <div className={`res-1400 ${styles.url_bar_product_original}`}>
          <p className={styles.url_bar_product_original_p}>
            Collection/{products}/{particular_data.name}
          </p>
          <p className={styles.url_bar_product_original_p}>
            narafashions <strong>original</strong>
          </p>
        </div>
      )}
      {particular_data && (
        <div className="res-1400">
          <div className={`${styles.main_img_para_details_section}`}>
            <img
              className={styles.details_page_img}
              src={particular_data.image.url}
            />
            <div className={styles.right_details_page}>
              <h1 className={styles.product_details_product_name_right}>
                {particular_data.name}
              </h1>
              <div className={styles.description_details_page_desc_right}>
                <h1 className={styles.description_details_page_desc_right_h1}>
                  Description
                </h1>
                <p
                  className={styles.details_description_para_after}
                  dangerouslySetInnerHTML={{
                    __html: particular_data.description,
                  }}
                />
              </div>
              <div className={styles.details_points_dtl_right}>
                <h1 className={styles.details_points_dtl_right_h1}>Details</h1>
                <ul>
                  <li className={styles.details_points_dtl_right_li}>
                    Top Quality Fabric
                  </li>
                  <li className={styles.details_points_dtl_right_li}>
                    Stitched with strong threads
                  </li>
                  <li className={styles.details_points_dtl_right_li}>
                    On-Time Delivery
                  </li>
                  <li className={styles.details_points_dtl_right_li}>
                    Packaging under export rules
                  </li>
                </ul>
              </div>
              <a
                className={styles.size_guide_btn}
                target="_blank"
                href="/src/size guide.png"
              >
                Size Guide
              </a>
              <div
                style={{
                  marginTop: "2em",
                }}
              >
                <span
                  onClick={() => {
                    setInquiryPage(true);
                  }}
                >
                  <button
                    style={{
                      margin: "0px",
                    }}
                    className={styles.send_inquiry_btn}
                  >
                    Send Inquiry
                  </button>
                </span>
                &ensp; &ensp;
                <Link href={`/${products}`}>
                  <button
                    style={{
                      margin: "0px",
                    }}
                    className={styles.send_inquiry_btn_white}
                  >
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={styles.more_from_this_cate_send_inq_product_details_page}
          >
            <h1
              className={
                styles.more_from_this_cate_send_inq_product_details_page_h1
              }
            >
              More variations from <br />
              {products}
            </h1>
            <div
              className={
                styles.more_from_this_cate_send_inq_product_details_page_div_3_cnt
              }
            >
              {limitedProducts.map((item, index) => {
                return (
                  <ProductCard2
                    key={index}
                    index={index}
                    name={item.name}
                    imgUrl={item.image.url}
                    id={item.id}
                    cate_name={products}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const SendInquiry = ({ setInquiryPage, inquiyPage }) => {
  const router = useRouter();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a8sxd4s",
        "template_8vc7vdp",
        form.current,
        "FpeDvuuX6atSzyLv2"
      )
      .then(
        (result) => {
          alert("Inqiury Sent Successfully");
        },
        (error) => {
          alert("Error");
        }
      );
  };

  return (
    <div
      className={`${styles.main_form_cnt_send_inquiry} ${
        inquiyPage
          ? styles.open_send_inquiry_form
          : styles.close_send_inquiry_form
      }`}
    >
      <span
        className={styles.send_inquiry_cross_form_btn}
        onClick={() => {
          setInquiryPage(false);
        }}
      >
        x
      </span>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`${styles.main_form_form_send_inquiry_form} width-700`}
      >
        <h2 className={styles.send_inquiry_heading_h1_form}>Send Inquiry</h2>
        <input
          className={styles.form_send_inquiry_input_feild}
          type="text"
          placeholder="Your Name"
          name="user_name"
          required
        />
        <input
          className={styles.form_send_inquiry_input_feild}
          type="email"
          placeholder="E-mail"
          name="user_email"
          required
        />
        <input
          style={{ display: "none" }}
          className={styles.form_send_inquiry_input_feild}
          type="text"
          value={`http://narafashions.com${router.asPath}`}
          placeholder="Product Link"
          name="product_link"
          onChange={() => {
            e.target.value;
          }}
        />
        <input
          className={styles.form_send_inquiry_input_feild}
          type="text"
          placeholder="Phone No."
          name="user_phone"
          required
        />
        <input
          className={styles.form_send_inquiry_input_feild}
          type="text"
          placeholder="Address"
          name="user_address"
          required
        />
        <input
          className={styles.form_send_inquiry_input_feild}
          type="number"
          defaultValue={1}
          min={1}
          name="product_quantity"
          required
        />
        <textarea
          className={styles.form_send_inquiry_textarea}
          placeholder="Your Message"
          rows={3}
          name="user_msg"
        ></textarea>
        <input
          type="submit"
          value="Send Inquiry"
          className={styles.submit_btn_send_imquiry}
        />
      </form>
    </div>
  );
};
