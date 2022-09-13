import GridStyle from '@/styles/Layout/grid.style';
import { buttonKeys } from '../../constants/ButtonKeys';
import { Button } from '@/Layout/Button';

interface IGridProps {
    onClick: (e:string) => void
}

export const Grid = ({onClick}:IGridProps) => {
    return (
        <GridStyle>
            {
            buttonKeys.map((button:any, i:any) => {
                return <Button 
                    key={i} 
                    onClick={onClick}
                    equal={button.equal ?? false}
                    color={button.color}
                    hoverColor={button.hoverColor}
                    value={button.value}
                />
            })
            }
        </GridStyle>
    )

}