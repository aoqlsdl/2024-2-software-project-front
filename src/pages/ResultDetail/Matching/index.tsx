import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import ClassCard from '../../../components/ClassCard'
import Button from '../../../components/Button/index'
import * as s from './styles'
import { dataState } from '../../../recoil/dataState'
import { userState } from '../../../recoil/userState'
import { http } from '../../../lib/api/client'

const MatchingPage = () => {
    const formData = useRecoilValue(dataState)
    const userInfo = useRecoilValue(userState)
    const [result, setResult] = useState(null) // 응답 데이터
    const [error, setError] = useState<string | null>(null) // 에러 메시지

    useEffect(() => {
        const fetchResult = async () => {
            try {
                const response = await http.post('/match/course', formData) // 서버로 데이터 전송
                setResult(response.data) // 서버 응답 데이터를 상태에 저장
                console.log(response.data)
                setError(null) // 이전 에러 초기화
            } catch (err) {
                console.error('Error fetching result:', err)
                setError('결과를 가져오는 데 실패했습니다. 다시 시도해주세요.') // 에러 메시지 설정
            }
        }

        fetchResult()
    }, [formData])

    // 스크롤 위치에 따라 버튼 보이기
    const [showFixedButton, setShowFixedButton] = useState(true)

    const handleScroll = () => {
        const position = window.scrollY
        setShowFixedButton(position < 160)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // 모집 공고로 이동
    const handleHref = () => {
        window.open(
            'http://support.ewha.ac.kr/support/board/notice.do?mode=view&articleNo=15390&article.offset=0&articleLimit=10',
            '_blank'
        )
    }
    return (
        <>
            <s.Container>
                <s.Wrapper>
                    <s.Title>
                        <s.Highlight>{userInfo.name || '알수없음'}</s.Highlight>
                        벗이 날개를 달아줄 수
                        <br />
                        있는 수업이에요
                    </s.Title>
                    {result ? (
                        <ClassCard data={result} /> // 서버 응답 데이터를 ClassCard 컴포넌트에 전달
                    ) : (
                        !error && <p>결과를 불러오는 중입니다...</p> // 로딩 상태
                    )}

                    <s.Title>
                        이화나래벗이 되면
                        <br />
                        이런 장점이 있어요
                    </s.Title>
                    <s.BenefitCard>
                        <s.Desc>
                            <s.Icon src="/icons/money.webp" />
                            <s.Benefit>
                                든든한 국가근로장학금을 <br />
                                수혜받을 수 있어요
                            </s.Benefit>
                        </s.Desc>
                        <s.Desc>
                            <s.Icon src="/icons/grade.webp" />
                            <s.Benefit>
                                사회봉사활동 인증제 또는 사회봉사 학점으로
                                인정받을 수 있어요
                            </s.Benefit>
                        </s.Desc>
                        <s.Desc>
                            <s.Icon src="/icons/certification.webp" />
                            <s.Benefit>
                                장애학생 교육지원활동 증명서를
                                <br />
                                발급받을 수 있어요
                            </s.Benefit>
                        </s.Desc>
                        <s.Desc>
                            <s.Icon src="/icons/friendship.webp" />
                            <s.Benefit>
                                새로운 인연을 만나
                                <br />더 넓은 세상을 배울 수 있어요
                            </s.Benefit>
                        </s.Desc>
                    </s.BenefitCard>
                    <s.Title>
                        지금, 이화나래벗이
                        <br />
                        되어주세요!
                    </s.Title>
                    <s.FixedButton>
                        <Button
                            width={20.94}
                            rad={8}
                            font={1.25}
                            color={'#fff'}
                            bg={'var(--blue-strong)'}
                            func={handleHref}
                        >
                            바로 신청하기
                        </Button>
                    </s.FixedButton>
                    {showFixedButton && (
                        <s.ButtonContainer>
                            <Button
                                width={20.94}
                                rad={8}
                                font={1.25}
                                color={'#fff'}
                                bg={'var(--blue-strong)'}
                                func={handleHref}
                            >
                                바로 신청하기
                            </Button>
                        </s.ButtonContainer>
                    )}
                </s.Wrapper>
            </s.Container>
        </>
    )
}

export default MatchingPage
