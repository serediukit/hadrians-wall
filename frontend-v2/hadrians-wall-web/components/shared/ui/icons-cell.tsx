import React from "react";
import {cn} from "@/lib/utils";
import {Icon} from "@/components/shared/ui/icons-const";

interface Props {
    items?: string[];
}

export const IconsCell = ({items}: Props) => {
    return (
        <div className={cn('flex flex-row items-center h-4.5')}>
            {items && items.map((item, index) => (
                item && <Icon icon={item} key={`${item}-${index}`}></Icon>
            ))}
        </div>
    )
}