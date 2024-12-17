import * as s from './styles'

interface BestMatch {
    Credit: number
    classDate: string
    classDept: string
    classLocation: string
    className: string
    classNum: number
    classOnline: string
    classTime: number
    disType: string
    haksuNum: string
    helpAlert: string
    helpMove: string
    helpParticipate: string
    helpTeach: string
    helpType: string
    profName: string
    result: string
    studentNum: number
    subjectArea: string
    subjectArea2: string
}

interface Props {
    data: {
        best_match: BestMatch
        match_probability: number
    }
}

const ClassCard = ({ data }: Props) => {
    const { best_match: match, match_probability: probability } = data

    return (
        <>
            <s.Container>
                <s.Wrapper>
                    <s.Title>{match.className}</s.Title>
                    <s.CourseBox>
                        <s.InfoBox>
                            <s.InfoContent>
                                <s.InfoTitle>학수번호</s.InfoTitle>
                                <s.InfoDesc>{match.haksuNum}</s.InfoDesc>
                            </s.InfoContent>
                            <s.InfoContent>
                                <s.InfoTitle>교수</s.InfoTitle>
                                <s.InfoDesc>{match.profName}</s.InfoDesc>
                            </s.InfoContent>
                            <s.InfoContent>
                                <s.InfoTitle>학점</s.InfoTitle>
                                <s.InfoDesc>{match.Credit}</s.InfoDesc>
                            </s.InfoContent>
                            <s.InfoContent>
                                <s.InfoTitle>시간</s.InfoTitle>
                                <s.InfoDesc>{match.classTime}</s.InfoDesc>
                            </s.InfoContent>
                            <s.InfoContent>
                                <s.InfoTitle>교시</s.InfoTitle>
                                <s.InfoDesc>{match.classDate}</s.InfoDesc>
                            </s.InfoContent>
                            <s.InfoContent>
                                <s.InfoTitle>강의실</s.InfoTitle>
                                <s.InfoDesc>{match.classLocation}</s.InfoDesc>
                            </s.InfoContent>
                        </s.InfoBox>
                    </s.CourseBox>
                    <s.StudentBox>
                        <s.InfoContent>
                            <s.InfoTitle>장애유형</s.InfoTitle>
                            <s.InfoDesc>{match.disType}</s.InfoDesc>
                        </s.InfoContent>
                        <s.InfoContent>
                            <s.InfoTitle>도움 유형</s.InfoTitle>
                            <s.InfoDesc>{match.helpType}</s.InfoDesc>
                        </s.InfoContent>
                    </s.StudentBox>
                </s.Wrapper>
            </s.Container>
        </>
    )
}

export default ClassCard
