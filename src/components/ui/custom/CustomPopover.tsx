import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/shadcn/popover"

type PopoverProps = {
    Trigger: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export function CustomPopover({ Trigger, className, children }: PopoverProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>{Trigger}</PopoverTrigger>
            <PopoverContent className={className}>
                {children}
            </PopoverContent>
        </Popover>

    )
}
