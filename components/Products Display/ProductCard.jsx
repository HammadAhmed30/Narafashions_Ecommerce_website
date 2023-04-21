import styles from "../../styles/AllProducts.module.css";
import Link from "next/link";


const ProductCard = ({ imgUrl, name, index, id, cate_name, }) => {
  return (
    <Link href={`/${cate_name}/${id}`} className={styles.main_product_card}>
      <div className={styles.main_product_card_image_container}>
        <img className={styles.main_product_card_image} src={imgUrl} alt="" />
      </div>
      <div className={styles.main_product_card_heading_holder}>
        <h2 className={styles.main_product_card_name}>{name}</h2>
        <p className={styles.main_product_card_random_code}>Code : {name[0]}{name[name.length - 1]}{index}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
