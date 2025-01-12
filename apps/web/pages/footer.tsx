'use client'
import React, { PureComponent } from 'react';


interface FooterProps {
  aboutText: string;
  functionText: string;
  icons:{
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  }
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

class Footer extends PureComponent<FooterProps> {
  static defaultProps = {
    aboutText: 'Numode, by LMV Brands is a full stack design-to-fulfilment workwear/work uniform solutions company, with 5+ years of experience serving 500+ companies across all sectors worldwide. NuMode specializes in work uniforms, workwear, and protective apparel. We offer wide range of high-quality apparel that fits the need from board room to factory floor. Customized polo for team, customized hoodies for offsite, comprehensive work uniform program for your business, we deliver what you need.',
    functionText: 'FUNCTION. FASHION. FAIRNESS. We craft attire that seamlessly integrates practicality with style, ensuring your team not only looks good but also performs at their best. Our commitment to fairness extends beyond design, encompassing transparent pricing and ethical sourcing practices',
    icons:{
      linkedin: '/assets/linkedin.png',
      facebook: '/assets/fb.png',
      twitter: '/assets/x.png'
    },
    socialLinks: {
      linkedin: '#',
      facebook: '#',
      twitter: '#',
    }
  };

  render() {
    const { aboutText, functionText, socialLinks, icons } = this.props;
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-pink-50 px-4 py-8 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-700 mb-6">{aboutText}</p>
            <p className="text-sm text-gray-700">{functionText}</p>
          </div>

          {/* Navigation and Social Links */}
          <div className="flex flex-col">
  {/* Top Section: Navigation and Social Icons */}
  <div className="flex flex-col md:flex-row justify-between items-center px-32 pt-6">
    {/* Navigation Links */}
    <div className="flex space-x-8 mb-4 md:mb-0">
      <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Join Us</a>
      <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Contact Us</a>
      <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Track Orders</a>
    </div>

    {/* Social Media Icons */}
    <div className="flex space-x-4">
      {icons.linkedin && socialLinks?.linkedin && (
        <a href={socialLinks.linkedin} aria-label="LinkedIn">
          <img src={icons.linkedin} alt='linkedin' className='h-[35px] w-[35px] object-contain' />
        </a>
      )}
      {icons.facebook && socialLinks?.facebook && (
        <a href={socialLinks.facebook} aria-label="Facebook">
          <img src={icons.facebook} alt='Facebook' className='h-[35px] w-[35px] object-contain' />
        </a>
      )}
      {icons.twitter && socialLinks?.twitter && (
        <a href={socialLinks.twitter} aria-label="Twitter">
          <img src={icons.twitter} alt='Twitter' className='h-[35px] w-[35px] object-contain' />
        </a>
      )}
    </div>
  </div>

  {/* Horizontal Line */}
  <div className="border-t border-gray-300 my-6"></div> {/* Added divider line */}

  {/* Bottom Section: Copyright, Logo, and Legal Links */}
  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    {/* Copyright */}
    <div className="text-sm text-gray-600">
      © {currentYear} NuMode. All rights reserved.
    </div>

    {/* Logo (Centered on mobile, left-aligned on larger screens) */}
    <div className="flex justify-center md:justify-start"> {/* Adjusted justify content */}
      <img src="/assets/logo-red.png" alt="NuMode Logo" className="h-8" />
    </div>

    {/* Legal Links */}
    <div className="flex space-x-6 text-sm text-gray-600">
      <a href="#" className="hover:text-gray-900">Terms of Service</a>
      <a href="#" className="hover:text-gray-900">Privacy Policy</a>
    </div>
  </div>
</div>

        </div>
      </footer>
    );
  }
}

export default Footer;
