import { useEffect, useState } from "react"
import styles from "../../styles/Navbar.module.css"
import Link  from "next/link"



const NavbarForOther = () =>{
    
  
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);

    useEffect(()=>{
        document.body.style.overflowY= search ? "hidden" : "scroll"
    },[search])


    useEffect(()=>{
        document.body.style.overflowY= menu ? "hidden" : "scroll"
    },[menu])

    return(
        <div className={`${styles.background_navbar} width-100`}>
            <SearchMenu search={search} setSearch={setSearch}/>
            <div className={`${styles.content_navbar} res-1400`}>
                <Link href={"/"} className={styles.logo_navbar}><img className={styles.logo_img_navbar} src="/src/logo.png" alt="" /></Link>
                <div className={styles.linkers_navbar}>
                    <img onClick={()=>{
                        setSearch(true)
                    }} className={styles.search_img_navbar_linker} src="/src/search_icon.png" alt="" />
                </div>
                <img onClick={()=>{
                    setSearch(true)
                }} className={styles.menu_btn_navbar_search} src="/src/search_icon.png" alt="" />
            </div>
        </div>
    )
}




export const SearchMenu = ({search, setSearch}) =>{
    return(
        <div className={`width-100 ${styles.main_search_cnt} ${search ? styles.open_search : styles.close_search}`}>
            <span onClick={()=>{
                setSearch(!search)
            }} className={styles.cross_btn_main_menu}>X</span>
            <div className={styles.search_input}>
                <input placeholder="Search" className={styles.search_input_feild} type="text" />
                <div className={styles.search_input_result}></div>
            </div>
        </div>
    )
}

export default NavbarForOther;