import Image from "next/image";
import Desktop_car from "../../public/Image/Desktop_car.png"
import Mobile_car from "../../public/Image/Mobile_car.png"
import { Button } from "./ui/shadcn/button";

export default function Hero() {
    return (
        <div className="container flex flex-col-reverse mt-5 md:mt-0 md:flex-row justify-between items-start md:items-center">

            <div className="md:w-[332px] lg:w-[357px] xl:w-[505px] flex flex-col gap-2 md:gap-3 xl:gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-3xl xl:text-5xl font-medium tracking-wide xl:tracking-wider leading-11 md:leading-10 lg:leading-11 xl:leading-14">
                        ซื้อรถมือสองราคาถูก รถคุณภาพดีในงบที่
                        <span className="text-primary-500">เอื้อมถึง</span>
                    </h1>
                    <span className="text-lg md:text-base xl:text-xl font-normal">
                        ซื้อรถมือสองราคาถูก คุณภาพดี พร้อมใช้งาน ผ่อนสบาย อนุมัติไว รับประกันคุณภาพ เช็คสภาพฟรี จัดไฟแนนซ์ง่าย
                        บริการประทับใจ ส่งตรงถึงบ้าน เลือกได้หลากหลายรุ่น
                    </span>
                </div>

                <div>
                    <Button
                        className="text-lg md:text-base lg:text-lg xl:text-2xl font-light p-2.5 h-9 md:h-9 lg:h-10 xl:h-12 bg-primary-500 ring-primary-500 duration-150 
                        hover:text-primary-500 hover:ring-2 hover:bg-transparent"
                    >
                        ดูรถทั้งหมด
                    </Button>
                </div>

            </div>

            <div className="w-full md:w-[331px] lg:w-[431px] xl:w-[611px] aspect-[611/460] relative">
                <Image
                    src={Desktop_car}
                    placeholder="blur"
                    alt=""
                    fill
                    className="hidden md:block rounded-lg"
                />
                <Image
                    src={Mobile_car}
                    alt=""
                    placeholder="blur"
                    fill
                    className="md:hidden rounded-lg"
                />
            </div>
        </div>
    )
}
