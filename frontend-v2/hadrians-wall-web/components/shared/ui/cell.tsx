import {cn} from "@/lib/utils";
import {RiArrowUpLine} from "@remixicon/react";
import React from "react";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const Cell = ({className, children}: Props) => {
    return (
        <div className={cn('h-5 min-w-5 p-px', className)}>
            {children}
        </div>
    )
}