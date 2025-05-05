import Image from "next/image";
import Logo from "../../public/Logo.png";
import Thai_flag from "../../public/Icon/thailand.png";
import English_flag from "../../public/Icon/united-kingdom.png";
import { AlignJustify, ChevronDown, Phone } from "lucide-react";
import { CustomSheet } from "./ui/custom/CustomSheet";
import { CustomPopover } from "./ui/custom/CustomPopover";

export default function Navbar() {
  return (
    <div className="bg-primary-50 h-[76px] sticky top-0 w-full z-10">

      <div className="flex container justify-between items-center h-full">

        <div>
          <Image
            src={Logo}
            alt="Logo"
          />
        </div>

        <div>
          <ul className="flex gap-5 md:text-xl">
            <li className="text-primary-500 hidden lg:block">หน้าแรก</li>
            <li className="hidden lg:block">ซื้อ</li>
            <li className="hidden lg:block">รถมาใหม่</li>
            <li className="hidden lg:block">โปรโมชั่น</li>
            <li className="hidden lg:block">ดัลเลอร์</li>
            <li className="hidden xl:block">รีวิว</li>
            <li className="hidden xl:block">คำถามที่พบบ่อย</li>
            <li className="hidden xl:block">เกี่ยวกับเรา</li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex gap-5 md:text-xl">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 md:w-6 md:h-6" />
              <span>12-345-67890</span>
            </li>

            <CustomPopover
              Trigger={
                <li className="flex items-center cursor-pointer">
                  <span>ไทย</span>
                  <ChevronDown className="w-4 h-4 md:w-6 md:h-6" />
                </li>
              }
              className="w-40"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Image
                    src={Thai_flag}
                    alt=""
                    width={36}
                    height={36}
                  />
                  <span>ไทย</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={English_flag}
                    alt=""
                    width={36}
                    height={36}
                  />
                  <span>อังกฤษ</span>
                </div>
              </div>
            </CustomPopover>
          </ul>

          <div className="xl:hidden">
            <CustomSheet
              Trigger={<AlignJustify className="w-7 h-7 cursor-pointer" />}
              title="Car website"
              className="w-56"
            >
              <ul className="flex flex-col text-xl mx-4">
                <li className="p-2 text-primary-500 lg:hidden">หน้าแรก</li>
                <li className="p-2 lg:hidden">ซื้อ</li>
                <li className="p-2 lg:hidden">รถมาใหม่</li>
                <li className="p-2 lg:hidden">โปรโมชั่น</li>
                <li className="p-2 lg:hidden">ดัลเลอร์</li>
                <li className="p-2 ">รีวิว</li>
                <li className="p-2 ">คำถามที่พบบ่อย</li>
                <li className="p-2 ">เกี่ยวกับเรา</li>
              </ul>
            </CustomSheet>
          </div>

        </div>

      </div>
    </div>
  )
}
