import Image from "next/image";
import {Cell} from "@/components/shared/ui/cell";

interface Props {
    item?: string;
    key?: number;
}

export const ImageCell = ({item, key}: Props) => {
    return (
        <Cell className='bg-white' key={key}>
            {item && <Image width={24} height={24} src={item} alt={''}/>}
        </Cell>
    )
}