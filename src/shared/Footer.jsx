import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/images/icons8-home-repair-64.png";

const Footer = () => {
  return (
    <div className="dark:bg-primary bg-[#7AB2B2]  md:py-5">
      <footer className="max-w-7xl mx-auto text-forth p-5">
        <h1 className="pb-5 border-b ">
          <div className="inline-block">
            <Link className="text-2xl font-bold flex items-center">
              <img className="w-10" src={logo} alt="" />
              Shine<span className="text-primary dark:text-secondary">Fix</span>
            </Link>
          </div>
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-5 text-forth">
          <div>
            <h2 className=" text-xl font-semibold border-b border-third inline-block px-2 md:mb-7 mb-3">
              ABOUT
            </h2>
            <p className="font-semibold">
            Your Renovation Experts, Always. Crafting Dreams into Reality. Transforming Spaces, One Project at a Time.
Expert Renovation Services Tailored to You.
            </p>
          </div>
          <div className="flex gap-5 md:justify-around flex-wrap">
            <div>
              <h2 className=" text-xl font-semibold border-b border-third inline-block px-2  md:mb-7 mb-3">
                CONTACT
              </h2>
              <div className="flex font-semibold flex-col gap-3">
                <a className="link link-hover flex items-center gap-2">
                  <FaPhone className="text-xl"></FaPhone> + 01609729900
                </a>
                <a className="link link-hover flex items-center gap-2">
                  <MdEmail className="text-2xl"></MdEmail> email@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h2 className=" text-xl font-semibold border-b border-third inline-block px-2  md:mb-7 mb-3">
                SOCIAL
              </h2>
              <div className="flex text-3xl gap-3 text-forth">
                <a href="https://www.facebook.com/profile.php?id=100024230347963">
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://www.linkedin.com/in/shahinaalam/">
                  <FaLinkedin></FaLinkedin>
                </a>
                <a href="https://github.com/shahinexy">
                  {" "}
                  <FaGithub></FaGithub>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className=" text-xl font-semibold border-b border-third inline-block px-2 md:mb-7 mb-3">
              NEWSLETTER
            </h2>
            <p className="font-semibold">Enter your email</p>
            <div className=" flex mt-3">
              <input
                type="text"
                placeholder="email"
                className="rounded-none px-2 w-full  border border-third text-forth font-semibold"
              />
              <button className="btn md:px-4 px-2 text-lg font-semibold text-forth bg-third border-2 border-third hover:bg-primary rounded-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="text-sm text-center mt-5 pt-2 border-t border-third">
          Copyright © 2024 - All right reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
