import {Board} from "@/components/shared/board";

interface BoardTownProps {
    className?: string;
}

export const BoardTown = ({className}: BoardTownProps) => {
    return (
        <Board imageUrl={'/1.jpeg'}>
        </Board>
    )
}