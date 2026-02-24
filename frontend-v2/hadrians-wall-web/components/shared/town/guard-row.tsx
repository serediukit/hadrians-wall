import {SellTitle} from "@/components/shared/ui/sell-title";
import {ProgressiveCell} from "@/components/shared/ui/progressive-cell";
import {resCohort, resHelmet, resSoldier, resSword} from "@/public/const";
import {IconsCell} from "@/components/shared/ui/icons-cell";
import {separator} from "@/components/shared/ui/icons-const";

export const GuardRow = () => {
    return (
        <div className='flex flex-row justify-between items-center gap-1'>
            <div className='ml-2'>
                <SellTitle className='w-20'>
                    <div className='flex flex-col text-[8px] font-bold'>
                        <p className='h-2.5'>GUARD</p>
                        <p className='h-2.5'>WALL</p>
                    </div>

                    <IconsCell items={[resSword, separator, resSoldier]}/>
                </SellTitle>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center px-2'>
                <ProgressiveCell><IconsCell items={[resCohort]}/></ProgressiveCell>
                <ProgressiveCell><IconsCell items={[resHelmet]}/></ProgressiveCell>
                <ProgressiveCell><IconsCell items={[resCohort]}/></ProgressiveCell>
                <ProgressiveCell/>
                <ProgressiveCell><IconsCell items={[resHelmet]}/></ProgressiveCell>
                <ProgressiveCell><IconsCell items={[resCohort]}/></ProgressiveCell>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center px-2'>
                <ProgressiveCell/>
                <ProgressiveCell><IconsCell items={[resHelmet]}/></ProgressiveCell>
                <ProgressiveCell><IconsCell items={[resCohort]}/></ProgressiveCell>
                <ProgressiveCell/>
                <ProgressiveCell><IconsCell items={[resHelmet]}/></ProgressiveCell>
                <ProgressiveCell><IconsCell items={[resCohort]}/></ProgressiveCell>
            </div>

            <div className='basis-1/3 flex flex-row justify-between items-center pl-2.5 pr-1'>
                <ProgressiveCell/>
                <ProgressiveCell><IconsCell items={[resHelmet]}/></ProgressiveCell>
                <ProgressiveCell><IconsCell items={[resCohort]}/></ProgressiveCell>
                <ProgressiveCell/>
                <ProgressiveCell><IconsCell items={[resHelmet]}/></ProgressiveCell>
                <ProgressiveCell><IconsCell items={[resCohort]}/></ProgressiveCell>
            </div>
        </div>
    )
}