import {SellTitle} from "@/components/shared/ui/sell-title";
import {CohortIcon} from "@/components/shared/ui/cohort-icon";
import {Cell} from "@/components/shared/ui/cell";
import {ImageCell} from "@/components/shared/ui/image-cell";
import {iconBlackRaven, iconKnightHelmet, iconPickaxe, iconStone} from "@/public/const";

export const GuardRow = () => {
    return (
        <div className='flex flex-row justify-between items-center gap-1'>
            <div className='ml-2'>
                <SellTitle className='w-21'>
                    <div className='flex flex-col text-[8px] font-bold'>
                        <p className='h-2.5'>GUARD</p>
                        <p className='h-2.5'>WALL</p>
                    </div>

                    <CohortIcon/>
                </SellTitle>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center px-2'>
                <ImageCell><CohortIcon/></ImageCell>
                <ImageCell items={[iconKnightHelmet]}/>
                <ImageCell><CohortIcon/></ImageCell>
                <ImageCell/>
                <ImageCell items={[iconKnightHelmet]}/>
                <ImageCell><CohortIcon/></ImageCell>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center px-2'>
                <ImageCell/>
                <ImageCell items={[iconKnightHelmet]}/>
                <ImageCell><CohortIcon/></ImageCell>
                <ImageCell/>
                <ImageCell items={[iconKnightHelmet]}/>
                <ImageCell><CohortIcon/></ImageCell>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center pl-2.5 pr-1'>
                <ImageCell/>
                <ImageCell items={[iconKnightHelmet]}/>
                <ImageCell><CohortIcon/></ImageCell>
                <ImageCell/>
                <ImageCell items={[iconKnightHelmet]}/>
                <ImageCell><CohortIcon/></ImageCell>
            </div>
        </div>
    )
}