import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { PiPlantLight } from "react-icons/pi";


export default function Features() {
  return (
    <section className="features-section">
        <div className="container">
            <h2 className="features-heading">What makes our brand different</h2>
            <div className="features-main">
                <div className="feature-single">
                    <div className="icon">
                        <TbTruckDelivery />
                    </div>
                    <h3 className="feature-title">Next day as standard</h3>
                    <p className="feature-description">Order before 3pm and get your order the next day as standard</p>
                </div>
                <div className="feature-single">
                    <div className="icon">
                        <IoIosCheckmarkCircleOutline />
                    </div>
                    <h3 className="feature-title">Made by true artisans</h3>
                    <p className="feature-description">Handmade crafted goods made with real passion and craftmanship</p>
                </div>
                <div className="feature-single">
                    <div className="icon">
                        <CiWallet />
                    </div>
                    <h3 className="feature-title">Unbeatable prices</h3>
                    <p className="feature-description">For our materials and quality you won&apos;t find better prices anywhere</p>
                </div>
                <div className="feature-single">
                    <div className="icon">
                        <PiPlantLight />
                    </div>
                    <h3 className="feature-title">Recycled packaging</h3>
                    <p className="feature-description">We use 100% recycled packaging to ensure our footprint is manageable</p>
                </div>
            </div>
        </div>
    </section>
  )
}
