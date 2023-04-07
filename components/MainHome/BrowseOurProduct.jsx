import styles from "../../styles/Home.module.css";
import { useRef, useState } from "react";

const BrowseOurProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollerRef = useRef(null);

  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollerRef.current.scrollLeft -= scrollerRef.current.offsetWidth;
    }
  };

  const handleScrollRight = () => {
    if (currentIndex < 4) {
      setCurrentIndex(currentIndex + 1);
      scrollerRef.current.scrollLeft += scrollerRef.current.offsetWidth;
    }
  };

  return (
    <div className={`${styles.our_products_main_cnt} width-100`} id="browseproducts">
      <div className={`${styles.main_dispaly_flex_cnt_browse}`}>
        <div style={{ position: "relative" }}>
          {currentIndex != 0 && (
            <button
              onClick={handleScrollLeft}
              className={styles.arrow_btn_scroll}
            >
              <img
                className={styles.arrow_btn_scroll_img}
                src="/src/arrow.png"
                alt=""
              />
            </button>
          )}

          {currentIndex < 3 && (
            <button
              onClick={handleScrollRight}
              className={`${styles.arrow_btn_scroll_2}`}
            >
              <img
                className={styles.arrow_btn_scroll_img}
                src="/src/arrow.png"
                alt=""
              />
            </button>
          )}
          <div className={styles.card_scroller_categories} ref={scrollerRef}>
            <div
              style={{
                scrollSnapAlign: "start",
                // paddingRight: "0 10px",
                scrollSnapStop: "always",
                position: "relative",
                height: "100%",
              }}
            >
              <img
                className={styles.card_scroller_categories_img}
                src="/src/sportwear girl.jpg"
                alt=""
              />
              <h1 className={styles.card_scroller_categories_h1}>
                Sports
                <br />
                Wear
              </h1>
              <button className={styles.card_scroller_categories_btn}>
                See all
              </button>
            </div>
            <div
              style={{
                scrollSnapAlign: "start",
                // paddingRight: "0 10px",
                scrollSnapStop: "always",
                position: "relative",
                height: "100%",
              }}
            >
              <img
                className={styles.card_scroller_categories_img}
                src="/src/casual.jpg"
                alt=""
              />
              <h1 className={styles.card_scroller_categories_h1}>
                Casual
                <br />
                Wear
              </h1>
              <button className={styles.card_scroller_categories_btn}>
                See all
              </button>
            </div>
            <div
              style={{
                scrollSnapAlign: "start",
                // paddingRight: "0 10px",
                scrollSnapStop: "always",
                position: "relative",
                height: "100%",
              }}
            >
              <img
                className={styles.card_scroller_categories_img}
                src="/src/fitness_products.jpg"
                alt=""
              />
              <h1 className={styles.card_scroller_categories_h1}>
                Fitness
                <br />
                Wear
              </h1>
              <button className={styles.card_scroller_categories_btn}>
                See all
              </button>
            </div>
            <div
              style={{
                scrollSnapAlign: "start",
                // paddingRight: "0 10px",
                scrollSnapStop: "always",
                position: "relative",
                height: "100%",
              }}
            >
              <img
                className={styles.card_scroller_categories_img_2}
                src="/src/gloves.jpg"
                alt=""
              />
              <h1 className={styles.card_scroller_categories_h1}>Gloves</h1>
              <button className={styles.card_scroller_categories_btn}>
                See all
              </button>
            </div>
          </div>
        </div>
        <div className={styles.main_details_part_browser}>
          <h1 className={styles.main_details_part_browser_h1}>
            Browse Our
            <br />
            Products
          </h1>
          <p className={styles.main_details_part_browser_p}>
            Take a moment to browse our products and you'll find a wide range of
            athletic apparel that is both stylish and functional. From
            moisture-wicking t-shirts and shorts to compression leggings and
            sports bras, we've got you covered for every activity.
          </p>
          <p className={styles.main_details_part_browser_p}>
            Whether you're gearing up for your next race or just looking to
            improve your fitness routine, we have everything you need to reach
            your goals. So go ahead and browse our products – we're confident
            you'll find something you love!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrowseOurProducts;
