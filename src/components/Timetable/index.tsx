import { memo } from 'react'
import * as s from './styles'

interface SelectedTime {
    selectedDay: string
    startTime: string
    finishTime: string
}

interface TimetableProps {
    selectedTimes: SelectedTime[]
}

const classTimes = [
    { label: '1', startTime: '8:00', endTime: '9:30' },
    { label: '2', startTime: '9:30', endTime: '11:00' },
    { label: '3', startTime: '11:00', endTime: '12:30' },
    { label: '4', startTime: '12:30', endTime: '14:00' },
    { label: '5', startTime: '14:00', endTime: '15:30' },
    { label: '6', startTime: '15:30', endTime: '17:00' },
    { label: '7', startTime: '17:00', endTime: '18:30' },
    { label: '8', startTime: '18:30', endTime: '20:00' },
]

const Timetable = memo(({ selectedTimes }: TimetableProps) => {
    const days = ['월요일', '화요일', '수요일', '목요일', '금요일']

    const timeStringToMinutes = (time: string) => {
        const [hours, minutes] = time.split(':').map(Number)
        return hours * 60 + minutes
    }

    // 중첩된 배열을 평탄화
    const flattenedSelectedTimes = selectedTimes.flat()

    const isSelectedTime = (
        day: string,
        startTime: string,
        endTime: string
    ) => {
        return flattenedSelectedTimes.some(selectedTime => {
            if (!selectedTime.selectedDay || selectedTime.selectedDay !== day) {
                return false
            }

            const start = timeStringToMinutes(startTime)
            const end = timeStringToMinutes(endTime)
            const selectedStart = timeStringToMinutes(selectedTime.startTime)
            const selectedEnd = timeStringToMinutes(selectedTime.finishTime)
            const result = selectedStart < end && selectedEnd > start

            return result
        })
    }

    return (
        <s.Container>
            <s.StyledTable>
                <thead>
                    <tr>
                        <s.StyledTh></s.StyledTh>
                        {days.map(day => (
                            <s.StyledTh key={day}>{day[0]}</s.StyledTh>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {classTimes.map((classTime, index) => (
                        <tr key={index}>
                            <s.TimeLabel>{classTime.label}</s.TimeLabel>
                            {days.map(day => {
                                const isHighlighted = isSelectedTime(
                                    day,
                                    classTime.startTime,
                                    classTime.endTime
                                )
                                return (
                                    <s.StyledTd
                                        key={day}
                                        $isHighlighted={isHighlighted}
                                    />
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </s.StyledTable>
        </s.Container>
    )
})

export default Timetable
