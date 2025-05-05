import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/shadcn/select"

type SelectTpye = {
    placeholder: string
    options: string[]
    className?: string
    disabled: boolean
}



export default function SearchBar_Select({ placeholder, options, className, disabled }: SelectTpye) {
    return (
        <Select disabled={disabled}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option, idx) => (
                    <SelectItem key={idx} value={option}>
                        {option}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}


