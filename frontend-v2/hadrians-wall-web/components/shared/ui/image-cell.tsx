import Image from "next/image";
import {Cell} from "@/components/shared/ui/cell";
import {cn} from "@/lib/utils";

interface Props {
    items?: string[];
    key?: number;
    variant?: string;
    isAvailable?: boolean;
    children?: React.ReactNode;
}

export const ImageCell = ({variant, items, key, isAvailable, children}: Props) => {
    isAvailable = true
    return (
        <Cell className={cn('flex flex-row bg-white', isAvailable ? 'hover:scale-120' : '')} key={key} variant={variant}>
            {items ? items.map((item, index) => (
                item && <Image width={24} height={24} src={item} key={index} alt=''/>
            )) : children}
        </Cell>
    )
}