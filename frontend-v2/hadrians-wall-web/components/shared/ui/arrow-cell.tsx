import {cn} from "@/lib/utils";
import {RiArrowLeftLine, RiArrowRightLine, RiArrowUpLine} from "@remixicon/react";
import {Cell} from "@/components/shared/ui/cell";

type Direction = "left" | "center" | "right"

interface Props {
    direction: string
    className?: string;
}

const directionMap: Record<Direction, React.ReactNode> = {
    left: <RiArrowLeftLine className='w-full h-full text-amber-400'/>,
    center: <RiArrowUpLine className='w-full h-full text-amber-400'/>,
    right: <RiArrowRightLine className='w-full h-full text-amber-400'/>,
}

export const ArrowCell = ({direction, className}: Props) => (
    <Cell className={cn(className, 'bg-red-700')}>
        {directionMap[direction as Direction]}
    </Cell>
)