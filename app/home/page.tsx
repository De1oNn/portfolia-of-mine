import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function Home() {
    return (
        <div className="w-full h-screen -mt-[100px] justify-center items-center flex">
            <div className="flex flex-col jusitfy-center items-center">
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
                <Button className="dark:border-[#4FC3F7] dark:text-white bg-transparent text-[15px] text-[#484E53] hover:bg-transparent hover:border-[3px] h-[55px] w-[187px] border-[1px] border-black text-black mt-6 rounded-[75px] mt-[40px]">
                    Contact Me
                </Button>
            </div>
        </div>
    )
}