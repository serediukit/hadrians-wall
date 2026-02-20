import {Board} from "@/components/shared/board";
import {CohortList} from "@/components/shared/town/cohort-list";
import {Cell} from "@/components/shared/ui/cell";

interface BoardTownProps {
    className?: string;
}

export const BoardTown = ({className}: BoardTownProps) => {
    return (
        <Board imageUrl={'/town.png'}>
            <CohortList/>
        </Board>
    )
}