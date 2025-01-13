"use client"

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react"



export default function Landing(){

    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setSearchTerm(event.target.value);
    };

    const handleSearchUsbmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Searching for:", searchTerm);
    }

    return(
<div
      className="flex flex-col h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
    
      <header className="flex justify-between items-center p-6 text-white">
    
        <Image
          src="/assets/logo.png"
          alt="NuMode logo"
          width={256}
          height={128}
          // className="w-32 h-auto"
        />
        <Link href='/login'>
        <button className="bg-white text-black px-4 py-3 rounded-lg font-medium">
          Get Started
        </button>
        </Link>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center text-white px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Strength Meets Comfort: Workwear for Every Shift
        </h1>

        {/* Search Bar */}

          <form onSubmit={handleSearchUsbmit} className="w-full max-w-5xl">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="search products"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-4 pr-32 text-base outline-none text-black placeholder-gray-500 bg-white rounded-lg shadow-lg"
          />
          <button
          type="submit"
          className=" absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#800200] text-white px-6 py-2 rounded-lg text-base font-medium hover:bg-[#700500] transition duration-300">
            Search
          </button>
        </div>
          </form>

        {/* Featured Searches */}
        <div className="flex items-center gap-2 mt-4 text-sm w-full max-w-5xl">
          <span className="text-gray-300">featured searches:</span>
          <a href="#"><button className="bg-transparent border border-white text-white px-4 py-1 rounded-full hover:bg-white hover:text-black">
            Top Wears
          </button></a>
          <a href="#"><button className="bg-transparent border border-white text-white px-4 py-1 rounded-full hover:bg-white hover:text-black">
            Overalls
          </button></a> 
          <a href="#"><button className="bg-transparent border border-white text-white px-4 py-1 rounded-full hover:bg-white hover:text-black">
            White Shirts
          </button></a>
        </div>
      </main>
    </div>
    )
}


