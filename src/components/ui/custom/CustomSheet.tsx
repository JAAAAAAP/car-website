
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/shadcn/sheet"

type SheetProps = {
    Trigger: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export function CustomSheet({ Trigger, className, children, title }: SheetProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>{Trigger}</SheetTrigger>
            <SheetContent side="right" className={className}>
                <SheetHeader>
                    <SheetTitle className="text-2xl">{title}</SheetTitle>
                </SheetHeader>
                {children}
            </SheetContent>
        </Sheet>
    )
}
