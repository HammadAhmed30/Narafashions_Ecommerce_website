import FooterForOthers from "@/components/Footer/FooterForothers"
import NavbarForOther from "@/components/Navbar/NavbarForOther"
import ParentProductsPage from "@/components/Products Display/ParentProductPage"


const ParentPoduct = () =>{

    return(
        <div className="width-100">
            <NavbarForOther/>
            <ParentProductsPage />
            <FooterForOthers/>
        </div>
    )
}

export default ParentPoduct