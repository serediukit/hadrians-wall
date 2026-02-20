import {cn} from "@/lib/utils";
import {RiArrowUpLine, RiCloseLargeLine, RiShiningLine} from "@remixicon/react";

interface Props {
    className?: string;
}

export const CohortIcon = ({className}: Props) => {
    return (
        <div className={cn(className, 'size-5')}>
            <div
                className='relative flex items-center w-4 h-5 bg-red-700 outline-1 outline-black rounded-sm border border-amber-400'>
                <RiShiningLine className='absolute inset-0 w-full h-full text-amber-400'/>
                <RiCloseLargeLine className='absolute inset-0 w-full h-full text-amber-400'/>
            </div>
        </div>
    )
}