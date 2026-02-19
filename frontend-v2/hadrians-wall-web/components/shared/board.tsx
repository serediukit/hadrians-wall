import {cn} from "@/lib/utils";

interface BoardProps {
    imageUrl?: string
    children?: React.ReactNode;
}

export const Board = ({imageUrl, children}: BoardProps) => {
    return (
        <div className='h-200 w-200 m-2 outline-emerald-500 outline-4'
             style={{backgroundImage: `url(${imageUrl})`}}
        >
            {children}
        </div>
    )
}