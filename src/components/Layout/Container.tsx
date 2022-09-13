import ContainerStyle from '@/styles/Layout/container.style';

export const Container:React.FC<any> = ({children}) => {
    return <ContainerStyle>{children}</ContainerStyle>
}