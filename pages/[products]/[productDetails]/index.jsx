import FooterForOthers from "@/components/Footer/FooterForothers";
import NavbarForOther from "@/components/Navbar/NavbarForOther";
import Detalis from "@/components/ProductDetail/ProductDetails";




const ProductDetail = () =>{
    return(
        <div className="width-100">
            <NavbarForOther/>
            <Detalis/>
            <FooterForOthers/>
        </div>
    )
}

export default ProductDetail;