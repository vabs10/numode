'use client'
import React, { PureComponent } from 'react';

class BusinessSolutions extends PureComponent {
  render() {
    return (
      <div className=""> 
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-[409px]"> 
          <div className="md:w-3/5 px-[80px] py-[40px]"> 
            <h2 className="text-[72px] md:text-[48px] font-bold text-gray-800 leading-tight"> 
              Find Solutions Tailored to Your Business Needs.
            </h2>
          </div>
          <div className="md:w-2/5"> 
            <div className="grid grid-cols-2 gap-x-16 gap-y-8 md:gap-y-16"> 
              <div className='border-l-8 border-l-[#80002032] p-2'>
                <p className="text-4xl font-bold text-[#800200] leading-none">10K+</p>
                <p className="text-base text-gray-600">Products</p>
              </div>
              <div className='border-l-8 border-l-[#80002032] p-2'>
                <p className="text-4xl font-bold text-[#800200] leading-none">100+</p>
                <p className="text-base text-gray-600">Satisfied Customers</p>
              </div>
              <div className='border-l-8 border-l-[#80002032] p-2'>
                <p className="text-4xl font-bold text-[#800200] leading-none">20+</p>
                <p className="text-base text-gray-600">Product Categories</p>
              </div>
              <div className='border-l-8 border-l-[#80002032] p-2'>
                <p className="text-4xl font-bold text-[#800200] leading-none">50+</p>
                <p className="text-base text-gray-600">Brands Onboarded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessSolutions;