import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

function HomePage() {
  return (
    
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-red-600/20"/>

      <h1 className="text-3xl mt-2 text-black font-bold mb-5">
        Welcome to FlashBuy
      </h1>

      <h2 className="text-lg italic text-center text-black/50"> 
       Compare prices, quality and ship directly from anywhere in the world
      </h2>

    </div>
    
  )
}

export default HomePage;