'use client'
import React, { PureComponent } from 'react';

interface CategoryItemProps {
  title: string;
  imageUrl: string;
}

class CategoryItem extends PureComponent<CategoryItemProps> {
  render() {
    const { title, imageUrl } = this.props;

    return (
      <div className="flex flex-col w-[325px] h-[365px] items-center gap-[16px]">
        <img src={imageUrl} alt={title} className="w-[325px] h-[325px] rounded-2xl mb-4" />
        <span className="text-center w-[140px] h-[28px] text-lg font-semibold">{title}</span>
        <a href="#" className="flex items-center mt-2">
          {/* <span className="text-gray-600">View More</span>  */}
          {/* Replace with your actual arrow icon here */}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> 
        </a>
      </div>
    );
  }
}

interface CategoryListProps {
    categories: CategoryItemProps[];
  }
  
  class CategoryList extends PureComponent<CategoryListProps> {
    render() {
      const { categories } = this.props;
  
      return (
        <div className="container mx-auto gap-16 max-w-screen-2xl">
          <h2 className="text-5xl font-bold text-[#1D1D1D] mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 w-[1360px] h-[365px] flex items-center justify-center justify-between sm:grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <CategoryItem key={index} {...category} />
            ))}
          </div>
        </div>
      );
    }
  }
  
  export default CategoryList;