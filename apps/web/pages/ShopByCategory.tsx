"use client"
import React, { PureComponent } from 'react';
import Card from '../public/ui/Card';

interface Category {
  image: string;
  altText: string;
  link: string;
}

interface ShopByCategoryState {
  categories: Category[];
}

class ShopByCategory extends PureComponent<{}, ShopByCategoryState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      categories: [
        { image: 'assets/topWear.png', altText: 'Top Wear', link: '/top-wear' },
        {
          image: 'assets/bottomWear.png',
          altText: 'Bottom Wear',
          link: '/bottom-wear',
        },
        {
          image: 'assets/outerWear.png',
          altText: 'Outer Wear',
          link: '/outer-wear',
        },
        { image: 'assets/overalls.png', altText: 'Overalls', link: '/overalls' },
      ],
    };
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="w-full py-16 px-4">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[48px] font-bold text-[#1E1B18] mb-6">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                image={category.image}
                altText={category.altText}
                href={category.link} // Pass link for navigation
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ShopByCategory;
