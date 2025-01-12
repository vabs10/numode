'use client'
import React, { PureComponent } from 'react';

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

interface FeatureItem {
  iconSrc: string;
  title: string;
}

interface FeatureCardState {
  features: FeatureItem[];
}

class Icon extends PureComponent<IconProps> {
  render() {
    const { src, alt, className = "" } = this.props;
    return (
      <img 
        src={src} 
        alt={alt} 
        className={`h-[52px] w-[52px] ${className}`}
      />
    );
  }
}

class FeatureCard extends PureComponent<{}, FeatureCardState> {
  state: FeatureCardState = {
    features: [
      {
        iconSrc: "/assets/truck.svg",
        title: "We Deliver Everywhere in India—Fast & Free!"
      },
      {
        iconSrc: "/assets/package.svg", 
        title: "Start Small: MOQ Less Than 10 Pieces!"
      },
      {
        iconSrc: "/assets/customise.svg",
        title: "Create. Customize. Order. It's That Simple."
      },
      {
        iconSrc: "/assets/check.svg", 
        title: "Employee Essentials Endorsed by Top Brands"
      }
    ]
  };

  renderFeature = (feature: FeatureItem, index: number) => {
    return (
      <div 
        key={index}
        className="flex items-center w-full max-w-[322.75px] min-h-[76px] gap-[16px] p-4 rounded-full border border-[#800200] hover:border-[#800500] transition-colors mx-auto"
      >
        <Icon 
          src={feature.iconSrc} 
          alt={`Feature ${index + 1} icon`}
        />
        <p className="text-[16px] flex-1 flex items-center font-medium text-[#1E1B18]">
          {feature.title}
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="w-full py-8">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[23px] justify-items-center">
            {this.state.features.map(this.renderFeature)}
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureCard;