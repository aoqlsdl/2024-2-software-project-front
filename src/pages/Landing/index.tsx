import * as s from './styles'
import Modal from '../../components/Modal'
import Button from '../../components/Button/index'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Splash from '../../components/Splash'

const LandingPage = () => {
    // 스플래시
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)
    })

    // 모달
    const [isModalOpen, setModalOpen] = useState(true)

    // 모달 닫기
    const handleCloseModal = () => {
        setModalOpen(false)
    }

    // 모달 상태가 바뀔 때마다 스크롤 방지/허용 처리
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isModalOpen])

    // 정보 입력 페이지로 이동
    const navigate = useNavigate()

    const handleHref = () => {
        navigate('/step/1')
    }

    return (
        <>
            <s.Container>
                {isLoading ? (
                    <Splash onFadeout={() => setLoading(false)} />
                ) : (
                    <>
                        {isModalOpen ? (
                            <Modal onClose={handleCloseModal} />
                        ) : (
                            <></>
                        )}
                        <s.Wrapper>
                            <s.Contents>
                                <s.Title>
                                    날개가 되어 주실 벗들,
                                    <br />
                                    환영해요!
                                </s.Title>
                                <s.Content>
                                    <s.Head>이화나래벗이란?</s.Head>
                                    <s.Body>
                                        장애학생 교육활동 지원활동(이화나래벗)은
                                        장애학생의 원활한 대학생활 및 학업을
                                        지원하기 위해 수업대필, 이동지원,
                                        교재제작 등의 활동을 해요.
                                    </s.Body>
                                </s.Content>
                                <s.Content>
                                    <s.Head>
                                        이화나래벗이 되면 이런 장점이 있어요
                                    </s.Head>
                                    <s.BodyContainer>
                                        <s.Benefit>
                                            <s.Icon src="/icons/money.webp" />
                                            <s.Name>장학금</s.Name>
                                        </s.Benefit>
                                        <s.Benefit>
                                            <s.Icon src="/icons/grade.webp" />
                                            <s.Name>봉사학점</s.Name>
                                        </s.Benefit>
                                        <s.Benefit>
                                            <s.Icon src="/icons/certification.webp" />
                                            <s.Name>활동증명서</s.Name>
                                        </s.Benefit>
                                        <s.Benefit>
                                            <s.Icon src="/icons/friendship.webp" />
                                            <s.Name>새로운 인연</s.Name>
                                        </s.Benefit>
                                    </s.BodyContainer>
                                </s.Content>
                                <s.SubTitle>
                                    지금, 벗의 도움을 기다리는
                                    <br />
                                    장애학생 <s.HighLight>52</s.HighLight>명
                                </s.SubTitle>
                                <s.Promote>나는 어떤 날개가 될까?</s.Promote>
                                <Button
                                    width={20.94}
                                    marginBottom={3.38}
                                    rad={8}
                                    font={1.25}
                                    color={'#fff'}
                                    bg={'#0047ff'}
                                    func={handleHref}
                                >
                                    매칭 시작하기
                                </Button>
                            </s.Contents>
                        </s.Wrapper>
                    </>
                )}
            </s.Container>
        </>
    )
}

export default LandingPage
