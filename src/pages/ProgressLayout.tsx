import * as s from './styles'

interface Props {
    children: React.ReactNode
    progressBar: React.ReactNode
}
const ProgressLayout = ({ children, progressBar }: Props) => {
    return (
        <>
            <s.Container>
                {progressBar} {/* `/step/*` 페이지에서만 렌더링 */}
                <s.Wrapper className="progress">{children}</s.Wrapper>
            </s.Container>
        </>
    )
}

export default ProgressLayout
