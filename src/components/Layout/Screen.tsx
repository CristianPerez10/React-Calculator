import ScreenStyle from "@/styles/Layout/screen.style"

export const Screen:React.FC<any> = ({children}) => {
    return <ScreenStyle>{children}</ScreenStyle>
}