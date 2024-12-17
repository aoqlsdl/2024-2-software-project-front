import styled, { keyframes } from 'styled-components'

interface ContainerProps {
    fadeout: boolean
}

interface WrapperProps {
    bg: string
}

const fadeout = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

export const Container = styled.div<ContainerProps>`
    width: 100vw;
    height: 100vh;
    display: inline-block;
    animation: ${props =>
        props.fadeout ? `${fadeout} 1.5s ease-out forwards` : 'none'};
`

export const Wrapper = styled.div<WrapperProps>`
    max-width: 480px;
    height: 100vh;
    background-image: url(${props => props.bg});
    background-size: cover;
`

export const TextBox = styled.div`
    padding: 5.19rem 1.25rem;
`

export const Title = styled.div`
    font-size: 3rem;
    font-weight: 700;
`

export const Subtitle = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
`
