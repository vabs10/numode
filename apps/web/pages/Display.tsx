import NuModeBanner from '../pages/Banner';
import BestSellers from '../pages/BestSeller';
import BrandLogos from '../pages/Brands';
import NuModeBusinessFeatures from '../pages/BusinessFeatures';
import BusinessSolutions from '../pages/BusinessSolutions';
import FeatureCard from '../pages/FeatureCard';
import Footer from '../pages/footer';
import Landing from '../pages/landing';
import Login from '../pages/login';
import ShopByCategory from '../pages/ShopByCategory';

export default function Display() {
  
  
  return (
    <>
    {/* <Login /> */}
    < Landing />
    < FeatureCard />
    <ShopByCategory />
    <BestSellers />
    <BusinessSolutions />
    <BrandLogos />
    <NuModeBusinessFeatures />
    <NuModeBanner />
    <Footer />
    </>
  );
}
