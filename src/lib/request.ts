import { http } from './api/client' // http 인스턴스 가져오기

export const sendWingRequest = async (data: any) => {
    const response = await http.post('/match/course', data)
    return response.data
}
