
// import React, { PureComponent } from 'react';

// interface NuModeBannerProps {
//   businessCount?: number;
//   onJoinClick?: () => void;
// }

// class NuModeBanner extends PureComponent<NuModeBannerProps> {
//   static defaultProps = {
//     businessCount: 1000,
//     onJoinClick: () => {},
//   };

//   render() {
//     const { businessCount, onJoinClick } = this.props;

//     return (
//       <div className="relative w-full bg-gradient-to-r from-red-800 to-pink-300 rounded-lg px-10 py-16 flex items-center justify-between">
//         <h1 className="text-white text-4xl font-bold max-w-2xl">
//           Join {businessCount}+ businesses who are using NuMode
//         </h1>
        
//         <button
//           onClick={onJoinClick}
//           className="bg-red-900 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
//         >
//           Join Now
//         </button>
//       </div>
//     );
//   }
// }

// export default NuModeBanner;
'use client'

import React, { PureComponent } from 'react';

interface NuModeBannerProps {
  businessCount?: number;
  onJoinClick?: () => void;
}

class NuModeBanner extends PureComponent<NuModeBannerProps> {
  static defaultProps = {
    businessCount: 1000,
    onJoinClick: () => {},
  };

  render() {
    const { businessCount, onJoinClick } = this.props;

    return (
        <div className='px-10 py-15'>
      <div className="relative w-full bg-gradient-to-r from-red-800 to-pink-300 rounded-lg">
        <div className="max-w-7xl mx-auto px-10 py-16">
          <div className="flex items-center justify-between gap-8">
            <h1 className="text-white text-[48px] font-bold max-w-2xl">
              Join {businessCount}+ businesses who are using NuMode
            </h1>
            
            <button
              onClick={onJoinClick}
              className="whitespace-nowrap bg-red-900 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
            </div>

    );
  }
}

export default NuModeBanner;