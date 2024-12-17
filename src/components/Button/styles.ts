import styled from 'styled-components'

interface ContainerProps {
    width?: number
    height?: number
    marginBottom?: number
    padding?: number
    border?: string
    rad?: number
    font?: number
    color?: string
    bg?: string
}

export const Container = styled.button<ContainerProps>`
    -webkit-appearance: none;
    width: ${props => `${props.width}rem` || 'auto'};
    height: ${props => `${props.height}rem` || 'auto'};
    padding: ${props => `${props.padding}rem` || '0'};
    margin-bottom: ${props => `${props.marginBottom}rem` || '0'};
    border: ${props => (props.border ? `1px solid ${props.border}` : 'none')};
    border-radius: ${props => `${props.rad}px` || '0'};
    font-size: ${props => `${props.font}rem` || '1rem'};
    font-weight: 700;
    background-color: ${props => props.bg || 'transparent'};
    color: ${props => props.color || 'inherit'};
    text-align: center;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &.disabled {
        background-color: var(--gray-light);
        color: var(--gray-deep);
    }
`
