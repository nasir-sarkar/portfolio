import React from 'react'
import { socialLinks, sidebarContactItems } from '../data'
import SocialLinks from '../components/ui/SocialLinks'

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[8888] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />


      {/* Drawer */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button
          className="sidebar-close-btn absolute top-[25px] right-[25px] w-10 h-10 bg-[#f9004d] text-white rounded-full flex items-center justify-center cursor-pointer text-base transition-all duration-300"
          onClick={onClose}
        >
          <i className="fas fa-times" />
        </button>


        {/* Brand */}
        <div className="mb-10">
          <a href="#home" className="text-[26px] font-[800] text-white">
            <span className="text-[#f9004d]">NS</span>
            <span>Nasir</span>
          </a>
        </div>


        {/* Contact Info */}
        <div>
          <h4 className="text-white text-base font-semibold mb-[18px]">Contact Info</h4>
          <ul className="space-y-3">
            {sidebarContactItems.map((item, i) => (
              <li key={i} className="text-[#999] text-[14px] flex items-start gap-[10px]">
                <i className={`${item.icon} text-[#f9004d] mt-[3px] shrink-0`} />
                {item.text}
              </li>
            ))}
          </ul>
        </div>


        {/* Social Links */}
        <SocialLinks variant="sidebar" links={socialLinks} className="mt-[30px]" />
      </div>
    </>
  )
}
