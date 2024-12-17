import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/index'
import ClassCard from '../../../components/ClassCard'
import * as s from './styles'

const PendingPage = () => {
    // 모집 공고로 이동
    const handleHrefToApply = () => {
        window.open(
            'http://support.ewha.ac.kr/support/board/notice.do?mode=view&articleNo=15390&article.offset=0&articleLimit=10',
            '_blank'
        )
    }

    // 다음 페이지로 이동
    const navigate = useNavigate()
    const handleHrefToNext = () => {
        navigate('/wing/apply')
    }
    return (
        <>
            <s.Container>
                <s.Wrapper>
                    <s.Title>
                        이화나래벗으로
                        <br />
                        활동 가능한 시간이
                        <br />
                        지금은 존재하지 않아요
                    </s.Title>
                    <s.RecommendBox>
                        <s.Title>
                            그렇지만,
                            <br />
                            <s.Highlight>이화연</s.Highlight>벗의 도움이
                            <br />
                            절실히 필요한 수업이 있어요
                        </s.Title>
                        <ClassCard />
                        <s.ButtonContainer>
                            <Button
                                width={20.94}
                                height={3.38}
                                padding={0}
                                rad={8}
                                font={1.25}
                                bg={'var(--blue-strong)'}
                                color={'#fff'}
                                marginBottom={0.63}
                                func={handleHrefToApply}
                            >
                                지금 바로 신청하기
                            </Button>
                            <Button
                                width={20.94}
                                height={3.38}
                                padding={0}
                                rad={8}
                                font={1.25}
                                bg={'#fff'}
                                color={'var(--blue-strong)'}
                                border={'var(--blue-strong)'}
                                marginBottom={0}
                                func={handleHrefToNext}
                            >
                                조금 더 둘러볼게요
                            </Button>
                        </s.ButtonContainer>
                    </s.RecommendBox>
                </s.Wrapper>
            </s.Container>
        </>
    )
}

export default PendingPage
