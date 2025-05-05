import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/shadcn/accordion"

type dataType = {
    question: string
    anwser: string
}

export default function FAQList() {

    const data: dataType[] = [
        { question: "รถที่ขายมีการรับประกันหรือไม่?", anwser: "รถที่เราจำหน่ายมีการรับประกัน ขึ้นอยู่กับประเภทของรถและเงื่อนไขของแต่ละรุ่น รถใหม่มาพร้อมการรับประกันจากผู้ผลิตตามระยะเวลาหรือระยะทางที่กำหนด ส่วนรถมือสองอาจมีการรับประกันขึ้นอยู่กับสภาพรถและแพ็กเกจที่เลือก" },
        { question: "สามารถขอทดลองขับรถก่อนได้ไหม?", anwser: "ได้แน่นอน! เรามีบริการทดลองขับสำหรับรถที่คุณสนใจ กรุณานัดหมายล่วงหน้าเพื่อให้เราจัดเตรียมรถให้พร้อม" },
        { question: "มีบริการจัดไฟแนนซ์หรือไม่?", anwser: " เรามีบริการจัดไฟแนนซ์จากธนาคารและสถาบันการเงินชั้นนำ เพื่อช่วยให้คุณซื้อรถได้สะดวกขึ้น โดยมีเงื่อนไขที่ยืดหยุ่นและดอกเบี้ยพิเศษ" },
        { question: "ใช้เอกสารอะไรบ้างในการซื้อรถ?", anwser: "สำหรับบุคคลธรรมดา จะต้องใช้บัตรประชาชน ทะเบียนบ้าน สลิปเงินเดือนหรือหนังสือรับรองรายได้ และสำเนาบัญชีธนาคารย้อนหลัง 3-6 เดือน ส่วนกรณีนิติบุคคล ต้องใช้หนังสือรับรองบริษัท สำเนาทะเบียนนิติบุคคล บัตรประชาชนของกรรมการผู้มีอำนาจ และสำเนาบัญชีธนาคารย้อนหลัง" },
    ]
    return (
        <div className="flex flex-col items-center mt-24 container">
            <h1 className="text-4xl text-primary-600">คำถามที่พบบ่อย</h1>
            <Accordion type="single" collapsible className="w-full">
                {data.map((item, index) => (
                    <AccordionItem key={index} value={"item-" + index}>
                        <AccordionTrigger className="text-xl">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            {item.anwser}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
