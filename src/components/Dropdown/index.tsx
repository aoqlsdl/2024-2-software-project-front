import * as s from './styles'
import { useEffect, useState, useCallback } from 'react'
import majorsData from '../../mock/major.json'

interface MajorData {
    colleges: College[]
}

interface College {
    name: string
    departments: string[]
    majors?: {
        [key: string]: string[]
    }
}

interface Props {
    onSelectionChange: (
        selectedCollege: string,
        selectedDepartment: string,
        selectedMajor: string
    ) => void
}

const Dropdown = ({ onSelectionChange }: Props) => {
    const [selectedCollege, setSelectedCollege] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState('')
    const [selectedMajor, setSelectedMajor] = useState('')
    const [departments, setDepartments] = useState<string[]>([])
    const [majors, setMajors] = useState<string[]>([])

    // 대학 선택 시 학과/부서 업데이트
    useEffect(() => {
        if (selectedCollege) {
            const college = (majorsData as MajorData).colleges.find(
                college => college.name === selectedCollege
            )
            if (college) {
                setDepartments(college.departments || [])
                setMajors([]) // 학과 변경 시 majors 초기화
                setSelectedDepartment('')
                setSelectedMajor('')
            }
        }
    }, [selectedCollege])

    // 학과 선택 시 전공 업데이트
    useEffect(() => {
        if (selectedDepartment) {
            const college = (majorsData as MajorData).colleges.find(college =>
                college.departments.includes(selectedDepartment)
            )
            if (
                college &&
                college.majors &&
                college.majors[selectedDepartment]
            ) {
                setMajors(college.majors[selectedDepartment])
            } else {
                setMajors([])
            }
            setSelectedMajor('')
        }
    }, [selectedDepartment])

    // 대학, 학과, 전공 선택 상태가 변경될 때마다 상위 컴포넌트에 알림
    useEffect(() => {
        onSelectionChange(selectedCollege, selectedDepartment, selectedMajor)
    }, [selectedCollege, selectedDepartment, selectedMajor])

    const handleCollegeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCollege(e.target.value)
    }

    const handleDepartmentChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedDepartment(e.target.value)
    }

    const handleMajorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMajor(e.target.value)
    }

    return (
        <>
            <s.Container>
                <s.Select
                    value={selectedCollege}
                    onChange={handleCollegeChange}
                >
                    <option value="">단과대학</option>
                    {majorsData.colleges.map((college, index) => (
                        <option key={index} value={college.name}>
                            {college.name}
                        </option>
                    ))}
                </s.Select>

                <s.Select
                    value={selectedDepartment}
                    onChange={handleDepartmentChange}
                    disabled={!selectedCollege}
                >
                    <option value="">학부</option>
                    {departments.map((department, index) => (
                        <option key={index} value={department}>
                            {department}
                        </option>
                    ))}
                </s.Select>

                {majors.length > 0 && (
                    <s.Select
                        value={selectedMajor}
                        onChange={handleMajorChange}
                    >
                        <option value="">전공</option>
                        {majors.map((major, index) => (
                            <option key={index} value={major}>
                                {major}
                            </option>
                        ))}
                    </s.Select>
                )}
            </s.Container>
        </>
    )
}

export default Dropdown
