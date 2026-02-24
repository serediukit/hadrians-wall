import {cn} from "@/lib/utils";
import {RiArrowLeftLine, RiArrowRightLine, RiArrowUpLine} from "@remixicon/react";
import {Cell} from "@/components/shared/ui/cell";
import {RemixIcon} from "@/components/shared/ui/remix-icon-wrapper";

type Direction = "left" | "center" | "right"

interface Props {
    direction: string
    className?: string;
}

const directionMap: Record<Direction, React.ReactNode> = {
    left: <RemixIcon><RiArrowLeftLine className='w-full h-full text-amber-400'/></RemixIcon>,
    center: <RemixIcon><RiArrowUpLine className='w-full h-full text-amber-400'/></RemixIcon>,
    right: <RemixIcon><RiArrowRightLine className='w-full h-full text-amber-400'/></RemixIcon>,
}

export const ArrowCell = ({direction, className}: Props) => (
    <Cell className={cn(className, 'bg-red-700 outline-1 outline-neutral-800')}>
        {directionMap[direction as Direction]}
    </Cell>
)