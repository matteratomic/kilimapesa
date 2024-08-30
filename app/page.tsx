import { FlipText } from "@/components/FlipText";
import Image from "next/image";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-100  p-8">
      <div className="flex relative min-h-screen items-center justify-between bg-gray-100">
        <div className="px-16 pt-16 flex flex-col w-3/5 h-screen items-center justify-start">
          <div className="w-2/3 bg-gray-200 p-4 flex rounded-full items-center">
            <div style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1592598015799-35c84b09394c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
            }} className="bg-cover w-12 h-12 bg-amber-500 rounded-full border-2 border-white"></div>
            <div
              style={{
                backgroundImage: "url(https://randomuser.me/api/portraits/men/59.jpg)"
              }}
              className="bg-cover -ml-4 w-12 h-12 bg-amber-500 rounded-full border-2 border-white"></div>
            <div
              style={{
                backgroundImage: "url(https://randomuser.me/api/portraits/women/36.jpg)"
              }}
              className="bg-cover -ml-4 w-12 h-12 bg-amber-500 rounded-full border-2 border-white"></div>
            <div
              style={{
                backgroundImage: "url(https://randomuser.me/api/portraits/men/83.jpg)",
              }}
              className="bg-cover -ml-4 w-12 h-12 bg-amber-500 rounded-full border-2 border-white"></div>
            <p className="ml-2 text-lg font-semibold text-black">5K</p>
            <p className="ml-2 text-sm font-semibold text-black">Farmers have joined our platform</p>
          </div>
          <h1 className="mt-3 text-7xl font-bold text-black text-center">Turn small steps into <span style={{ lineHeight: 0.8 }} className="text-amber-500  inline-block">big dreams</span></h1>

          <p className="mt-4 text-center text-gray-600 font-medium">
            Whether you're saving for a rainy day, a dream vacation, or your child's education, Lejaa makes it easy. Set your goals, save at your own pace, and watch your savings grow—all from your mobile phone. No bank account needed. Your future starts with just a few taps
          </p>
          <div className="mt-8 flex space-x-3 w-2/3 h-16">
            <div className="flex items-center justify-center rounded-full p-6 py-3 w-1/2 bg-amber-500 text-lg font-semibold">Sign Up</div>
            <div className="flex items-center justify-center rounded-full p-6 w-1/2 bg-white text-lg text-black font-semibold">About Us</div>
          </div>
        </div>
        <div
          // style={{ }}
          className="relative w-2/5 h-screen">
          <div
            style={{
              backgroundImage: "url(https://h6etacfy2f.execute-api.us-east-1.amazonaws.com/default/images-resizer?path=prod/iamdavidrotimi/1920x1920/1633433894968.1118.jpeg)"
              // backgroundImage: "url(https://plus.unsplash.com/premium_photo-1678344184755-867393167022?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
            }}
            className="bg-cover bg-center h-5/6 w-full bg-amber-500 rounded-2xl"></div>
        </div>
      </div>

      <div className="flex w-full space-x-8">
        <div
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1592598015799-35c84b09394c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
          className="relative bg-cover w-1/3 h-72 rounded-lg bg-amber-500 flex items-center p-3">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-300/40 to-amber-500"></div>
          <div className="relative z-1 flex items-center justify-between w-full mt-auto">
            <p className="w-2/4 font-medium">Efficient and precise harvest dynamics</p>
            <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">

            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1592598015799-35c84b09394c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
          className="relative bg-cover w-1/3 h-72 rounded-lg bg-amber-500 flex items-center p-3">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-300/40 to-amber-500"></div>
          <div className="relative z-1 flex items-center justify-between w-full mt-auto">
            <p className="w-2/4 font-medium">Efficient and precise harvest dynamics</p>
            <div className="w-12 h-12 bg-white rounded-md"> </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1592598015799-35c84b09394c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
          className="relative bg-cover w-1/3 h-72 rounded-lg bg-amber-500 flex items-center p-3">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-300/40 to-amber-500"></div>
          <div className="relative z-1 flex items-center justify-between w-full mt-auto">
            <p className="w-2/4 font-medium">Efficient and precise harvest dynamics</p>
            <div className="w-12 h-12 bg-white rounded-md"> </div>
          </div>
        </div>

        {/* <div */}
        {/*   style={{ backgroundImage: "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }} */}
        {/*   className="bg-cover w-1/3 h-72 rounded-lg bg-amber-500 flex items-center p-3"> */}
        {/*   <div className="flex items-center justify-between w-full mt-auto"> */}
        {/*     <p className="w-2/4">Efficient and precise harvest dynamics</p> */}
        {/*     <div className="w-12 h-12 bg-[#FFF4DC] rounded-md"> </div> */}
        {/*   </div> */}
        {/* </div> */}

        {/* <div */}
        {/*   style={{  */}
        {/*     backgroundImage:"url(https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBhbWVyaWNhbnxlbnwwfHwwfHx8MA%3D%3D)", */}
        {/*   }} */}
        {/*   className="bg-cover w-1/3 h-72 rounded-lg bg-amber-500 flex items-center p-3"> */}
        {/*   <div className="flex items-center justify-between w-full mt-auto"> */}
        {/*     <p className="w-2/4">Efficient and precise harvest dynamics</p> */}
        {/*     <div className="w-12 h-12 bg-[#FFF4DC] rounded-md"> </div> */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </main>
  );
}
