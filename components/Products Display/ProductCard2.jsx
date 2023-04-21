import styles from "../../styles/AllProducts.module.css";
import Link from "next/link";


const ProductCard2 = ({ imgUrl, name, index, id, cate_name, }) => {
  return (
    <Link href={`/${cate_name}/${id}`} className={styles.main_product_card}>
        <img className={styles.main_product_card_image} src={imgUrl} alt="" />
    </Link>
  );
};

export default ProductCard2;
