import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * 화면 전환될 때마다 스크롤을 화면 최상단으로 이동시키는 함수
 */
const useScrollToTop = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname]) // 페이지 경로가 변경될 때마다 실행
}

export default useScrollToTop
