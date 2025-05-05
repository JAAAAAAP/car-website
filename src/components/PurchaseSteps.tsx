import Image, { StaticImageData } from "next/image"
import Icon_1 from "../../public/Icon/Icon_7.png"
import Icon_2 from "../../public/Icon/Icon_8.png"
import Icon_3 from "../../public/Icon/Icon_6.png"
import Icon_4 from "../../public/Icon/Icon_5.png"

type DataType = {
  title: string
  icon: StaticImageData
  desc: string
}
export default function PurchaseSteps() {

  const data: DataType[] = [
    { title: "ค้นหารถที่ใช่สำหรับคุณ", icon: Icon_1, desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies tempor" },
    { title: "ตรวจสอบสภาพรถ", icon: Icon_2, desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies tempor" },
    { title: " เจรจาราคาและเอกสาร", icon: Icon_3, desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies tempor" },
    { title: "ปิดดีลและรับรถ", icon: Icon_4, desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies tempor" },
  ]
  return (
    <div className="flex flex-col items-center container mt-24 gap-5">
      <h1 className="text-4xl text-primary-600">ขั้นตอนซื้อรถจากเรา</h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 max-w-[820px] w-full gap-5">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-[190px] p-4 gap-4 rounded-md shadow-lg bg-primary-50">
              <div className="flex items-center justify-center rounded-full bg-primary-100 size-[76px]">
                <Image
                  src={item.icon}
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <h2 className="font-semibold">{item.title}</h2>
              <span className="text-xs font-medium text-gray-500 leading-5">{item.desc}</span>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
