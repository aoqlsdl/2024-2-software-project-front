import * as s from './styles'

interface perProps {
    percentage: number
}

const Progressbar = ({ percentage }: perProps) => {
    return (
        <>
            <s.Container>
                <s.ProgressBox>
                    <s.Progress percentage={percentage}></s.Progress>
                </s.ProgressBox>
            </s.Container>
        </>
    )
}

export default Progressbar
