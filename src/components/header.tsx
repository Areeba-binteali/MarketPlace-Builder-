import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { HiBars4 } from "react-icons/hi2";
import Link from "next/link";


export default function Header() {
    
  return (
    <section className="header-main">
        <div className="container1">
            <div className="topbar-content">
                <div className="search">
                    <div className="icon">
                        <CiSearch />
                    </div>
                </div>
                <div className="logo">
                    <h2 className="logo"><Link href="/">Avion</Link></h2>
                </div>
                <div className="cart-user">
                    <div className="icon">
                        <Link href="#" className="snipcart-checkout"><PiShoppingCartThin /></Link>
                    </div>
                    <div className="icon">
                        <HiOutlineUserCircle />
                    </div>
                    <div className="mobile-menu icon">
                        <CiSearch />
                        <HiBars4 />
                    </div>
                </div>
            </div>
            <div className="navigations">
                <div className="nav-links">
                    <ul>
                        <li>Plant pots</li>
                        <li>Ceramics</li>
                        <li>Tables</li>
                        <li>Chairs</li>
                        <li>Crockery</li>
                        <li>Tableware</li>
                        <li>Cutlery</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}