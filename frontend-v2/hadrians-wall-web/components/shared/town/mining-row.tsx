import {SellTitle} from "@/components/shared/ui/sell-title";
import {CohortIcon} from "@/components/shared/ui/cohort-icon";
import {Cell} from "@/components/shared/ui/cell";
import {ImageCell} from "@/components/shared/ui/image-cell";
import {iconBlackRaven, iconKnightHelmet, iconPickaxe, iconStone} from "@/public/const";

export const MiningRow = () => {
    return (
        <div className='flex flex-row justify-between items-center gap-1'>
            <div className='ml-2'>
                <SellTitle className='w-21'>
                    <div className='flex flex-col text-[8px] font-bold'>
                        <p className='h-2.5'>MINING &</p>
                        <p className='h-2.5'>FORESTING</p>
                    </div>

                    <CohortIcon/>
                </SellTitle>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center px-4'>
                <ImageCell/>
                <ImageCell variant='double' items={[iconPickaxe, iconStone]}/>
                <ImageCell/>
                <ImageCell/>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center px-2'>
                <ImageCell variant='double' items={[iconPickaxe, iconStone]}/>
                <ImageCell/>
                <ImageCell/>
                <ImageCell variant='double' items={[iconPickaxe, iconStone]}/>
                <ImageCell/>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center pl-2 pr-1'>
                <ImageCell/>
                <ImageCell variant='double' items={[iconPickaxe, iconStone]}/>
                <ImageCell/>
                <ImageCell/>
                <ImageCell variant='double' items={[iconPickaxe, iconStone]}/>
            </div>
        </div>
    )
}