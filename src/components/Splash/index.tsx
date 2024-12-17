import { useState, useEffect } from 'react'
import * as s from './styles'

interface Props {
    onFadeout: () => void
}
const Splash = ({ onFadeout }: Props) => {
    // 애니메이션 상태 관리
    const [fadeout, setFadeout] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeout(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    // 애니메이션 종료
    const handleAnimationEnd = () => {
        if (fadeout) {
            onFadeout()
        }
    }
    return (
        <>
            <s.Container fadeout={fadeout} onAnimationEnd={handleAnimationEnd}>
                <s.Wrapper bg={'/imgs/bg_splash.webp'}>
                    <s.TextBox>
                        <s.Title>도움배움</s.Title>
                        <s.Subtitle>나만의 이화나래 찾아보기</s.Subtitle>
                    </s.TextBox>
                </s.Wrapper>
            </s.Container>
        </>
    )
}

export default Splash
