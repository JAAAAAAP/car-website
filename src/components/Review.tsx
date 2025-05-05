import Image from "next/image"
import star from "../../public/Icon/star.png"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/shadcn/carousel"



type dataType = {
    user: string
    car: string
    title: string
    desc: string
    date: string
}
export default function Review() {



    const data: dataType[] = [
        {
            user: "ทเนตร พลเลือง",
            car: "Toyota Camry 2.5G ปี 2020",
            title: "รถสภาพดี ตรงปก บริการเยี่ยม!",
            desc: "ประทับใจมาก! รถสภาพดี ตรงปก ไม่มีปัญหาในการซื้อขาย พนักงานให้คำแนะนำดีมาก มีการตรวจเช็กสภาพก่อนส่งมอบ ทำให้มั่นใจว่ารถพร้อมใช้งานจริง ใครกำลังมองหารถมือสองคุณภาพดี แนะนำที่นี่เลย!",
            date: "5 มีนาคม 2025"
        },
        {
            user: "ทเนตร พลเลือง",
            car: "Toyota Camry 2.5G ปี 2020",
            title: "รถสภาพดี ตรงปก บริการเยี่ยม!",
            desc: "ประทับใจมาก! รถสภาพดี ตรงปก ไม่มีปัญหาในการซื้อขาย พนักงานให้คำแนะนำดีมาก มีการตรวจเช็กสภาพก่อนส่งมอบ ทำให้มั่นใจว่ารถพร้อมใช้งานจริง ใครกำลังมองหารถมือสองคุณภาพดี แนะนำที่นี่เลย!",
            date: "5 มีนาคม 2025"
        },
        {
            user: "ทเนตร พลเลือง",
            car: "Toyota Camry 2.5G ปี 2020",
            title: "รถสภาพดี ตรงปก บริการเยี่ยม!",
            desc: "ประทับใจมาก! รถสภาพดี ตรงปก ไม่มีปัญหาในการซื้อขาย พนักงานให้คำแนะนำดีมาก มีการตรวจเช็กสภาพก่อนส่งมอบ ทำให้มั่นใจว่ารถพร้อมใช้งานจริง ใครกำลังมองหารถมือสองคุณภาพดี แนะนำที่นี่เลย!",
            date: "5 มีนาคม 2025"
        },
    ]

    return (
        <div className='bg-primary-700 mt-24 py-9 flex flex-col items-center gap-20'>
            <h1 className='text-4xl text-white'>รีวิวของเรา</h1>




            <Carousel
                opts={{
                    align: "start",
                    breakpoints: {
                        '(min-width: 1024px)': { active: false }
                    }
                }}
            >
                <CarouselContent className="w-[335px] md:w-96 m-0 gap-5 lg:w-full lg:m-0">
                    {data.map((item, index) => (
                        <CarouselItem key={index} className='flex flex-col gap-1 p-4 bg-white rounded-md lg:max-w-[295px] basis-1/1 lg:basis-1/3'>
                            <div className='flex flex-col'>
                                <div className='flex h-6 text-xl font-medium items-center justify-between'>
                                    <h1>{item.user}</h1>
                                    <Image
                                        src={star}
                                        alt=""
                                        width={102}
                                        height={24}
                                        className="w-[102px] h-6"
                                    />
                                </div>
                                <p className="h-[17px] ">{item.car}</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-medium">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>

                            <div className="flex justify-end">
                                {item.date}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex lg:hidden" />
                <CarouselNext className="hidden md:flex lg:hidden" />
            </Carousel>

            {/* <div className='grid grid-cols-3 gap-5'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col gap-1 p-4 bg-white rounded-md w-[295px]'>

                        <div className='flex flex-col'>
                            <div className='flex h-6 text-xl font-medium items-center justify-between'>
                                <h1>{item.user}</h1>
                                <Image
                                    src={star}
                                    alt=""
                                    width={102}
                                    height={24}
                                    className="w-[102px] h-6"
                                />
                            </div>
                            <p className="h-[17px] ">{item.car}</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-medium">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>

                        <div className="flex justify-end">
                            {item.date}
                        </div>

                    </div>
                ))}
            </div> */}

            <p className="text-xl text-white underline cursor-pointer">ดูรีวิวเพิ่มเติม</p>

        </div >
    )
}
