import { useRouter } from "next/router";
import styles from "../../styles/AllProducts.module.css";
import ProductCard from "./ProductCard";
import { use, useEffect, useState } from "react";
import { commerce } from "../lib/commerce";
import Loader from "../Loader/Loading";
import Head from "next/head";

const ParentProductsPage = () => {
  const [products, setPtoducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const router = useRouter();
  const name = router.query.products;

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });
    setPtoducts(data);
    setLoader(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="width-100" style={{ paddingBottom: "20px" }}>
        <Head>
            <title>NaraFashions | {name ? name[0].toUpperCase()+name.slice(1) : "Category"}</title>
        </Head>
      {loader && <Loader />}
      <div className="res-1400-30">
        <h1
          style={{ marginTop: "135px" }}
          className={styles.heading_products_main}
        >
          {router.query.products}
        </h1>
        <p className={styles.URL_product_feild}>
          Collection /{" "}
          <span style={{ textTransform: "capitalize" }}>
            {router.query.products}
          </span>
        </p>
        {products && (
          <div className={styles.product_card_holder_grid}>
           
            {products.map(
              (item, index) =>
                item.categories.map((prod) => prod.slug).toString() == name && (
                  <ProductCard
                    key={index}
                    index={index}
                    imgUrl={item.image.url}
                    name={item.name}
                    id={item.id}
                    cate_name={name}
                  />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentProductsPage;
