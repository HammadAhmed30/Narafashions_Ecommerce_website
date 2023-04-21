import { useEffect, useState } from "react"
import styles from "../../styles/Navbar.module.css"
import Link  from "next/link"
import { commerce } from "../lib/commerce"




const NavbarForOther = () =>{
    
  
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);

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




export const SearchMenu = ({ search, setSearch }) => {
    const [searchSent, setSearchSent] = useState("");
    const [search_data, set_search_data] = useState([]);
    const fetchProducts = async () => {
      const { data } = await commerce.products.list({
        limit: 100,
      });
      set_search_data(data);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    return (
      <div
        className={`width-100 ${styles.main_search_cnt} ${
          search ? styles.open_search : styles.close_search
        }`}
      >
        <span
          onClick={() => {
            setSearch(!search);
            setSearchSent("")
          }}
          className={styles.cross_btn_main_menu}
        >
          X
        </span>
        <div className={styles.search_input}>
          <input
            placeholder="Search"
            className={styles.search_input_feild}
            type="text"
            value={searchSent}
            onChange={(e) => setSearchSent(e.target.value)}
          />
          <div className={styles.search_input_result}>
            {search_data.map((item, index) => {
              return (
                searchSent !== "" &&
                item.name.toLowerCase().includes(searchSent.toLowerCase()) && (
                  <div
                    className={styles.search_link_search_bar_navbar_search_pop_up}
                    key={index}
                  >
                    <Link
                    style={{textDecoration:"none"}}
                      onClick={() => {
                        setSearchSent("");
                        setSearch(false);
                      }}
                      href={`/${item.categories
                        .map((prod) => prod.slug)
                        .toString()}/${item.id}`}
                    >
                      <span className={styles.search_data_API_name}>
                        {item.name}
                      </span>
                    </Link>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    );
  };

export default NavbarForOther;