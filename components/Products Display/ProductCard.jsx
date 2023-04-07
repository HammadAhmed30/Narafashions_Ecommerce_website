import styles from "../../styles/AllProducts.module.css";

const ProductCard = ({ imgUrl, name, index }) => {
  return (
    <div className={styles.main_product_card}>
      <img className={styles.main_product_card_image} src={imgUrl} alt="" />
      <h2 className={styles.main_product_card_name}>{name}</h2>
    </div>
  );
};

export default ProductCard;
