import React, { memo } from 'react';

interface Feature {
  title: string;
  description: string;
}

interface FeatureCardProps extends Feature {
  key?: React.Key;
}

const FeatureCard: React.FC<FeatureCardProps> = memo(({ title, description }) => (
  <div className="p-6 flex flex-col gap-2">
    <h3 className="text-xl font-bold text-black">{title}</h3>
    <p className="text-black text-sm leading-relaxed">{description}</p>
  </div>
));

const NuModeBusinessFeatures: React.FC = memo(() => {
  const features: Feature[] = [
    {
      title: "Curated Catalogs, Tailored Pricing",
      description: "Discover personalized product selections with pricing designed to fit your business needs. Simplify your bulk ordering experience today"
    },
    {
      title: "Customer Service That's Always by Your Side.",
      description: "Our dedicated support team ensures a seamless experience from order to delivery. We're here to help, every step of the way."
    },
    {
      title: "Take Control with Our Self-Serve Portal.",
      description: "Manage orders, track deliveries, and customize products—all in one easy-to-use platform, available anytime."
    },
    {
      title: "Fast Delivery, Fully Tracked.",
      description: "Get your orders delivered in just 1 week with real-time tracking at every step. Reliable and efficient, always."
    },
    {
      title: "Role-Based Access with Maker-Checker Flow.",
      description: "Empower your team with secure, role-specific logins and an efficient maker-checker approval process for enhanced control and accountability."
    },
    {
      title: "Free Shipping to Multiple Locations.",
      description: "Easily send orders across multiple destinations with no extra cost. Convenient and hassle-free delivery nationwide."
    },
    {
      title: "Simplified Invoice-Based Checkout.",
      description: "Streamline your payments with invoice-based checkout for easy tracking and hassle-free transactions."
    },
    {
      title: "Centralised Approvals, Decentralised Procurement",
      description: "Efficient approval processes combined with flexible, location-based procurement for better control and agility."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">~ NuMode for Businesses ~</h1>
        <p className="text-lg text-[#1D1D1D] max-w-3xl mx-auto">
          With the 'NuMode for Business' program, you receive exclusive access to benefits and services
          for your team Sign up now to take advantage of everything the program has to offer.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-[#80002005] rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <FeatureCard 
              title={feature.title} 
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
});


export default NuModeBusinessFeatures;