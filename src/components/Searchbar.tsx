import { Input } from "@/components/ui/shadcn/input"

import { Search } from "lucide-react"
import { Button } from "./ui/shadcn/button"
import SearchBar_range from "./ui/SearchBar_range"
import SearchBar_dualrange from "./ui/SearchBar_dualrange"
import SearchBar_Select from "./ui/SearchBar_Select"

export default function Searchbar() {

  return (
    <div className="container flex flex-col mt-12">
      <h1 className="text-4xl text-primary-600 ">ค้นหารถยนต์</h1>

      <div className=" lg:flex flex-col w-full gap-4 shadow-lg bg-white rounded-xl p-6">

        <div className="flex flex-col lg:flex-row gap-5 justify-between">

          <div className="flex flex-col w-full lg:w-[322px]">
            <h4 className="text-lg font-medium">ค้นหารถ</h4>
            <div className="flex items-center bg-primary-100 text-primary-800 text-base rounded-md px-4 h-11 gap-2">
              <Search size={24} />
              <Input type="text" placeholder="ยี่ห้อ รุ่นรถ หรืออื่นๆ" className="text-base placeholder:text-base border-none placeholder:text-primary-800 shadow-none selection:bg-primary-900" />
            </div>
          </div>


          <div className="flex flex-col">
            <h4 className="text-lg font-medium">ยี่ห้อ</h4>
            <SearchBar_Select
              placeholder="ยี่ห้อ"
              options={[]}
              disabled={false}
              className="w-full lg:w-[174px] h-11 pl-5 border-primary-600 text-base text-primary-600 
              [&_svg:not([class*='text-'])]:text-primary-600 data-[placeholder]:text-primary-600
              disabled:bg-gray-200 disabled:data-[placeholder]:text-gray-500 disabled:[&_svg:not([class*='text-'])]:text-gray-500 
              disabled:border-none disabled:opacity-100"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-medium">รุ่น</h4>
            <SearchBar_Select
              placeholder="รุ่น"
              options={[]}
              disabled={true}
              className="w-full lg:w-[174px] h-11 pl-5 border-primary-600 text-base text-primary-600 
              [&_svg:not([class*='text-'])]:text-primary-600 data-[placeholder]:text-primary-600
              disabled:bg-gray-200 disabled:data-[placeholder]:text-gray-500 disabled:[&_svg:not([class*='text-'])]:text-gray-500 
              disabled:border-none disabled:opacity-100"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-medium">ประเภทรถ</h4>
            <SearchBar_Select
              placeholder="ประเภทรถ"
              options={[]}
              disabled={false}
              className="w-full lg:w-[174px] h-11 pl-5 border-primary-600 text-base text-primary-600 
              [&_svg:not([class*='text-'])]:text-primary-600 data-[placeholder]:text-primary-600
              disabled:bg-gray-200 disabled:data-[placeholder]:text-gray-500 disabled:[&_svg:not([class*='text-'])]:text-gray-500 
              disabled:border-none disabled:opacity-100"
            />
          </div>

          <div className="hidden lg:flex items-end w-[153px]">
            <Button disabled className="space-x-2 px-11 pt-2 h-11 w-full disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500 text-base text-center">
              <Search size={20} />
              ค้นหา
            </Button>
          </div>

        </div>

        <div className="flex flex-col lg:flex-row gap-5 mt-5 lg:mt-0">

          <div className="flex flex-col">
            <h4 className="text-lg font-medium">ปีผลิต</h4>
            <SearchBar_Select
              placeholder="ปีผลิต"
              options={[]}
              disabled={false}
              className="w-full lg:w-[174px] h-11 pl-5 border-primary-600 text-base text-primary-600 
              [&_svg:not([class*='text-'])]:text-primary-600 data-[placeholder]:text-primary-600
              disabled:bg-gray-200 disabled:data-[placeholder]:text-gray-500 disabled:[&_svg:not([class*='text-'])]:text-gray-500 
              disabled:border-none disabled:opacity-100"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-medium">จังหวัด</h4>
            <SearchBar_Select
              placeholder="จังหวัด"
              options={[]}
              disabled={false}
              className="w-full lg:w-[174px] h-11 pl-5 border-primary-600 text-base text-primary-600 
              [&_svg:not([class*='text-'])]:text-primary-600 data-[placeholder]:text-primary-600
              disabled:bg-gray-200 disabled:data-[placeholder]:text-gray-500 disabled:[&_svg:not([class*='text-'])]:text-gray-500 
              disabled:border-none disabled:opacity-100"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-medium text-start">เลขไมค์ (กม.)</h4>
            <div className="flex items-center h-full mt-6 ">
              <SearchBar_range />
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-medium">ช่วงราคารถ</h4>
            <div className="flex items-center h-full mt-6">
              <SearchBar_dualrange />
            </div>
          </div>
        </div>
        
        <div className="flex lg:hidden justify-center items-end w-full mt-5">
          <Button disabled className="space-x-2 px-11 pt-2 h-11 w-[153px]  disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500 text-base text-center">
            <Search size={20} />
            ค้นหา
          </Button>
        </div>
      </div>
    </div>
  )
}
