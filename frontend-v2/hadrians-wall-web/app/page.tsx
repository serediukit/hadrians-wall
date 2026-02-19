import {BoardTown} from "@/components/shared/board-town";
import {BoardPeoples} from "@/components/shared/board-peoples";
import {Background} from "@/components/shared/background";

export default function Page() {
    return (
        <Background className='flex h-screen bg-neutral-800'>
            <div className='flex flex-row justify-between m-auto'>
                <BoardTown/>
                <BoardPeoples/>
            </div>
        </Background>
    );
}