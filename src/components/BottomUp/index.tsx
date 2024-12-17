import { ChangeEventHandler, useState, MouseEventHandler } from 'react'
import Button from '../Button/index'
import * as s from './styles'

interface TimeSlot {
    selectedDay: string
    startTime: string
    finishTime: string
}

interface Props {
    onClose: () => void
    onAddTime: (timeSlots: TimeSlot[]) => void
}

const BottomUp = ({ onClose, onAddTime }: Props) => {
    const handleBackgroundClick = () => {
        onClose() // Background 클릭 시 onClose 호출
    }

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation() // Container 클릭 이벤트가 Background까지 전파되지 않도록 방지
    }

    const weekdays = ['월요일', '화요일', '수요일', '목요일', '금요일']
    const startTimes = [
        '8:00',
        '9:30',
        '11:00',
        '12:30',
        '14:00',
        '15:30',
        '17:00',
    ]
    const finishTimes = [
        '9:30',
        '11:00',
        '12:30',
        '14:00',
        '15:30',
        '17:00',
        '18:30',
    ]

    const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([
        {
            selectedDay: weekdays[0],
            startTime: startTimes[0],
            finishTime: finishTimes[0],
        },
    ])

    const addTimeSlot = () => {
        setTimeSlots([
            ...timeSlots,
            {
                selectedDay: weekdays[0],
                startTime: startTimes[0],
                finishTime: finishTimes[0],
            },
        ])
    }

    const handleDayChange = (index: number, value: string) => {
        const newTimeSlots = [...timeSlots]
        if (newTimeSlots[index]) {
            newTimeSlots[index].selectedDay = value
            setTimeSlots(newTimeSlots)
        }
    }

    const handleStartChange = (index: number, value: string) => {
        const newTimeSlots = [...timeSlots]
        if (newTimeSlots[index]) {
            newTimeSlots[index].startTime = value
            setTimeSlots(newTimeSlots)
        }
    }

    const handleFinishChange = (index: number, value: string) => {
        const newTimeSlots = [...timeSlots]
        if (newTimeSlots[index]) {
            newTimeSlots[index].finishTime = value
            setTimeSlots(newTimeSlots)
        }
    }

    const saveTimeSlot = () => {
        if (timeSlots.length > 0) {
            onAddTime(timeSlots)
            onClose()
        }
    }

    return (
        <>
            <s.Background onClick={handleBackgroundClick}>
                <s.Container onClick={handleContainerClick}>
                    <s.ButtonGroup>
                        <Button
                            width={6.13}
                            height={2.25}
                            padding={0}
                            color={'var(--blue-strong)'}
                            bg={'#fff'}
                            font={1}
                            func={addTimeSlot}
                        >
                            + 시간 추가
                        </Button>
                        <Button
                            width={6.13}
                            height={2.25}
                            padding={0}
                            color={'var(--blue-strong)'}
                            bg={'#fff'}
                            font={1}
                            func={saveTimeSlot}
                        >
                            저장
                        </Button>
                    </s.ButtonGroup>
                    <s.TimeGroup>
                        {timeSlots.map((slot, index) => (
                            <s.SelectGroup key={index}>
                                <s.Select
                                    value={slot.selectedDay}
                                    onChange={e =>
                                        handleDayChange(index, e.target.value)
                                    }
                                >
                                    {weekdays.map((day, idx) => (
                                        <option key={idx} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </s.Select>
                                <s.SelectTime>
                                    <s.Time
                                        value={slot.startTime}
                                        onChange={e =>
                                            handleStartChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                    >
                                        {startTimes.map((time, idx) => (
                                            <option key={idx} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </s.Time>
                                    ~
                                    <s.Time
                                        value={slot.finishTime}
                                        onChange={e =>
                                            handleFinishChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                    >
                                        {finishTimes.map((time, idx) => (
                                            <option key={idx} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </s.Time>
                                </s.SelectTime>
                            </s.SelectGroup>
                        ))}
                    </s.TimeGroup>
                    <s.TimetableContainer>
                        <s.TimetableWrapper>
                            <s.Title>교시별 시간</s.Title>
                            <s.Timetable>
                                1교시 : 08:00-09:15
                                <br />
                                2교시 : 09:30-10:45
                                <br />
                                3교시 : 11:00-12:15
                                <br />
                                4교시 : 12:30-13:45
                                <br />
                                5교시 : 14:00-15:15
                            </s.Timetable>
                            <s.Timetable>
                                6교시 : 15:30-16:45
                                <br />
                                7교시 : 17:00-18:15
                                <br />
                                8교시 : 18:30-19:45
                                <br />
                                9교시 : 20:00-21:15
                            </s.Timetable>
                        </s.TimetableWrapper>
                    </s.TimetableContainer>
                </s.Container>
            </s.Background>
        </>
    )
}

export default BottomUp
