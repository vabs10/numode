// "use client"
// import React, { PureComponent } from 'react';
// import Card from '../public/ui/Card';

// interface Product {
//   id: number;
//   title: string;
//   price: {
//     min: number;
//     max: number;
//   };
//   imageSrc: string;
//   href: string; // Product link
// }

// interface BestSellersState {
//   products: Product[];
// }

// class BestSellers extends PureComponent<{}, BestSellersState> {
//   state: BestSellersState = {
//     products: [
//       {
//         id: 1,
//         title: "Men's Long Sleeve Heavyweight Slim Fit Cotton Shirt",
//         price: { min: 100, max: 150 },
//         imageSrc: '/assets/shirt.png',
//         href: 'https://www.google.com', // Example product link
//       },
//       // Add other products here...
//     ],
//   };

//   render() {
//     const { products } = this.state;

//     return (
//       <section className="w-full py-16 px-4">
//         <div className="max-w-[1400px] mx-auto">
//           <h2 className="text-[48px] font-bold text-[#1E1B18] mb-6">
//             Shop Best Sellers
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <Card
//                 key={product.id}
//                 image={product.imageSrc}
//                 title={product.title}
//                 price={product.price}
//                 href={product.href} // Pass product link
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default BestSellers;
'use client'
import React, { PureComponent } from 'react';

interface ColorOption {
  color: string;
  value: string;
}

interface Product {
  id: number;
  title: string;
  price: {
    min: number;
    max: number;
  };
  imageSrc: string;
  href: string;
  colors: ColorOption[];
  selectedColor?: string;
}

interface BestSellersState {
  products: Product[];
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor?: string;
  onColorSelect: (color: string) => void;
}

class ColorSelector extends PureComponent<ColorSelectorProps> {
  render() {
    const { colors, selectedColor, onColorSelect } = this.props;
    
    return (
      <div className="flex gap-2 mt-4">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-[18px] h-[18px] rounded-full transition-all 
              ${selectedColor === color.value 
                ? 'border-2 border-[#800200] scale-110' 
                : 'border border-gray-300 hover:scale-110'
              }`}
            style={{ backgroundColor: color.value }}
            aria-label={color.color}
            onClick={() => onColorSelect(color.value)}
          />
        ))}
      </div>
    );
  }
}

class BestSellers extends PureComponent<{}, BestSellersState> {
  state: BestSellersState = {
    products: [
      {
        id: 1,
        title: "Men's Long Sleeve Heavyweight Slim Fit Cotton Shirt",
        price: { min: 100, max: 150 },
        imageSrc: "/assets/shirt.png",
        href:"https://localhost:3000",
        colors: [
          { color: "Light Gray", value: "#cdc8c9" },
          { color: "Gray", value: "#A6A39F" },
          { color: "Maroon", value: "#800200" }
        ],
        selectedColor: undefined
      },
      {
        id: 2,
        title: "Men's Long Sleeve Heavyweight Slim Fit Cotton Shirt",
        price: { min: 100, max: 150 },
        imageSrc: "/assets/shirt.png",
        href:"https://localhost:3000",
        colors: [
          { color: "Light Gray", value: "#cdc8c9" },
          { color: "Gray", value: "#A6A39F" },
          { color: "Maroon", value: "#800200" }
        ],
        selectedColor: undefined
      },
      {
        id: 3,
        title: "Men's Long Sleeve Heavyweight Slim Fit Cotton Shirt",
        price: { min: 100, max: 150 },
        imageSrc: "/assets/shirt.png",
        href:"https://localhost:3000",
        colors: [
          { color: "Light Gray", value: "#cdc8c9" },
          { color: "Gray", value: "#A6A39F" },
          { color: "Maroon", value: "#800200" }
        ],
        selectedColor: undefined
      },
      {
        id: 4,
        title: "Men's Long Sleeve Heavyweight Slim Fit Cotton Shirt",
        price: { min: 100, max: 150 },
        imageSrc: "/assets/shirt.png",
        href:"https://localhost:3000",
        colors: [
          { color: "Light Gray", value: "#cdc8c9" },
          { color: "Gray", value: "#A6A39F" },
          { color: "Maroon", value: "#800200" }
        ],
        selectedColor: undefined
      }
    ]
  };

  handleColorSelect = (productId: number, colorValue: string) => {
    this.setState(prevState => ({
      products: prevState.products.map(product => 
        product.id === productId
          ? { ...product, selectedColor: colorValue }
          : product
      )
    }));
  };

  renderProduct = (product: Product) => {
    return (
      <div key={product.id} className="group cursor-pointer">
        <div className="overflow-hidden">
          <img 
            src={product.imageSrc} 
            alt={product.title}
            className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <ColorSelector 
          colors={product.colors}
          selectedColor={product.selectedColor}
          onColorSelect={(color) => this.handleColorSelect(product.id, color)}
        />
        <h3 className="mt-4 text-[18px] font-medium text-[#1E1B18]">
          {product.title}
        </h3>
        <p className="mt-2 text-[16px] font-medium text-[#1E1B18]">
          ₹{product.price.min} - ₹{product.price.max}
        </p>
      </div>
    );
  }

  render() {
    return (
      <section className="w-full py-16 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[48px] font-bold text-[#1E1B18]">
              Shop Best Sellers
            </h2>
            <a 
              href="/best-sellers" 
              className="text-[#800200] text-[18px] font-medium hover:underline flex items-center gap-2"
            >
              View All 
              <span className="text-xl">→</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {this.state.products.map(this.renderProduct)}
          </div>
        </div>
      </section>
    );
  }
}

export default BestSellers;