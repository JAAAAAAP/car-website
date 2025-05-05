import { Input } from './ui/shadcn/input'
import SearchBar_Select from './ui/SearchBar_Select'
import { Button } from './ui/shadcn/button'
import { Search, Trash2 } from 'lucide-react'
import Map from "../../public/ExampleMap.png"
import Image from 'next/image'


export default function DealerSearch() {
    return (
        <div className="flex flex-col items-center mt-24 container gap-4">
            <h1 className="text-4xl text-primary-600">ค้นหาดีลเลอร์ของเรา</h1>
            <div className='flex flex-col gap-6 p-6 w-full shadow-2xl'>

                <div className='flex flex-col gap-4 xl:gap-6 xl:flex-row justify-between'>


                    <Input
                        placeholder='ชื่อดีลเลอร์หรือคีย์เวิร์ด'
                        className='placeholder:text-lg justify-center items-center font-semibold bg-gray-100 border-0 px-8 py-5 h-[62px] w-full'
                    />

                    <div className='flex flex-col md:flex-row items-center gap-2 lg:gap-6'>

                        <div className='flex w-full gap-2 lg:gap-6'>
                            <SearchBar_Select
                                placeholder='เลือกภูมิภาค'
                                options={[]}
                                disabled={false}
                                className='h-[62px] w-full lg:w-52 px-4 md:px-6 lg:px-8 py-5 border-0 bg-gray-100 text-sm md:text-lg font-semibold'
                            />
                            <SearchBar_Select
                                placeholder='เลือกจังหวัด'
                                options={[]}
                                disabled={false}
                                className='h-[62px] w-full lg:w-52 px-4 md:px-6 lg:px-8 py-5 border-0 bg-gray-100 text-sm md:text-lg font-semibold'
                            />
                        </div>
                        <div className='flex justify-between items-center gap-2 w-full'>
                            <SearchBar_Select
                                placeholder='เลือกดีลเลอร์'
                                options={[]}
                                disabled={false}
                                className='h-[62px] w-full lg:w-52 px-6 lg:px-8 py-5 border-0 bg-gray-100 text-sm md:text-lg font-semibold'
                            />
                            <Button className="size-10 lg:size-14 rounded-full [&_svg:not([class*='size-'])]:size-4  lg:[&_svg:not([class*='size-'])]:size-6 bg-primary-400 ">
                                <Search />
                            </Button>
                            <Button className="size-10 lg:size-14 rounded-full [&_svg:not([class*='size-'])]:size-4 lg:[&_svg:not([class*='size-'])]:size-6 bg-red-600">
                                <Trash2 />
                            </Button>
                        </div>
                    </div>
                </div>

                <Image
                    src={Map}
                    alt='map'
                    placeholder='blur'
                    width={1192}
                    height={615}
                    className='rounded-lg'
                />



            </div>
        </div>
    )
}
