import styled from 'styled-components'

interface ProgressProps {
    percentage: number
}

export const Container = styled.div`
    width: fit-content;
    height: 0.75rem;
    margin: 4.19rem auto 0;
`

export const ProgressBox = styled.div`
    width: 21rem;
    height: 0.75rem;
    margin-bottom: 1.75rem;
    border-radius: 8px;
    background-color: var(--gray-light);
`

export const Progress = styled.div<ProgressProps>`
    width: ${props => props.percentage}%;
    height: 0.75rem;
    background-color: var(--blue-strong);
    border-radius: 8px;
    transition: width 0.5s ease-in-out;
`
