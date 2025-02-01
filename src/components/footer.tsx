import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { BsSkype } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="navigations-footer">
                <div className="sub-divs">
                    <h3 className="links-title">Menu</h3>
                    <ul>
                        <li>New arrivals</li>
                        <li>Best sellers</li>
                        <li>Recently viewed</li>
                        <li>Popular this week</li>
                        <li><Link href="/products">All products</Link></li>
                    </ul>
                </div>
                <div className="sub-divs">
                    <h3 className="links-title">Categories</h3>
                    <ul>
                        <li>Crockery</li>
                        <li>Furniture</li>
                        <li>Homeware</li>
                        <li>Plant pots</li>
                        <li>Chairs</li>
                        <li>Crockery</li>
                    </ul>
                </div>
                <div className="sub-divs">
                    <h3 className="links-title">Our company</h3>
                    <ul>
                        <li><Link href="/about">About us</Link></li>
                        <li>Vacancies</li>
                        <li><Link href="/contact">Contact us</Link></li>
                        <li>Privacy</li>
                        <li>Returns policy</li>
                    </ul>
                </div>
                <div className="sub-divs last-div">
                    <h3 className="links-title">Join our mailing list</h3>
                    <form action="../">
                    <input type="text" placeholder="your@email.com" />
                    <input type="submit" value="Sign Up" />
                </form>
                </div>
            </div>
            <div className="copyright">
                <div className="license">
                    <span>Copyright 2022 Avion LTD</span>
                </div>
                <div className="icons-footer">
                    <FaLinkedin />
                    <IoLogoFacebook />
                    <FaInstagram />
                    <BsSkype />
                    <FaTwitter />
                    <FaPinterest />
                </div>
            </div>
        </div>
    </div>
  )
}
