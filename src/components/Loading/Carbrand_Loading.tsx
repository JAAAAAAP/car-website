import { Skeleton } from "../ui/shadcn/skeleton"

export default function Carbrand_Loading() {
    return (
        <div className="flex flex-col items-center">

            <div className="grid grid-cols-4 md:grid-cols-9 lg:grid-cols-10 gap-5 mt-4 ">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div className="flex flex-col justify-center items-center w-[73px] sm:hidden" key={index}>
                        <Skeleton className="h-16 w-full rounded-md" />
                        <Skeleton className="h-4 w-16 mt-3" />
                        <Skeleton className="h-3.5 w-8 rounded-md mt-1" />
                    </div>
                ))}
                {Array.from({ length: 9 }).map((_, index) => (
                    <div className="hidden md:flex flex-col justify-center items-center w-[73px] lg:hidden" key={index}>
                        <Skeleton className="h-16 w-full rounded-md" />
                        <Skeleton className="h-4 w-16 mt-3" />
                        <Skeleton className="h-3.5 w-8 rounded-md mt-1" />
                    </div>
                ))}
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="hidden lg:flex flex-col justify-center items-center w-[73px]" key={index}>
                        <Skeleton className="h-16 w-full rounded-md" />
                        <Skeleton className="h-4 w-16 mt-3" />
                        <Skeleton className="h-3.5 w-8 rounded-md mt-1" />
                    </div>
                ))}

            </div>
            <Skeleton className="mt-3 w-[85px] h-7" />
        </div>
    )
}
