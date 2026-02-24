import React, {Attributes} from "react";
import Image from "next/image";
import {RiUserFill} from "@remixicon/react";
import * as consts from "@/public/const";
import {Separator} from "@/components/shared/ui/separator";
import {CohortIcon} from "@/components/shared/ui/cohort-icon";
import {RemixIcon} from "@/components/shared/ui/remix-icon-wrapper";

const iconSize: number = 18

export const separator: string = 'separator'

const Icons: Record<string, React.ReactNode> = {
    [consts.resSlave]: <RemixIcon><RiUserFill size={iconSize} color={consts.colorSlave}/></RemixIcon>,
    [consts.resSoldier]: <RemixIcon><RiUserFill size={iconSize} color={consts.colorSoldier}/></RemixIcon>,

    [consts.resCohort]: <CohortIcon/>,

    [consts.resRaven]: <Image height={iconSize} width={iconSize} src={consts.iconBlackRaven} alt=''/>,
    [consts.resHelmet]: <Image height={iconSize} width={iconSize} src={consts.iconKnightHelmet} alt=''/>,

    [consts.resPickaxe]: <Image height={iconSize} width={iconSize} src={consts.iconPickaxe} alt=''/>,
    [consts.resSword]: <Image height={iconSize} width={iconSize} src={consts.iconSword} alt=''/>,

    [consts.resStone]: <Image height={iconSize} width={iconSize} src={consts.iconStone} alt=''/>,

    separator: <Separator/>
}

type Props = {
    icon: string,
    props?: Attributes,
}

export const Icon = ({icon, props}: Props) => {
    const ic = Icons[icon]

    return (
        ic && React.cloneElement(Icons[icon] as React.ReactElement, props)
    )
}