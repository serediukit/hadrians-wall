import {cn} from "@/lib/utils";
import {Cohort} from "@/components/shared/town/cohort";

interface Props {
    className?: string;
}

export const CohortList = ({className}: Props) => {
    return (
        <div className={cn(className, 'flex flex-row justify-between w-full h-18 px-8 py-4')}>
            <Cohort className='flex-1 outline-2 outline-yellow-300' direction='left'></Cohort>
            <Cohort className='flex-1 outline-2 outline-yellow-300' direction='center'></Cohort>
            <Cohort className='flex-1 outline-2 outline-yellow-300' direction='right'></Cohort>
        </div>
    )
}