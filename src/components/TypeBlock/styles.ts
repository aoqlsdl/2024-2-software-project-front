import styled, { css } from 'styled-components'

interface ContainerProps {
    isselected: boolean
}
export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 6.25rem;
    margin-bottom: 0.75rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--gray-light);
    border-radius: 8px;
    cursor: pointer;

    ${props =>
        props.isselected &&
        css`
            background-color: var(--green-light);
            border: 2px solid var(--blue-strong);
        `}
`

export const Content = styled.div`
    width: 13.69rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 700;
`

export const Desc = styled.div`
    font-size: 0.88rem;
    line-height: 1.06rem;
    white-space: pre-wrap;
`

export const Img = styled.img`
    width: 3.75rem;
    height: 3.75rem;
`
