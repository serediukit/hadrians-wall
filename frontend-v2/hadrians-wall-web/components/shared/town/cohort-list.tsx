import {cn} from "@/lib/utils";
import {Cohort} from "@/components/shared/town/cohort";

interface Props {
    className?: string;
}

export const CohortList = ({className}: Props) => {
    return (
        <div className={cn(className, 'flex flex-row justify-between w-full h-16 px-8 py-4')}>
            <Cohort className='flex-1' direction='left'>Cohort</Cohort>
            <Cohort className='flex-1' direction='forward'>Cohort</Cohort>
            <Cohort className='flex-1' direction='left'>Cohort</Cohort>
        </div>
    )
}