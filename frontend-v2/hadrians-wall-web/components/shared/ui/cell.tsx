import {cn} from "@/lib/utils";
import {RiArrowUpLine} from "@remixicon/react";

interface Props {
    className?: string;
    variant?: string;
    children?: React.ReactNode;
}

const variants: Record<string, string> = {
    'default': 'size-5 outline-black outline-1 p-px',
    'double': 'h-5 w-10 outline-black outline-1 p-px'
}

export const Cell = ({className, variant, children}: Props) => {
    return (
        <div className={cn(className, variant ? variants[variant] : variants['default'])}>
            {children}
        </div>
    )
}