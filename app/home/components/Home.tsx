"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

type HomeProps = { id: string };

export default function Home({ id }: HomeProps) {
  const [showModal, setShowModal] = useState(false);
  const phoneNumber = "90015676";

  return (
    <div className="w-full h-screen -mt-[100px] flex justify-center items-center" id={id}>
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/avatar.jpg"
          alt="Our Team"
          width={200}
          height={200}
          className="rounded-full shadow-lg object-cover h-[200px]"
        />
        <div className="flex flex-col justify-center items-center mt-4">
          <h1 className="text-[63px] dark:text-white text-[#484E53] font-bold">Nasanjargal</h1>
          <p className="text-[26px] bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent">
            Less, but Better Code
          </p>
        </div>
        <p className="text-[19px] dark:text-white text-center text-[#484E53] font-medium w-[800px] mt-4">
          Би програм хангамжийн инженерийн хувьд илүү их код бичихээс илүү чанартай, оновчтой шийдэл бүтээж, бага мөр кодоор хэрэглэгчдэд үнэ цэнтэй, найдвартай, цэвэр үр дүн хүргэхийг эрхэмлэдэг.
        </p>

        {/* Contact Me Button */}
        <Button
          className="dark:border-[#4FC3F7] dark:text-white bg-transparent text-[15px] text-[#484E53] hover:bg-transparent hover:border-[3px] h-[55px] w-[187px] border-[1px] border-black text-black mt-[40px] rounded-[75px]"
          onClick={() => setShowModal(true)}
        >
          Contact Me
        </Button>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-[320px] text-center relative shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                My Phone Number
              </h2>
              <p className="text-lg font-medium mb-6 text-gray-700 dark:text-gray-300">
                {phoneNumber}
              </p>
              <div className="flex justify-around">
                <a href={`tel:${phoneNumber}`}>
                  <Button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                    Call Now
                  </Button>
                </a>
                <Button
                  className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-400"
                  onClick={() => {
                    navigator.clipboard.writeText(phoneNumber);
                    alert("Phone number copied!");
                    setShowModal(false);
                  }}
                >
                  Copy Number
                </Button>
              </div>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 text-lg font-bold"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
