'use client'
import React, { PureComponent } from 'react';

interface Brand {
  name: string;
  logo: string;
  class: string;
}

interface BrandLogosProps {
  customTitle?: string;
}

interface BrandLogosState {
  brands: Brand[];
}

class BrandLogos extends PureComponent<BrandLogosProps, BrandLogosState> {
  constructor(props: BrandLogosProps) {
    super(props);
    
    this.state = {
      brands: [
        {
          name: 'Jockey',
          logo: '/assets/jockey.png',
          class: 'w-40'
        },
        {
          name: 'Hitachi',
          logo: '/assets/hitachi.png',
          class: 'w-40'
        },
        {
          name: 'Lenskart',
          logo: '/assets/lenskart.png',
          class: 'w-40'
        },
        {
          name: 'Aptiv',
          logo: '/assets/aptiv.png',
          class: 'w-32'
        }
      ]
    };
  }

  render(): React.ReactNode {
    const { customTitle } = this.props;
    const { brands } = this.state;

    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          {customTitle || 'Brands that preferred us'}
        </h2>
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 py-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className={`${brand.class} h-auto object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BrandLogos;