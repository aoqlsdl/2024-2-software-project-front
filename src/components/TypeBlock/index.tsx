import * as s from './styles'

interface typeProps {
    title: string
    desc: string
    img: string
    onSelectChange: () => void
    isSelected: boolean
}

const TypeBlock = ({
    title,
    desc,
    img,
    onSelectChange,
    isSelected,
}: typeProps) => {
    return (
        <>
            <s.Container onClick={onSelectChange} isselected={isSelected}>
                <s.Content>
                    <s.Title>{title}</s.Title>
                    <s.Desc>{desc}</s.Desc>
                </s.Content>
                <s.Img src={img} />
            </s.Container>
        </>
    )
}

export default TypeBlock
