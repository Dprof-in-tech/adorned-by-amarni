"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle link click
  const handleLinkClick = (event: any, id: any) => {
    event.preventDefault();
    toggleMenu(); // Close the mobile menu
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
    }
  };

  const handleLinkscroll = (event: any, id: any) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
    }
  };

  return (
    <nav className="max-w-7xl mx-auto relative flex flex-row justify-between px-2 md:px-12 py-2">
      {/* Logo */}
      <div className="">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={500}
          height={500}
          className="w-[85px] h-[45px]"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-row gap-6 items-center">
        <ul className="flex flex-row gap-4 items-center">
          {/* Links */}
          <li>
            <Link href="#about" legacyBehavior>
              <a onClick={(e) => handleLinkClick(e, "about")}>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="#contact" legacyBehavior>
              <a onClick={(e) => handleLinkClick(e, "contact")}>Contact Us</a>
            </Link>
          </li>
        </ul>

        {/* Open Store Button */}
        <a href="https://paystack.shop/adorned-by-amani">
          <button className="bg-[#00046A] rounded-md px-4 py-2 text-white">
            Open Store
          </button>
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu}>
          <Image
            src={menuOpen ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="menu icon"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-[100vh] bg-white flex flex-col items-start justify-start z-50 transition-transform transform lg:hidden">
          <button onClick={toggleMenu} className="absolute top-6 right-6">
            <Image
              src="/assets/close.svg"
              alt="close icon"
              width={24}
              height={24}
            />
          </button>
          <div className="mt-8 p-4">
            {/* Mobile Menu Links */}
            <ul className="flex flex-col gap-6 items-start px-2 ">
              <li>
                <Link href="#about" legacyBehavior>
                  <a onClick={(e) => handleLinkClick(e, "about")}>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="#contact" legacyBehavior>
                  <a onClick={(e) => handleLinkClick(e, "contact")}>
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Open Store Button */}
            <a href="https://paystack.shop/adorned-by-amani">
              <button className="bg-[#00046A] rounded-md px-4 py-2 text-white mt-12">
                Open Store
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
