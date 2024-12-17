import { useRef } from 'react'
import * as s from './styles'
import InfoCard from '../InfoCard/index'
import Button from '../Button/index'

interface Props {
    onClose: () => void
}
const Modal = ({ onClose }: Props) => {
    const backgroundRef = useRef<HTMLDivElement>(null)

    // 모달 닫기
    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === backgroundRef.current) {
            onClose()
        }
    }

    // 모집 공고로 이동
    const handleHref = () => {
        window.open(
            'http://support.ewha.ac.kr/support/board/notice.do?mode=view&articleNo=15390&article.offset=0&articleLimit=10',
            '_blank'
        )
    }

    return (
        <>
            <s.Background ref={backgroundRef} onClick={handleClose}>
                <s.Container>
                    <s.Wrapper>
                        <s.Title>
                            당신의 도움이 절실한
                            <br />
                            벗에게 날개를 달아주세요!
                        </s.Title>
                        <InfoCard />
                        <s.BtnGroup>
                            <Button
                                width={17.13}
                                height={3.38}
                                rad={8}
                                bg={'#0047ff'}
                                font={1.25}
                                color={'#fff'}
                                func={handleHref}
                            >
                                바로 신청하기
                            </Button>
                            <Button
                                width={17.13}
                                height={3.38}
                                border={'#0047ff'}
                                rad={8}
                                bg={'#fff'}
                                font={1.25}
                                color={'#0047ff'}
                                func={onClose}
                            >
                                조금 더 찾아볼게요
                            </Button>
                        </s.BtnGroup>
                    </s.Wrapper>
                </s.Container>
            </s.Background>
        </>
    )
}

export default Modal
