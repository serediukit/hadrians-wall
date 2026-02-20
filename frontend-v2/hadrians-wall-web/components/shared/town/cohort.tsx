import {cn} from "@/lib/utils";
import {ArrowCell} from "@/components/shared/ui/arrow-cell";
import {Cell} from "@/components/shared/ui/cell";
import {CohortIcon} from "@/components/shared/ui/cohort-icon";
import Image from "next/image";

interface Props {
    direction: string;
    items: string[];
    className?: string;
}

const defaultItems: string[] = [
    '','','/1.jpeg','','/1.jpeg','/1.jpeg'
]

export const Cohort = ({direction, items, className}: Props) => {
    items = items ? items : defaultItems;

    return (
        <div className={cn(className, 'mx-2 my-1 flex items-center')}>
            <div className='w-full flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center gap-1'>
                    <ArrowCell direction={direction}/>

                    <div className='text-[8px] font-bold'>
                        <p>{direction.toUpperCase()}</p>
                        <p>COHORT</p>
                    </div>
                </div>

                <CohortIcon/>

                <div className='flex gap-1 bg-red-700 p-1'>
                    {items.map((item, index) => (
                        <Cell className='bg-white' key={index}>
                            {item && <Image width={24} height={24} src={item} alt={''}/>}
                        </Cell>
                    ))}
                </div>
            </div>
        </div>
    )
}