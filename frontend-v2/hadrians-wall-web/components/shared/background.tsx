interface BackgroundProps {
    className?: string;
    children?: React.ReactNode;
}

export const Background = ({className, children}: BackgroundProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}