import GridStyle from './Grid.styled';
import { buttonKeys } from '../../constants/ButtonKeys';
import Button from '../Button';

interface IGridProps {
    onClick: (e:string) => void
}

const Grid = ({onClick}:IGridProps) => {
    return <GridStyle>
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
}
export default Grid;