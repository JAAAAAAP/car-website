import Image, { StaticImageData } from "next/image"

type FooterType = {
    title: string,
    subtitle: string[],
    icon?: StaticImageData[],
}

export default function Footer() {
    const data: FooterType[] = [
        {
            title: "เกี่ยวกับเรา",
            subtitle: [
                "เกี่ยวกับโรงแรมของเรา",
                "รีวิวจากลูกค้า",
                "โปรโมชั่น & ส่วนลด",
                "คำถามที่พบบ่อย"
            ]
        },
        {
            title: "ลิงก์ด่วน",
            subtitle: [
                "หน้าหลัก",
                "ห้องพัก",
                "บริการของเรา",
                "ติดต่อเรา"
            ]
        },
        {
            title: "ติดต่อเรา",
            subtitle: [
                "50 อาคารวิทยบริการ มหาวิทยาลัยเกษตรศาสตร์ ถนนพหลโยธิน จตุจักร กรุงเทพฯ 10900",
                "012-345-6789",
                "info@example.com"
            ],
            icon: []
        },
    ]
    return (
        <footer className='mt-24 bg-primary-950 pt-[60px] pb-9 text-primary-100'>

            <div className="container grid grid-cols-1 gap-y-5 xl:gap-0 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row justify-between border-b border-slate-200 pb-3">
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col px-3 text-sm gap-3.5'>
                        <h1 className="font-semibold">{item.title}</h1>
                        <div className='flex flex-col gap-2 '>
                            {item.subtitle.map((subitem, subindex) => (
                                <div key={subindex} className="flex items-start gap-2 gap-x-3 w-[303px]">
                                    {item.icon && item.icon[subindex] && (
                                        <Image
                                            src={item.icon[subindex]}
                                            alt=""
                                            className="w-6 h-6"
                                        />
                                    )}
                                    <h2 className="font-light ">{subitem}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="flex flex-col gap-2.5 px-3 text-sm font-semibold">
                    <div className="flex flex-col gap-3.5">
                        <h1>ติดต่อเรา</h1>
                        <div className="flex">
                            <input type="text" className="outline-none h-10 bg-primary-800 rounded-l-sm pl-1" />
                            {/* <Image
                                src={Chevronsicon}
                                alt=""
                            /> */}
                        </div>
                    </div>

                    <h1>ติดตามเรา</h1>
                    <div className="flex gap-3">
                        {/* <Image
                            src={Facebookicon}
                            alt=""
                        />
                        <Image
                            src={Instagramicon}
                            alt=""
                        />
                        <Image
                            src={Tiktokicon}
                            alt=""
                        /> */}
                    </div>
                </div>

            </div>
        </footer>
    )
}