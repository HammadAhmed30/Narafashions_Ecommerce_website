import { useEffect, useState } from "react"
import styles from "../../styles/Navbar.module.css"
import {Link as Linkers} from "react-scroll"
import Link  from "next/link"



const Navbar = () =>{
    
  
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
            <MenuNavbar menu={menu} setMenu={setMenu} setSearch={setSearch}/>
            <SearchMenu search={search} setSearch={setSearch}/>
            <div className={`${styles.content_navbar} res-1400`}>
                <div className={styles.logo_navbar}><img className={styles.logo_img_navbar} src="/src/logo.png" alt="" /></div>
                <div className={styles.linkers_navbar}>
                    {/* <Link href="/"> */}
                        <Linkers className={styles.linkers_navbar_Link} to="home" spy={true} offset={50} smooth={true} duration={500}>Home</Linkers>
                    {/* </Link> */}
                    <Linkers className={styles.linkers_navbar_Link} to="collection" spy={true} offset={50} smooth={true} duration={500} >Collection</Linkers>
                    <Linkers className={styles.linkers_navbar_Link} to="contact" spy={true} offset={50} smooth={true} duration={800} >Contact</Linkers>
                    <Linkers className={styles.linkers_navbar_Link} to="about" spy={true} offset={50} smooth={true} duration={500} >About</Linkers>
                    <img onClick={()=>{
                        setSearch(true)
                    }} className={styles.search_img_navbar_linker} src="/src/search_icon.png" alt="" />
                </div>
                <img onClick={()=>{
                    setMenu(true)
                }} className={styles.menu_btn_navbar} src="/src/menu.png" alt="" />
            </div>
        </div>
    )
}

export const MenuNavbar = ({ menu, setMenu, setSearch }) =>{

    return(
        <div className={`${styles.main_menu_navbar} ${menu ? styles.open_menu : styles.close_menu}`}>
            <span onClick={()=>{
                setMenu(!menu)
            }} className={styles.cross_btn_main_menu}>X</span>
            <div className={styles.linker_menu_navbar}>
                <Linkers className={styles.linker_menu_navbar_Link} to="home" spy={true} offset={50} smooth={true} duration={500} style={{transform: menu ? "translateX(0)" : "translateX(-40px)",transitionDelay: menu ? "450ms" : "0s", opacity: menu ? "1" : "0"}} href="">Home</Linkers>
                <Linkers className={styles.linker_menu_navbar_Link} to="collection" spy={true} offset={50} smooth={true} duration={500} style={{transform: menu ? "translateX(0)" : "translateX(-40px)",transitionDelay:menu ? "500ms" : "70ms", opacity: menu ? "1" : "0"}} href="">Collection</Linkers>
                <Linkers className={styles.linker_menu_navbar_Link} to="contact" spy={true} offset={50} smooth={true} duration={900} style={{transform: menu ? "translateX(0)" : "translateX(-40px)",transitionDelay:menu ? "550ms" : "140ms", opacity: menu ? "1" : "0"}} href="">Contact</Linkers>
                <Linkers className={styles.linker_menu_navbar_Link} to="about" spy={true} offset={50} smooth={true} duration={500} style={{transform: menu ? "translateX(0)" : "translateX(-40px)",transitionDelay:menu ? "600ms" : "210ms", opacity: menu ? "1" : "0"}} href="">About</Linkers>
                <img onClick={()=>{
                    setSearch(true)
                }} style={{transform: menu ? "translateX(0)" : "translateX(-40px)",transitionDelay:menu ? "650ms" : "280ms", opacity: menu ? "1" : "0"}} className={styles.main_menu_img_search} src="/src/search_icon.png" alt="" />
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

export default Navbar;