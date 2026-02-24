import {SellTitle} from "@/components/shared/ui/sell-title";
import {ProgressiveCell} from "@/components/shared/ui/progressive-cell";
import {resPickaxe, resSlave, resStone} from "@/public/const";
import {IconsCell} from "@/components/shared/ui/icons-cell";

export const MiningRow = () => {
    return (
        <div className='flex flex-row justify-between items-center gap-1'>
            <div className='ml-2'>
                <SellTitle className='w-20'>
                    <div className='flex flex-col text-[8px] font-bold'>
                        <p className='h-2.5'>MINING &</p>
                        <p className='h-2.5'>FORESTING</p>
                    </div>

                    <IconsCell items={[resSlave]}/>
                </SellTitle>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center px-4'>
                <ProgressiveCell/>
                <ProgressiveCell variant='double'><IconsCell items={[resPickaxe, resStone]}/></ProgressiveCell>
                <ProgressiveCell/>
                <ProgressiveCell/>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center px-2'>
                <ProgressiveCell variant='double'><IconsCell items={[resPickaxe, resStone]}/></ProgressiveCell>
                <ProgressiveCell/>
                <ProgressiveCell/>
                <ProgressiveCell variant='double'><IconsCell items={[resPickaxe, resStone]}/></ProgressiveCell>
                <ProgressiveCell/>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center pl-2 pr-1'>
                <ProgressiveCell/>
                <ProgressiveCell variant='double'><IconsCell items={[resPickaxe, resStone]}/></ProgressiveCell>
                <ProgressiveCell/>
                <ProgressiveCell/>
                <ProgressiveCell variant='double'><IconsCell items={[resPickaxe, resStone]}/></ProgressiveCell>
            </div>
        </div>
    )
}