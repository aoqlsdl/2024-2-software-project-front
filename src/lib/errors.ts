import { useNavigate } from 'react-router'

const handleAxiosError = e => {
    const navigate = useNavigate()
    const { code, message } = e.detail
    if (code === 404) {
        navigate('/wing/recommend') // 404 에러 시 리다이렉트
    } else {
        console.error(message) // 다른 에러 메시지를 콘솔에 출력
    }
}
