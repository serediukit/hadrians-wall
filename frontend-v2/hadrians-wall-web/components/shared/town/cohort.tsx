import {cn} from "@/lib/utils";
import {ArrowCell} from "@/components/shared/ui/arrow-cell";
import {Cell} from "@/components/shared/ui/cell";
import {CohortIcon} from "@/components/shared/ui/cohort-icon";
import {SellTitle} from "@/components/shared/ui/sell-title";
import {ImageCell} from "@/components/shared/ui/image-cell";

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
            <div className='w-full flex flex-row justify-between items-center bg-red-700'>
                <SellTitle>
                    <div className='flex flex-row items-center gap-1'>
                        <ArrowCell direction={direction}/>

                        <div className='flex flex-col text-[8px] font-bold'>
                            <p className='h-2.5'>{direction.toUpperCase()}</p>
                            <p className='h-2.5'>COHORT</p>
                        </div>
                    </div>

                    <CohortIcon/>
                </SellTitle>

                <div className='flex gap-1 p-1'>
                    {items.map((item, index) => (
                        <ImageCell item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}