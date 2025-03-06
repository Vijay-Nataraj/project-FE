import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-2">Navigate</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/post-job" className="hover:underline">
                Post a Job
              </a>
            </li>
            <li>
              <a href="/find-freelancers" className="hover:underline">
                Find a Freelancer
              </a>
            </li>
            <li>
              <a href="/find-jobs" className="hover:underline">
                Find a Job
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Hire Talent</h3>
          <ul>
            <li>
              <a href="/hire-developers" className="hover:underline">
                Hire Freelance Developers
              </a>
            </li>
            <li>
              <a href="/hire-designers" className="hover:underline">
                Hire Freelance Designers
              </a>
            </li>
            <li>
              <a href="/hire-marketers" className="hover:underline">
                Hire Freelance Marketers
              </a>
            </li>
            <li>
              <a href="/hire-product-managers" className="hover:underline">
                Hire Freelance Product Managers
              </a>
            </li>
            <li>
              <a href="/hire-project-managers" className="hover:underline">
                Hire Freelance Project Managers
              </a>
            </li>
            <li>
              <a href="/hire-finance-experts" className="hover:underline">
                Hire Freelance Finance Experts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Featured Skills</h3>
          <ul>
            <li>
              <a href="/skills/software-developers" className="hover:underline">
                Software Developers
              </a>
            </li>
            <li>
              <a
                href="/skills/mobile-app-developers"
                className="hover:underline"
              >
                Mobile App Developers
              </a>
            </li>
            <li>
              <a
                href="/skills/full-stack-developers"
                className="hover:underline"
              >
                Full-stack Developers
              </a>
            </li>
            <li>
              <a
                href="/skills/front-end-developers"
                className="hover:underline"
              >
                Front-end Developers
              </a>
            </li>
            <li>
              <a href="/skills/graphic-designers" className="hover:underline">
                Graphic Designers
              </a>
            </li>
            <li>
              <a href="/skills/seo-experts" className="hover:underline">
                SEO Experts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Resources</h3>
          <ul>
            <li>
              <a href="/faq" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="/help-center" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="font-bold mb-2">Follow us</h3>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
