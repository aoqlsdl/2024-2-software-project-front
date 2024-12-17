import * as s from './styles'

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <s.Container>
                <s.Wrapper>{children}</s.Wrapper>
            </s.Container>
        </>
    )
}

export default Layout
