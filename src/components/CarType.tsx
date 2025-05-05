import Image, { StaticImageData } from "next/image"

import CarType_1 from "../../public/Image/CarType_1.png"
import CarType_2 from "../../public/Image/CarType_2.png"
import CarType_3 from "../../public/Image/CarType_3.png"
import CarType_4 from "../../public/Image/CarType_4.png"

type Car_Type = {
    img: StaticImageData,
    title: string,
}
export default function CarType() {

    const data: Car_Type[] = [
        { img: CarType_1, title: "รถเก๋ง" },
        { img: CarType_2, title: "รถตู้" },
        { img: CarType_3, title: "รถกระบะ" },
        { img: CarType_4, title: "รถอเนประสงค์" },
    ]

    return (
        <div className="flex flex-col container items-center gap-9 mt-12">
            <h1 className="text-4xl text-primary-600">ประเภทรถยนต์</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {data.map((item, index) => (
                    <div className="flex flex-col justify-center items-center gap-1" key={index}>
                        <Image
                            src={item.img}
                            alt=""
                            width={190}
                            height={82}
                            placeholder="blur"
                        />
                        <h3 className="text-primary-400 text-2xl font-light">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
