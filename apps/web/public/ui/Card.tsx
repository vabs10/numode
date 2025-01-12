// import React, { PureComponent } from 'react';

// interface CardProps {
//   image: string;
//   altText: string;
//   onClick: () => void;
// }

// class Card extends PureComponent<CardProps> {
//   render() {
//     const { image, altText, onClick } = this.props;
//     return (
//       <button
//         onClick={onClick}
//         className="bg-white rounded-md shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-110"
//       >
//         <img
//           src={image}
//           alt={altText}
//           className="w-[325px] h-[365px] object-cover rounded-md"
//         />
//         <div className="flex items-center gap-2 mt-2">
//           <span className="text-black font-bold">{altText}</span>
//           <svg
//             width="16"
//             height="12"
//             viewBox="0 0 18 14"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M1 7H17M17 7L11 1M17 7L11 13"
//               stroke="black"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </button>
//     );
//   }
// }

// export default Card;
import React, { PureComponent } from 'react';

interface ColorOption {
  color: string;
  value: string;
}

interface CardProps {
  image: string;
  altText?: string;
  title?: string;
  price?: { min: number; max: number };
  colors?: ColorOption[];
  selectedColor?: string;
  href: string; // New prop for navigation
  onColorSelect?: (color: string) => void;
}

class Card extends PureComponent<CardProps> {
  render() {
    const {
      image,
      altText,
      title,
      price,
      colors,
      selectedColor,
      href,
      onColorSelect,
    } = this.props;

    return (
      <a
        href={href}
        className="block bg-white rounded-md shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-110"
      >
        {/* Image */}
        <img
          src={image}
          alt={altText || title || 'Card image'}
          className="w-full h-[365px] object-cover rounded-md"
        />

        {/* Category Label */}
        {altText && (
          <div className="flex items-center gap-2 mt-2 px-4">
            <span className="text-black font-bold">{altText}</span>
            <svg
              width="16"
              height="12"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7H17M17 7L11 1M17 7L11 13"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}

        {/* Product Info */}
        {title && (
          <div className="p-4">
            <h3 className="text-[18px] font-medium text-[#1E1B18]">{title}</h3>
            {price && (
              <p className="text-[16px] font-medium text-[#1E1B18] mt-2">
                ₹{price.min} - ₹{price.max}
              </p>
            )}

            {/* Color Selector */}
            {colors && onColorSelect && (
              <div className="flex gap-2 mt-4">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-[18px] h-[18px] rounded-full transition-all 
                      ${
                        selectedColor === color.value
                          ? 'border-2 border-[#800200] scale-110'
                          : 'border border-gray-300 hover:scale-110'
                      }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={color.color}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent anchor navigation when selecting a color
                      onColorSelect(color.value);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </a>
    );
  }
}

export default Card;
