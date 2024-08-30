import Image from "next/image";
export default function Home() {
  return (
    <main className="flex relative min-h-screen items-center justify-between p-8 bg-gray-100">
      <div className="px-16 flex flex-col w-3/5 h-screen items-center justify-center">
        <div className="w-2/3 bg-gray-200 p-4 flex rounded-full items-center">
          <div className="w-12 h-12 bg-lime-500 rounded-full border-2 border-white"></div>
          <div className="-ml-4 w-12 h-12 bg-lime-500 rounded-full border-2 border-white"></div>
          <div className="-ml-4 w-12 h-12 bg-lime-500 rounded-full border-2 border-white"></div>
          <div className="-ml-4 w-12 h-12 bg-lime-500 rounded-full border-2 border-white"></div>
          <p className="ml-2 text-lg font-semibold text-black">5K</p>
          <p className="ml-2 text-sm font-semibold text-black">Farmers have joined our platform</p>
        </div>
        <h1 className="mt-3 text-7xl font-bold text-black text-center">Helping farmers in the digital age</h1>
        <p className="mt-4 text-center text-gray-600 font-medium">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <div className="mt-8 flex space-x-3 w-2/3">
          <div className="flex items-center justify-center rounded-md p-6 w-1/2 bg-lime-500 text-lg">Sign Up</div>
          <div className="flex items-center justify-center rounded-md p-6 w-1/2 bg-white text-lg text-black">About Us</div>
        </div>
      </div>
      <div className="relative w-2/5 h-screen pb-10">
        <div className="h-full w-full bg-lime-500 rounded-2xl"></div>
      </div>
    </main>
  );
}
