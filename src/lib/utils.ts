/**
 * 전화번호를 (000-0000-0000) 형태로 포맷팅하는 함수
 * @param {string} value - 포맷팅할 전화번호
 * @returns {string} 포맷팅된 전화번호
 */
export const formatPhoneNumber = (value: string) => {
    // 숫자만 추출하고 최대 11자리까지만 허용
    const digits = value.replace(/\D/g, '').slice(0, 11)
    const match = digits.match(/^(\d{3})(\d{4})(\d{4})$/)
    if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`
    }
    return value
}

/**
 * 학번을 7자리 숫자 형태로 포맷팅하는 함수
 * @param {string} studentId - 포맷팅할 학번
 * @returns {string} 포맷팅된 학번
 */
export const formatStudentId = (studentId: string) => {
    // 학번에서 숫자가 아닌 모든 문자를 제거
    const digits = studentId.replace(/\D/g, '')

    // 숫자가 7자리를 초과하는 경우, 처음 7자리만 사용
    const formattedDigits = digits.slice(0, 7)

    // 숫자만 있는 문자열을 0000000 형태로 변환
    const formatted = `${formattedDigits}`

    return formatted
}

/**
 * 문자열로 표현된 시간을 시간 형식으로 포맷팅하는 삼수
 * @param {string} time - 포맷팅할 시간
 * @returns {Date} 포맷팅된 시간
 */
interface timeProps {
    time: string
}
export const formatTimeToMinutes = ({ time }: timeProps) => {
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 60 + minutes
}
