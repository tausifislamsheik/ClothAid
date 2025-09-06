const Footer = () => {
    return (
        <div>
        <footer className="footer sm:footer-horizontal bg-gray-900 text-white mt-20 p-10">
            <aside>
                <div className="footer-section">
                 <h3 className="footer-title">Contact Info</h3>
                 <p className="text-lg">📍 123 Charity Street, Dhaka 1000, Bangladesh</p>
                 <p className="text-lg">📞 +880 1234-567890</p>
                 <p className="text-lg">✉️ info@clothaid.org</p>
                 <p className="text-lg">🕐 Mon-Fri: 9AM-6PM</p>
             </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-gray-900 text-gray-400 text-lg p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-bold">ClothAid</span></p>
                </aside>
            </footer>
        </div>
        
    );
};

export default Footer;