interface BoardProps {
    imageUrl?: string
    children?: React.ReactNode;
}

export const Board = ({imageUrl, children}: BoardProps) => {
    return (
        <div className='relative h-200 w-200 m-2 outline-emerald-500 outline-4 rounded-2xl bg-cover bg-center bg-no-repeat shadow-lg'
             style={{backgroundImage: `url(${imageUrl})`}}
        >
            <div className='absolute inset-0 rounded-2xl bg-black/50'/> {/* temp solution for shadowing */}
            <div className='relative z-10'> {/* temp solution for shadowing */}
                {children}
            </div> {/* temp solution for shadowing */}
        </div>
    )
}