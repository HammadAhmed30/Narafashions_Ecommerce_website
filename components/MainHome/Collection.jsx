import styles from "../../styles/Home.module.css"
import Link from "next/link";




const Collection = () => {
    return(
        <div className="width-100" id="collection">
            <div className="res-1400-40-200">
                <h1 className={styles.collection_heading}>COLLECTION</h1>
                <div className={styles.collection_grid}>
                    <Link href={"/paddlerackets"} className={styles.collection_grid_item}>
                        <img className={styles.item_collection_img} src="/src/paddle.png" alt="" />
                        <div className={styles.item_collection_h_holder}>
                            <h1 className={styles.item_collection_h1}>Paddle<br />rackets </h1>
                            <p className={styles.item_collection_para}>We create high-quality paddle rackets for players of all levels.</p>
                        </div>
                    </Link>
                    <Link href={"/casualwear"} className={`${styles.collection_grid_item} ${styles.collection_grid_item_2}`}>
                        <img className={styles.item_collection_img} src="/src/casuals.png" alt="" />
                        <div className={styles.item_collection_h_holder}>
                            <h1 className={styles.item_collection_h1}>Casual’s</h1>
                            <p className={styles.item_collection_para}>Our casual wear is designed to make you look and feel your best, no matter where your day takes you</p>
                        </div>
                    </Link>
                    <Link href={"/gloves"} className={styles.collection_grid_item}>
                        <img className={styles.item_collection_img} src="/src/gloves.png" alt="" />
                        <div className={styles.item_collection_h_holder}>
                            <h1 className={styles.item_collection_h1}>Gloves</h1>
                            <p className={styles.item_collection_para}>Experience the perfect fit and unmatched comfort with our premium quality gloves.</p>
                        </div>
                    </Link>
                    <Link href={"/fitnesswear"} className={`${styles.collection_grid_item} ${styles.collection_grid_item_2}`}>
                        <img className={styles.item_collection_img} src="/src/fitness.png" alt="" />
                        <div className={styles.item_collection_h_holder}>
                            <h1 className={styles.item_collection_h1}>Fitness</h1>
                            <p className={styles.item_collection_para}>Experience the ultimate in comfort and performance with our premium fitness wear</p>
                        </div>
                    </Link>
                    <Link href={"/sportswear"} className={`${styles.collection_grid_item} ${styles.collection_grid_item_2}`}>
                        <img className={styles.item_collection_img} src="/src/sports.png" alt="" />
                        <div className={styles.item_collection_h_holder}>
                            <h1 className={styles.item_collection_h1}>Sports</h1>
                            <p className={styles.item_collection_para}>Experience the difference our high-performance sportswear can make in your training.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Collection;