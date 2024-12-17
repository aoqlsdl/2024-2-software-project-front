import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as s from './styles'
import Loading from '../../components/Loading'
import Button from '../../components/Button/index'
import wingData from '../../mock/wings.json'

const ResultPage = () => {
    // @todo api 불러오기
    const wing = '푸른아라 나래'
    const bg = wingData[wing].bg_image

    // 로딩 상태관리
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 5000) // 5초 후에 isLoading을 false로 설정

        return () => clearTimeout(timer)
    }, [])

    // 결과 상세 페이지로 이동
    const navigate = useNavigate()

    const handleHref = () => {
        navigate('/wing/detail')
    }

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <s.Container bg={bg}>
                    <s.Wrapper>
                        <s.Title>
                            <s.Highlight>이화연</s.Highlight>벗에게 어울리는
                            <br />
                            날개는 <s.Highlight>{`${wing}`}</s.Highlight>에요
                        </s.Title>

                        <s.ButtonContainer>
                            <Button
                                width={20.94}
                                rad={8}
                                font={1.25}
                                color={'#fff'}
                                bg={'var(--blue-strong)'}
                                func={handleHref}
                            >
                                자세히 보기
                            </Button>
                        </s.ButtonContainer>
                    </s.Wrapper>
                </s.Container>
            )}
        </>
    )
}

export default ResultPage
