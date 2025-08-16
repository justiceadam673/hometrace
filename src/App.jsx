import React from "react";
import { Icon } from "@iconify/react";

function App() {
  return (
    <>
      <main className='bg-red-100 text-red-500 flex justify-center items-center flex-col gap-10 w-screen h-screen px-2- py-10  '>
        <Icon
          icon={"eos-icons:bubble-loading"}
          width={200}
          height={200}
          className='text-blue-900 '
        />
        <h1 className=' animate-bounce transition-all duration-1000 text-3xl font-bold text-center'>
          <span className='text-yellow-400'>work</span>{" "}
          <span className='text-orange-500'>has</span>{" "}
          <span className='text-purple-700'>started</span>,{" "}
          <span className=' text-pink-600 '>my</span>{" "}
          <span className=' text-cyan-400 '>fellow</span>{" "}
          <span className=' text-green-500 '>teammates</span>
          <span className=' text-gray-500 '>!!!!!!</span>
        </h1>
      </main>
    </>
  );
}

export default App;
