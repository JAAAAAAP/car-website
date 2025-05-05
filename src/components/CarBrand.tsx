"use client"

import Image, { StaticImageData } from "next/image"
import { ChevronDown, ChevronUp, LayoutGrid } from "lucide-react"
import { useMediaQuery } from "react-responsive"
import { ReactNode, useState } from "react"
import dynamic from "next/dynamic"

import Toyota from "../../public/Icon/Car/Toyota.png"
import Honda from "../../public/Icon/Car/Honda.png"
import Nissan from "../../public/Icon/Car/Nissan.png"
import Mitsubishi from "../../public/Icon/Car/Mitsubishi.png"
import Benz from "../../public/Icon/Car/Benz.png"
import Isuzu from "../../public/Icon/Car/Isuzu.png"
import Bmw from "../../public/Icon/Car/Bmw.png"
import Mazda from "../../public/Icon/Car/Mazda.png"
import Ford from "../../public/Icon/Car/Ford.png"
import Chevrolet from "../../public/Icon/Car/Chevrolet.png"
import Suzuki from "../../public/Icon/Car/Suzuki.png"
import Mg from "../../public/Icon/Car/Mg.png"
import Audi from "../../public/Icon/Car/Audi.png"
import Byd from "../../public/Icon/Car/Byd.png"
import Tesla from "../../public/Icon/Car/Tesla.png"
import Volvo from "../../public/Icon/Car/Volvo.png"
import Volkswagen from "../../public/Icon/Car/Volkswagen.png"
import Subaru from "../../public/Icon/Car/Subaru.png"


import Carbrand_Loading from "./Loading/Carbrand_Loading"



type CarBrandType = {
    img?: StaticImageData,
    name: string,
    amount: number,
    icon?: ReactNode
}
const CarBrandList = () => {

    const [showAll, setShowAll] = useState(false);

    const isDesktop = useMediaQuery({ minWidth: 1024 }); // Desktop (>= 1024px)
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // Tablet (768px - 1023px)

    const data: CarBrandType[] = [
        { img: Toyota, name: "Toyota", amount: 2151 },
        { img: Honda, name: "Honda", amount: 2151 },
        { img: Nissan, name: "Nissan", amount: 2151 },
        { img: Mitsubishi, name: "Mitsubishi", amount: 2151 },
        { img: Benz, name: "Benz", amount: 2151 },
        { img: Isuzu, name: "Isuzu", amount: 2151 },
        { img: Bmw, name: "Bmw", amount: 2151 },
        { img: Mazda, name: "Mazda", amount: 2151 },
        { img: Ford, name: "Ford", amount: 2151 },
        { img: Chevrolet, name: "Chevrolet", amount: 2151 },
        { img: Suzuki, name: "Suzuki", amount: 2151 },
        { img: Mg, name: "Mg", amount: 2151 },
        { img: Audi, name: "Audi", amount: 2151 },
        { img: Byd, name: "Byd", amount: 2151 },
        { img: Tesla, name: "Tesla", amount: 2151 },
        { img: Volvo, name: "Volvo", amount: 2151 },
        { img: Volkswagen, name: "Volkswagen", amount: 2151 },
        { img: Subaru, name: "Subaru", amount: 2151 },
        { icon: <LayoutGrid size={32} />, name: "อื่นๆ", amount: 2151 },
    ]

    const itemsToShow = isDesktop ? 10 : isTablet ? 9 : 4;

    const visibleData = showAll ? data : data.slice(0, itemsToShow);

    return (
        <>
            <div className="grid grid-cols-4 md:grid-cols-9 lg:grid-cols-10 gap-5 mt-4 lg:w-[914px]">
                {visibleData.map((item, index) => (
                    <div className="flex flex-col justify-center items-center" key={index}>
                        {item.img && (
                            <Image
                                src={item.img}
                                alt=""
                                width={64}
                                height={64}
                            />
                        )}
                        {item.icon && (
                            <div className="w-16 h-16 flex items-center justify-center">
                                {item.icon}
                            </div>
                        )}
                        <h3>{item.name}</h3>
                        <span className="text-sm font-light">({item.amount.toLocaleString()})</span>
                    </div>
                ))}
            </div>

            <div className="flex text-primary-800 items-center mt-3 cursor-pointer" onClick={() => setShowAll(!showAll)}>
                <h3 className="text-lg">{showAll ? "ซ่อนบางส่วน" : "ดูเพิ่มเติม"}</h3>
                {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>

        </>
    )
}

const CarBrandWithNoSSR = dynamic(() => Promise.resolve(CarBrandList), {
    ssr: false,
    loading: () => <Carbrand_Loading />
});

export default function CarBrand() {
    return (
        <div className="flex flex-col container items-center mt-10">
            <h1 className="text-4xl text-primary-600">ยี่ห้อรถยนต์</h1>
            <CarBrandWithNoSSR />
        </div>
    )
}