import {MiningRow} from "@/components/shared/town/mining-row";
import {GuardRow} from "@/components/shared/town/guard-row";

export const TownWalls = () => {
    return (
        <div className='flex flex-col gap-8 py-2 pr-4'>
            <MiningRow/>
            <GuardRow/>
        </div>
    )
}