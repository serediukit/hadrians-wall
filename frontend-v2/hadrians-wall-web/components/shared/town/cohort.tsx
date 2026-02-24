import {cn} from "@/lib/utils";
import {ArrowCell} from "@/components/shared/ui/arrow-cell";
import {Cell} from "@/components/shared/ui/cell";
import {CohortIcon} from "@/components/shared/ui/cohort-icon";
import {SellTitle} from "@/components/shared/ui/sell-title";
import {ProgressiveCell} from "@/components/shared/ui/progressive-cell";
import {IconsCell} from "@/components/shared/ui/icons-cell";

interface Props {
    direction: string;
    items: string[];
    className?: string;
}

export const Cohort = ({direction, items, className}: Props) => {
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
                        <ProgressiveCell key={index}>
                            <IconsCell items={[item]}/>
                        </ProgressiveCell>
                    ))}
                </div>
            </div>
        </div>
    )
}