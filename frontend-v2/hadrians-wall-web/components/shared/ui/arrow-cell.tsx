import {cn} from "@/lib/utils";
import {RiArrowLeftLine, RiArrowRightLine, RiArrowUpLine} from "@remixicon/react";
import {Cell} from "@/components/shared/ui/cell";

type Direction = "left" | "forward" | "right"

interface Props {
    direction: string
    className?: string;
}

const directionMap: Record<Direction, React.ReactNode> = {
    left: <RiArrowLeftLine className='w-full h-full'/>,
    forward: <RiArrowUpLine className='w-full h-full'/>,
    right: <RiArrowRightLine className='w-full h-full'/>,
}

export const ArrowCell = ({direction, className}: Props) => (
    <Cell className={cn(className, 'bg-red-800')}>
        {directionMap[direction as Direction]}
    </Cell>
)