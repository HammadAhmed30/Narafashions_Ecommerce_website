import { useRouter } from "next/router";
import styles from "../../styles/AllProducts.module.css"
import ProductCard from "./ProductCard";



const ParentProductsPage = () =>{


    const DemoData = [
        {
            name:"Shirt",
            imgUrl:"/src/gloves.jpg"
        },
        {
            name:"Shirt",
            imgUrl:"/src/gloves.jpg"
        },
        {
            name:"Shirt",
            imgUrl:"/src/gloves.jpg"
        },
        {
            name:"Shirt",
            imgUrl:"/src/gloves.jpg"
        },
        {
            name:"Shirt",
            imgUrl:"/src/gloves.jpg"
        },
        {
            name:"Shirt",
            imgUrl:"/src/gloves.jpg"
        },
    ]


    const router = useRouter()

    return(
        <div className="width-100">
            <div className="res-1400-30">
                <h1 style={{marginTop:"135px"}} className={styles.heading_products_main}>{router.query.products}</h1>
                <p className={styles.URL_product_feild}>Collection / {router.query.products}</p>
                <div className={styles.product_card_holder_grid}>
                    {DemoData.map((item,index)=>(
                        <ProductCard key={index} index={index} imgUrl={item.imgUrl} name={item.name}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ParentProductsPage;