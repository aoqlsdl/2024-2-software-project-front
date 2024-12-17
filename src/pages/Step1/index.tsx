import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import * as s from './styles'
import Button from '../../components/Button/index'
import Dropdown from '../../components/Dropdown'
import { formatStudentId } from '../../lib/utils'
import { dataState } from '../../recoil/dataState'
import { userState } from '../../recoil/userState'

interface InfoProps {
    major: string
}

const FirstStepPage = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useRecoilState(dataState)
    const [userInfo, setUserInfo] = useRecoilState(userState)
    const [studentId, setStudentId] = useState('')
    const [name, setName] = useState('')
    const [primaryMajor, setPrimaryMajor] = useState<InfoProps>({
        major: '',
    })
    const [majors, setMajors] = useState<InfoProps[]>([])
    const [isButtonEnabled, setButtonEnabled] = useState(false)

    // 버튼 활성화 상태 업데이트
    useEffect(() => {
        const isFormValid =
            userInfo.name.trim() !== '' &&
            userInfo.studentId.trim() !== '' &&
            formData.major.trim() !== ''
        setButtonEnabled(isFormValid)
    }, [userInfo, formData])

    // 이름 입력 핸들러
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo(prev => ({ ...prev, name: e.target.value }))
    }

    // 학번 입력 핸들러
    const handleStudentIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatStudentId(e.target.value)
        setUserInfo(prev => ({ ...prev, studentId: formatted }))
    }

    // 주전공 변경 핸들러
    const handleMajorChange = useCallback(
        (selectedMajor: string) => {
            setFormData({ ...formData, major: selectedMajor })
        },
        [formData, setFormData]
    )

    // 부/복수전공 추가 핸들러
    const handleAddDoubleMajor = useCallback(() => {
        setFormData({
            ...formData,
            doubleMajorList: [...formData.doubleMajorList, { major: '' }],
        })
    }, [formData, setFormData])

    // 부/복수전공 삭제 핸들러
    const handleRemoveDoubleMajor = (index: number) => {
        setFormData({
            ...formData,
            doubleMajorList: formData.doubleMajorList.filter(
                (_, idx) => idx !== index
            ),
        })
    }

    // 부/복수전공 선택 변경 핸들러
    const handleDoubleMajorChange = (index: number, selectedMajor: string) => {
        const updatedDoubleMajorList = [...formData.doubleMajorList]
        updatedDoubleMajorList[index] = { major: selectedMajor }
        setFormData({
            ...formData,
            doubleMajorList: updatedDoubleMajorList,
        })
    }

    const handleSelectionChange = useCallback(
        (selectedMajor: string) => {
            setPrimaryMajor({ major: selectedMajor })
            const isFormValid = name.trim() !== '' && studentId.trim() !== ''
            setButtonEnabled(isFormValid)
        },
        [name, studentId]
    )

    return (
        <>
            <s.Container>
                <s.Wrapper>
                    <s.StudentInfo>
                        <s.Title>
                            먼저, 벗에 대해
                            <br />
                            알려주세요
                        </s.Title>
                        <s.InputBox className="student-name">
                            <s.Category>이름</s.Category>
                            <s.Input
                                value={userInfo.name}
                                onChange={handleNameChange}
                            />
                        </s.InputBox>
                        <s.InputBox>
                            <s.Category>학번</s.Category>
                            <s.Input
                                value={userInfo.studentId}
                                onChange={handleStudentIdChange}
                            />
                        </s.InputBox>
                        <s.Regex>
                            *7자리 숫자로 입력해 주세요.(예 : 2321001)
                        </s.Regex>
                    </s.StudentInfo>
                    <s.MajorInfo>
                        <s.SubTitle>주전공</s.SubTitle>
                        <Dropdown onSelectionChange={handleMajorChange} />
                    </s.MajorInfo>

                    {/* 부/복수전공 동적 렌더링 */}
                    {formData.doubleMajorList.map((item, index) => (
                        <s.MajorInfo key={index}>
                            <s.Header>
                                <s.SubTitle>부/복수전공 {index + 1}</s.SubTitle>
                                <s.ButtonBox>
                                    <s.AddButton
                                        onClick={() =>
                                            handleRemoveDoubleMajor(index)
                                        }
                                    >
                                        ➖ 전공 삭제하기
                                    </s.AddButton>
                                </s.ButtonBox>
                            </s.Header>
                            <Dropdown
                                onSelectionChange={selectedMajor =>
                                    handleDoubleMajorChange(
                                        index,
                                        selectedMajor
                                    )
                                }
                            />
                        </s.MajorInfo>
                    ))}

                    <s.MajorInfo>
                        <s.Header>
                            <s.SubTitle>부/복수전공</s.SubTitle>
                            <s.ButtonBox>
                                <s.AddButton onClick={handleAddDoubleMajor}>
                                    ✚ 전공 추가하기
                                </s.AddButton>
                            </s.ButtonBox>
                        </s.Header>
                    </s.MajorInfo>
                    <s.ButtonContainer>
                        <Button
                            width={20.94}
                            rad={8}
                            font={1.25}
                            color={'var(--blue-strong)'}
                            bg={'var(--blue-mute)'}
                            func={() => navigate('/step/2')}
                            disabled={!isButtonEnabled}
                        >
                            다음
                        </Button>
                    </s.ButtonContainer>
                </s.Wrapper>
            </s.Container>
        </>
    )
}

export default FirstStepPage
