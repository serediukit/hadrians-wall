import {cn} from "@/lib/utils";

interface Props {
    className?: string,
    children?: React.ReactNode
}

export const SellTitle: React.FC<Props> = ({className, children}) => {
    return (
        <div className={cn(className, 'flex flex-row items-center gap-1 bg-amber-100 p-2 -m-2 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,0_100%)]')}>
            {children}
        </div>
    )
}