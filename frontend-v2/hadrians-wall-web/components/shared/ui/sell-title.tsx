import {cn} from "@/lib/utils";
import React from "react";

interface Props {
    className?: string,
    children?: React.ReactNode
}

export const SellTitle: React.FC<Props> = ({className, children}) => {
    return (
        <div className={cn(className, 'flex flex-row justify-between items-center bg-amber-100 px-2 py-1.5 -m-2 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,0_100%)]')}>
            {children}
        </div>
    )
}