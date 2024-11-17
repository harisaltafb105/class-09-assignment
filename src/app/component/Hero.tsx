import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-slate-400">
      <h1 className="text-center text-blue-800 text-3xl p-4 font-bold underline">
        A Responsive Webpage
      </h1>

      <div className="bg-slate-300 flex md:flex-row md:flex-wrap md:justify-around flex-col items-center  w-full min-h-screen">
       
        <div className="mt-8 md:mt-14 md:w-4/12 lg:w-3/12 lg:ml-3 md:ml-2 ">
          <Image
            src="/desk-launge-chair.jpg"
            width={330}
            height={330}
            alt="Desk Lounge Chair"
          />
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            Desk Lounge Chair
          </p>
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            PKR: 15,000/-
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 font-bold text-white rounded-lg py-3 px-6 mt-5 md:mt-6">
              Buy Now
            </button>
          </div>
        </div>

        
        <div className="mt-8 md:mt-14 md:w-4/12 lg:w-3/12">
          <Image
            src="/office-launge-chair01.jpg"
            width={330}
            height={330}
            alt="Office Lounge Chair"
          />
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            Office Lounge Chair
          </p>
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            PKR: 20,000/-
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 font-bold text-white rounded-lg py-3 px-6 mt-5 md:mt-6">
              Buy Now
            </button>
          </div>
      </div>
      
      <div className="mt-8 md:mt-14 md:w-4/12 lg:w-3/12 md:ml-2">
          <Image
            src="/Modern Dinning Chair.jpg"
            width={330}
            height={330}
            alt="Chair"
          />
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            Modern Dinning Chair
          </p>
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            PKR: 10,000/-
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 font-bold text-white rounded-lg py-3 px-6 mt-5 md:mt-6">
              Buy Now
            </button>
          </div>
      </div>
      
      <div className="mt-8 md:mt-14 md:w-4/12 lg:w-3/12 lg:ml-3 lg:mb-14 ">
          <Image
            src="/Dinning Chair.jpg"
            width={330}
            height={330}
            alt="Chair"
          />
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            Dinning Chair
          </p>
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            PKR: 12,000/-
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 font-bold text-white rounded-lg py-3 px-6 mt-5 md:mt-6">
              Buy Now
            </button>
          </div>
      </div>
      
      <div className="mt-8 md:mt-14 md:w-4/12 lg:w-3/12 md:ml-2 md:mb-14">
          <Image
            src="/Noble House Chair.jpg"
            width={330}
            height={330}
            alt="Chair"
          />
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            Noble House Chair
          </p>
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            PKR: 20,000/-
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 font-bold text-white rounded-lg py-3 px-6 mt-5 md:mt-6">
              Buy Now
            </button>
          </div>
      </div>
      
      <div className="mt-8 md:mt-14 md:w-4/12 lg:w-3/12 md:mb-14 mb-8">
          <Image
            src="/Temple chair.jpg"
            width={330}
            height={330}
            alt="Office Lounge Chair"
          />
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            Temple Chair
          </p>
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            PKR: 30,000/-
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 font-bold text-white rounded-lg py-3 px-6 mt-5 md:mt-6  ">
              Buy Now
            </button>
          </div>
      </div>



      </div>
    </div>
  );
}
