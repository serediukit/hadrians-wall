import {cn} from "@/lib/utils";
import {RiArrowUpLine} from "@remixicon/react";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const Cell = ({className, children}: Props) => {
    return (
        <div className={cn(className, 'm-auto size-5 outline-black outline-1')}>
            {children}
        </div>
    )
}