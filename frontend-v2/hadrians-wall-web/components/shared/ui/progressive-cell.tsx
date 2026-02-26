import {Cell} from "@/components/shared/ui/cell";
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
    key?: number;
    isAvailable?: boolean;
    isDone?: boolean;
    children?: React.ReactNode;
}

export const ProgressiveCell = ({className, key, isAvailable, isDone, children}: Props) => {
    isAvailable = true
    return (
        <div>
            <Cell
                className={cn(
                    'flex flex-row bg-white outline-1 outline-neutral-800',
                    (isAvailable && !isDone) ? 'transition hover:scale-120 hover:outline-emerald-500' : '',
                    className
                )}
                key={key}>
                {children}
            </Cell>
            {isDone && <p>DONE</p>}
        </div>
    )
}