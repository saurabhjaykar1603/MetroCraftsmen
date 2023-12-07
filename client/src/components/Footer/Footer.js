import react from "react";
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer-con-main">
                <div className="footer-container flex-con">
                    <div >
                        <h2 className="font-size-footer-h-tag footer-con-link"> Metro Crafts Men</h2>
                        <div><h1 className="font-size-h">Metro Crafts Men is your</h1></div>
                        <div><h1 className="font-size-h">go-to destination for top-</h1></div>
                        <div><h1 className="font-size-h">notch plumbing, electrical,  </h1></div>
                        <div><h1 className="font-size-h">carpentry,and AC services.</h1></div>
                    </div>
                    <div >
                        <h2 className="font-size-footer-h-tag footer-con-link">Quick Links 👇</h2>
                        <div><h1 className="font-size-h"><Link to= '/' className="footer-con-link">Home</Link></h1></div>                        
                        <div><h1 className="font-size-h"><Link to= '/about' className="footer-con-link">About</Link></h1></div>
                        <div><h1 className="font-size-h"><Link to= '/carpenter' className="footer-con-link">Carpenter</Link></h1></div>
                        <div><h1 className="font-size-h"><Link to= '/electrician' className="footer-con-link">Electrician</Link></h1></div>
                    </div>
                    <div >
                        <h2 className="font-size-footer-h-tag footer-con-link">Information 👇</h2>
                        <div><h1 className="font-size-h"><Link to= '/addappointment' className="footer-con-link">Add Appointment</Link></h1></div>
                        <div><h1 className="font-size-h"><Link to= '/myappointment' className="footer-con-link">My Appointment</Link></h1></div>
                        <div><h1 className="font-size-h"><Link to= '/plumbe' className="footer-con-link">Plumbe</Link></h1></div>
                    </div>
                    <div >
                        <h2 className="font-size-footer-h-tag footer-con-link">Contact US 🙂</h2>
                        <div><h1 className="font-size-h footer-con-link">Email : dattapatil@gmail.com  </h1></div>
                        <div><h1 className="font-size-h footer-con-link">Name : Datta Tupe </h1></div>
                        <div><h1 className="font-size-h footer-con-link">Mobile No : 9661626305 </h1></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer