import * as s from './styles'
import Button from '../../../components/Button/index'
import WingCard from '../../../components/WingCard'

const WaitingPage = () => {
    // 구글닥스 링크로 이동
    const handleHref = () => {
        window.open(
            'https://docs.google.com/spreadsheets/d/1RNzpoV3QHrWIoDsOeeNs5YsD6Ob1ikxB/edit#gid=1411676538',
            '_blank'
        )
    }
    return (
        <>
            <s.Container>
                <s.Wrapper>
                    <s.Title>대기 신청이 완료되었어요</s.Title>
                    <s.Promotion>
                        지금, <s.Highlight>이화연</s.Highlight>벗의 도움을{' '}
                        <br />
                        기다리는 장애학생<s.Highlight>52명</s.Highlight>
                    </s.Promotion>
                    <Button
                        width={20.94}
                        height={3.38}
                        padding={0.94}
                        rad={8}
                        font={1.25}
                        bg={'var(--blue-strong)'}
                        color={'#fff'}
                        marginBottom={0.63}
                        func={handleHref}
                    >
                        도움이 필요한 교과목 살펴보기
                    </Button>
                </s.Wrapper>
                <s.ShareBox>
                    <s.Contents>
                        <s.Title className="share">
                            날개 유형을 벗들과
                            <br />
                            공유해보세요
                        </s.Title>
                        <s.WingCardContainer>
                            {/* todo: 결과에 따라 wingcard 보여주기 + 중복되는 로직이니까 메모이제이션 생각해보기 */}
                            <WingCard name={'푸른아라 나래'} />
                        </s.WingCardContainer>
                    </s.Contents>
                </s.ShareBox>
            </s.Container>
        </>
    )
}

export default WaitingPage
