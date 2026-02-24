import Image from "next/image";
import {Cell} from "@/components/shared/ui/cell";
import {cn} from "@/lib/utils";

interface Props {
    key?: number;
    variant?: string;
    isAvailable?: boolean;
    isDone?: boolean;
    children?: React.ReactNode;
}

export const ProgressiveCell = ({variant, key, isAvailable, isDone, children}: Props) => {
    isAvailable = true
    return (
        <div>
            <Cell className={cn('flex flex-row bg-white outline-1 outline-neutral-800', isAvailable && !isDone ? 'transition hover:scale-120 hover:outline-emerald-500' : '')} key={key} variant={variant}>
                {children}
            </Cell>
            {isDone && <>DONE</>}
        </div>
    )
}