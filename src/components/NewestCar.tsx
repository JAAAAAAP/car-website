import Image from "next/image"
import Car from "../../public/Image/Car.png"
import Icon_1 from "../../public/Icon/Icon_1.png"
import Icon_2 from "../../public/Icon/Icon_2.png"
import Icon_3 from "../../public/Icon/Icon_3.png"
import Icon_4 from "../../public/Icon/Icon_4.png"
import Line from "../../public/Icon/Line.png"
import { Button } from "./ui/shadcn/button"
import { ChevronRight, Heart, Phone } from "lucide-react"

export default function NewestCar() {
    return (
        <div className="flex flex-col container mt-12 gap-2">
            <h1 className="text-4xl text-primary-600">รถมาใหม่</h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-2">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="flex flex-col items-center p-2 shadow-xl rounded-md gap-3">
                        <Image
                            src={Car}
                            alt=""
                            width={279}
                            height={186}
                            placeholder="blur"
                        />

                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-semibold leading-6">Ford Mustang 2.3 EcoBoost ปี 2016</h3>

                            <div className="flex flex-col">
                                <h4 className="text-lg h-[22px]">฿ 1,578,200</h4>
                                <p className="text-xs text-primary-500">*รวมภาษีมูลค่าเพิ่มแล้ว</p>
                            </div>

                            <div className="grid grid-cols-2 gap-y-2">
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src={Icon_1}
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="h-[20px]"
                                    />
                                    <span>27,000 กม.</span>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src={Icon_2}
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="h-[20px]"
                                    />
                                    <span>บางแค กรุงเทพ</span>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src={Icon_3}
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="h-[20px]"
                                    />
                                    <span>อัตโนมัต</span>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src={Icon_4}
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="h-[20px]"
                                    />
                                    <span>รถเก๋ง</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <Button className="bg-transparent py-1 has-[>svg]:px-0 [&_svg:not([class*='size-'])]:size-6 hover:bg-transparent text-secondary-500 border border-secondary-500">
                                    <Heart />
                                </Button>
                                <Button className="flex font-medium gap-1.5 py-1 px-0 bg-transparent hover:bg-transparent text-green-500 border border-green-500">
                                    <Image
                                        src={Line}
                                        alt=""
                                    />
                                    <p>LINE</p>
                                </Button>
                                <Button className="flex font-medium gap-1 bg-primary-400 py-1 has-[>svg]:px-0 [&_svg:not([class*='size-'])]:size-6 hover:bg-primary-400 text-white border border-primary-400">
                                    <Phone />
                                    <p>โทร</p>
                                </Button>
                            </div>

                            <Button className="text-lg font-medium bg-tertiary-500 hover:bg-tertiary-700">
                                เปรียบเทียบ
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-4">
                <Button className="gap-0 bg-primary-500 text-white text-xl font-normal w-[137px] [&_svg:not([class*='size-'])]:size-6 hover:bg-primary-500">
                    <h4>ดูทั้งหมด</h4>
                    <ChevronRight />
                </Button>
            </div>

        </div>
    )
}
