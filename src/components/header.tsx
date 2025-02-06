"use client"
import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { HiBars4 } from "react-icons/hi2";
import Link from "next/link";
import { useEffect } from "react";


export default function Header() {
    useEffect(() => {
        const applyCustomization = () => {
          if (window.Snipcart) {
            window.Snipcart.api.theme.customization.registerPaymentFormCustomization({
              input: {
                color: "#2a254b",
                border: "1px solid #2a254b !important",
                fontSize: "16px",
                placeholder: {
                  color: "#2a254b",
                },
              },
              label: {
                color: "#2a254b",
                fontSize: "16px !important",
              },
            });
          }
        };
    
        // Ensure Snipcart is loaded before applying customization
        if (window.Snipcart) {
          applyCustomization();
        } else {
          document.addEventListener("snipcart.ready", applyCustomization);
        }
    
        return () => {
          document.removeEventListener("snipcart.ready", applyCustomization);
        };
      }, []);
    
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