import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-[10%]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Corporate Office */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Corporate Office</h3>
                    <p>Mission Possible Pvt LTD,</p>
                    <p>Novel Tech Park,</p>
                    <p>Opposite to 1 MG Mall,</p>
                    <p>MG Road, Bangalore – 560042</p>
                    <p>Karnataka, India.</p>
                </div>

                {/* Head Office */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Head Office</h3>
                    <p>Mission Possible Pvt LTD,</p>
                    <p>No.1, Gemini Parsn,</p>
                    <p>Kodambakkam High Road,</p>
                    <p>Nungambakkam, Chennai – 600006</p>
                    <p>Tamilnadu, India.</p>
                </div>

                {/* Our Branches */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Branches</h3>
                    <p>Mumbai</p>
                    <p>Hyderabad</p>
                    <p>Bangalore</p>
                    <p>Chennai</p>
                    <p>Coimbatore</p>
                    <p>Erode</p>
                    <p>Madurai</p>
                    <p>Trichy</p>
                    <p>Salem</p>
                    <p>Kochi</p>
                    <p>Vellore</p>
                    <p>Pondicherry</p>
                    <p>Nagercoil</p>
                    <p>Kanyakumari</p>
                </div>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10">
                <div className="mb-4 md:mb-0">
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-lg">+91 9092884088</p>
                </div>

                <div className="mb-4 md:mb-0">
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-lg">abishek3834@gmail.com</p>
                </div>

                <div className="flex items-center space-x-4">
                    <h4 className="font-semibold mr-4">Follow Us</h4>

                    {/* Facebook */}
                    <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24H12v-9.294H9.294V12h2.706V9.294c0-2.667 1.626-4.12 4.004-4.12 1.137 0 2.112.084 2.395.122v2.776h-1.646c-1.295 0-1.546.616-1.546 1.519V12h3.092l-.403 2.706h-2.689V24h5.294C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0z" />
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a href="#" className="hover:text-pink-500 transition-colors duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.3.975.974 1.239 2.241 1.301 3.607.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.239-3.608 1.301-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.239-2.242-1.301-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.239 3.608-1.301 1.267-.058 1.647-.07 4.85-.07zm0-2.163C8.741 0 8.332.014 7.052.073 5.773.132 4.607.354 3.607 1.354 2.607 2.354 2.385 3.521 2.327 4.8.014 5.919 0 6.328 0 12s.014 8.259.073 9.538c.059 1.28.281 2.446 1.281 3.446.974.975 2.241 1.239 3.607 1.301 1.267.058 1.647.07 4.85.07s3.584-.012 4.85-.07c1.366-.062 2.633-.326 3.608-1.301.975-.975 1.239-2.242 1.301-3.608.058-1.267.07-1.647.07-4.85s-.012-3.584-.07-4.85c-.062-1.366-.326-2.633-1.301-3.608-.975-.975-2.242-1.239-3.608-1.301-1.267-.058-1.647-.07-4.85-.07zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-8 3.999 3.999 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="#" className="hover:text-blue-700 transition-colors duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.447 20.452H16.91v-5.396c0-1.285-.023-2.943-1.792-2.943-1.794 0-2.068 1.403-2.068 2.854v5.485H9.305V9h3.369v1.561h.048c.469-.889 1.616-1.83 3.323-1.83 3.554 0 4.209 2.34 4.209 5.376v6.344zM5.337 7.433c-1.083 0-1.96-.882-1.96-1.97 0-1.087.878-1.969 1.96-1.969 1.084 0 1.96.883 1.96 1.97 0 1.088-.876 1.969-1.96 1.969zM6.88 20.452H3.792V9h3.087v11.452zM22.225 0H1.771C.791 0 0 .77 0 1.722v20.558C0 23.23.79 24 1.771 24h20.451c.981 0 1.771-.77 1.771-1.722V1.722C23.997.77 23.206 0 22.225 0z" />
                        </svg>
                    </a>

                    {/* YouTube */}
                    <a href="#" className="hover:text-red-600 transition-colors duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23.499 6.203a2.968 2.968 0 00-2.088-2.1C19.751 3.614 12 3.614 12 3.614s-7.751 0-9.41.489a2.968 2.968 0 00-2.088 2.1A31.065 31.065 0 000 12a31.065 31.065 0 00.502 5.797 2.968 2.968 0 002.088 2.1c1.659.489 9.41.489 9.41.489s7.751 0 9.41-.489a2.968 2.968 0 002.088-2.1A31.065 31.065 0 0024 12a31.065 31.065 0 00-.501-5.797zm-14.883 9.51V8.287l6.545 3.713-6.545 3.713z" />
                        </svg>
                    </a>

                    {/* Google */}
                    <a href="#" className="hover:text-red-500 transition-colors duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.35 11.1h-9.15v2.83h5.24c-.23 1.26-.92 2.33-1.98 3.03v2.5h3.19c1.87-1.72 2.95-4.27 2.95-7.12 0-.59-.07-1.16-.2-1.7zm-9.15-6.7c1.07 0 2.02.37 2.77 1.1l2.09-2.08C15.41 2.29 13.83 1.6 12.2 1.6 9.24 1.6 6.74 3.42 5.75 6h3.19c.53-1.4 1.85-2.6 3.26-2.6zm-7.75 7.7c0-.59.07-1.17.2-1.7H1.45v2.83H4.6c-.13-.53-.2-1.11-.2-1.7zm7.75 7.2c-1.41 0-2.73-.53-3.73-1.4l-2.09 2.08c1.63 1.43 3.71 2.3 5.82 2.3 1.63 0 3.21-.44 4.57-1.27l-2.02-2.5c-.56.37-1.21.57-1.91.57zm7.75-7.2h-9.15v2.83h5.24c-.23 1.26-.92 2.33-1.98 3.03v2.5h3.19c1.87-1.72 2.95-4.27 2.95-7.12 0-.59-.07-1.16-.2-1.7z" />
                        </svg>
                    </a>
                </div>


            </div>
        </footer>
    );
};

export default Footer;