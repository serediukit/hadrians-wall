import {cn} from "@/lib/utils";
import {RiArrowUpLine, RiCloseLargeLine, RiShiningLine} from "@remixicon/react";

interface Props {
    className?: string;
}

export const CohortIcon = ({className}: Props) => {
    return (
        <div className={cn(className, 'size-5 justify-items-center items-center')}>
            <div className="flex h-full items-center">
                <div
                    className='relative w-3.5 h-4.25 bg-red-700 outline-1 outline-black rounded-sm border border-amber-400'>
                    <RiShiningLine className='absolute inset-0 w-full h-full text-amber-400'/>
                    <RiCloseLargeLine className='absolute inset-0 w-full h-full text-amber-400'/>
                </div>
            </div>
        </div>
    )
}