import {cn} from "@/lib/utils";
import {ArrowCell} from "@/components/shared/ui/arrow-cell";

interface Props {
    direction: string
    className?: string;
}

export const Cohort = ({direction, className}: Props) => {
    return (
        <div className={cn(className, 'mx-2 my-1 flex align-items-center')}>
            <div className='w-full flex flex-row justify-between align-items-center'>
                <ArrowCell direction={direction}/>
            </div>
        </div>
    )
}