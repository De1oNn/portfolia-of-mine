import { Button } from "@/components/ui/button"
export default function About() {
    return (
        <div className="w-full h-screen justify-center items-center flex">
            <div className="flex flex-col jusitfy-center items-center">
                <div className="flex flex-col justify-center items-center mt-4">
                    <h1 className="text-[63px] dark:text-white text-[#484E53] font-bold">About me</h1>
                    <p className="text-[26px] bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent">
                        Get to know me
                    </p>
                </div>
                <p className="text-[19px] dark:text-white text-center text-[#484E53] font-medium w-[800px] mt-4">
                    Сайн байна уу! Би Х. Насанжаргал, вэб хөгжүүлэлт болон хиймэл оюун ухааны чиглэлд карьераа хөгжүүлэх зорилготой junior програм хангамжийн инженер. Pinecone Academy-ийн хөтөлбөрт хамрагдахдаа 8+ төсөл дээр ажиллан frontend, backend, өгөгдлийн сан, API интеграц зэрэг олон чиглэлд мэдлэг, практик туршлага хуримтлуулсан.
                </p>
                <p className="text-[19px] dark:text-white text-center text-[#484E53] font-medium w-[800px] mt-4">
                    Шинэ сорилтод бэлэн, тасралтгүй суралцах хүсэлтэй би үр ашигтай, цэвэр шийдэл бүтээхийг эрхэмлэж, багийн ажиллагаа болон ойлгомжтой харилцаанд анхаардаг. Хэрэглэгчийн асуудлыг шийдвэрлэх, оновчтой систем бүтээх, мөн AI болон орчин үеийн веб технологиор үнэ цэнэ бий болгох нь миний зорилго.
                </p>
                <p className="text-[19px] dark:text-white text-center text-[#484E53] font-medium w-[800px] mt-4">
                    Хамтдаа ажиллаж, таны санааг үр дүнтэй, бодит шийдэл болгон хэрэгжүүлье. Холбогдоод, шинэ боломжуудыг хамтдаа нээцгээе!
                </p>
                <Button className="dark:border-[#4FC3F7] dark:text-white bg-transparent text-[15px] text-[#484E53] hover:bg-transparent hover:border-[3px] h-[55px] w-[187px] border-[1px] border-black text-black mt-6 rounded-[75px] mt-[40px]">
                    Download CV
                </Button>
            </div>
        </div>
    )
}