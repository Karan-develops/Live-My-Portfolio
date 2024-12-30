import React from "react";
import { BadgeCheck, Mail } from "lucide-react";
import SocialMedia from "./ui/SocialMedia";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "About Me", href: "#about" },
      { name: "Projects", href: "#project" },
      { name: "Services", href: "#services" },
      { name: "Automated Mail", href: "#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "Get in Touch",
        href: "https://wa.me/7889000352?text=hey!,%20Karan%20I%20want%20to%20work%20on%20a%20project%20with%20you",
      },
      { name: "Email", href: "mailto:mrkaran2k5@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="customShadow w-full mt-4 py-12 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <BadgeCheck className="size-8 text-green-500" />
              <span className="text-xl font-firacode ml-2">Karan Aggarwal</span>
            </div>
            <p className="text-gray-300 text-md">
              Full Stack Developer based in India, building modern web
              applications.
            </p>
          </div>
          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Social Media Section */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Connect</h3>
            <SocialMedia
              links={{
                twitter: "https://x.com/mrkaran000",
                linkedin:
                  "https://www.linkedin.com/in/karan-aggarwal-50a12b2b9/",
                github: "https://github.com/Karan-develops",
              }}
            />
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Karan Aggarwal. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#1A2B3B]/20 focus:ring-offset-2 focus:ring-offset-[#E8E6E3]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1A2B3B_0%,#FF4D4D_50%,#1A2B3B_100%)]" />
                <span className="flex h-full w-full items-center justify-center rounded-full bg-[#E8E6E3] px-4 py-1 text-sm font-medium text-[#1A2B3B] backdrop-blur-3xl">
                  <a
                    href="mailto:mrkaran2k5@gmail.com"
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email Me
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
