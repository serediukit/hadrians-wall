import {cn} from "@/lib/utils";
import {Cohort} from "@/components/shared/town/cohort";
import {iconBlackRaven, iconKnightHelmet} from "@/public/const";
import {Separator} from "@/components/shared/ui/separator";

interface Props {
    className?: string;
}

const defaultItems: string[] = [
    '', '', iconKnightHelmet, '', iconBlackRaven, iconKnightHelmet
]

export const CohortList = ({className}: Props) => {
    return (
        <div className={cn(className, 'flex flex-row justify-between items-center h-10 mx-4 my-4 p-1 bg-amber-100 rounded-lg')}>
            <Cohort className='flex-1' direction='left' items={defaultItems}></Cohort>
            <Separator/>
            <Cohort className='flex-1' direction='center' items={defaultItems}></Cohort>
            <Separator/>
            <Cohort className='flex-1' direction='right' items={defaultItems}></Cohort>
        </div>
    )
}