import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#C1DCDC] py-8 p-3">
            <div className="flex flex-col md:flex-row container mx-auto gap-4">
                <div className="w-full md:w-1/2">
                    <h2 className="font-Logo text-xl leading-3 pt-2">GREENMIND</h2>
                    <p className="py-4 text-xl text-[#1E1E1E80]">
                        We help you find <br /> your dream plant
                    </p>
                    <div className="flex gap-5">
                        <Link className="h-12 w-12 text-[#1E1E1E80] border-[#1E1E1E80] flex justify-center items-center border rounded-full" to={'/'}>
                            <FaFacebookF className="text-xl"/>
                        </Link>
                        <Link className="h-12 w-12 text-[#1E1E1E80] border-[#1E1E1E80] flex justify-center items-center border rounded-full" to={'/'}>
                            <AiFillInstagram className="text-xl"/>
                        </Link>
                        <Link className="h-12 w-12 text-[#1E1E1E80] border-[#1E1E1E80] flex justify-center items-center border rounded-full" to={'/'}>
                            <FaTwitter className="text-xl"/>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 gap-3 flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3">
                        <p className="font-bold font-Title">Information</p>
                        <ul className="space-y-2 mt-4">
                            <li>
                                <Link to={'/'}>About</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Product</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                    <p className="font-bold font-Title">Company</p>
                        <ul className="space-y-2 mt-4">
                            <li>
                                <Link to={'/'}>Community</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Career</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Our Stury</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                    <p className="font-bold font-Title">Contact</p>
                        <ul className="space-y-2 mt-4">
                            <li>
                                <Link to={'/'}>Gatting Started</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Pricing</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Resources</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-10">
                <p className="text-[#1E1E1E80] font-semibold">2023 all Right Reserved Term of use GREENMIND</p>
            </div>
        </div>
    );
};

export default Footer;