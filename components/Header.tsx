"use client";

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { FormEvent, useRef  } from "react";


function Header() {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    
    const input = inputRef.current?.value;
    if (!input) return;

    if (inputRef.current?.value) {
      inputRef.current.value = '';
    }

    try {
      // call your api to actibvate your scrapper 
      //  api/activateScrapper
    }catch (error) {
      // handle any error...
    }

    //wait for api response
    
  }

  return (
    <header>
      <form className="flex items-center spacxe-x-2 justify-center rounded-full py-2 px-4 bg-red-100 max-w-md mx-auto" onSubmit={handleSearch}>
        <input ref={inputRef} type="text" placeholder="Search..." className="flex-1 outline-none bg-transparent text-red-400 placeholder:text-red-300"/>
        <button hidden>Search</button>
        <MagnifyingGlassCircleIcon className="h-6 w-6 text-red-300"/>
      </form>
    </header>
  );
};

export default Header