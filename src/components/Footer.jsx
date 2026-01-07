import React from "react";
import { Instagram, Facebook, Youtube, Music, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-[#9ca3af] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#e63946] rounded flex items-center justify-center font-bold text-white">E</div>
              <span className="text-white text-xl font-semibold tracking-wide">ENTREPEDIA</span>
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-4">Pages</h4>
            <p className="text-white">Home</p>
            <p>Resources</p>
            <p>Free Resources</p>
            <p>Digital Tools Repository</p>
            <p>Digital Product Ideas</p>
            <p>Partner Program</p>
            <p>Contact</p>
            <p>Blog</p>

            <h4 className="text-white font-semibold mt-8 mb-4">Products</h4>
            <p>Master Library</p>
            <p>Custom Book Service</p>
            <p>Custom Digital Product</p>
            <p>PLR Digital Products</p>
          </div>

          {/* Platform & Legal */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <p>Sign In</p>
            <p>Forgot password</p>

            <h4 className="text-white font-semibold mt-8 mb-4">Legal</h4>
            <p>Terms & Conditions</p>
            <p>Privacy & Cookie Policy</p>
            <p>Cookie Settings</p>
            <p>Private Label Rights</p>
            <p>Partner Terms</p>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-6">Socials</h4>
            <div className="flex flex-col gap-4">
              {[Instagram, Facebook, Youtube, Music, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-[#4b5563] flex items-center justify-center"
                >
                  <Icon size={18} className="text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 text-center text-sm text-[#9ca3af]">
          ©2025 Made by Entrepedia
        </div>
      </div>
    </footer>
  );
}
