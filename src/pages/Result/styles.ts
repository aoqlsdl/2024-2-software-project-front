import styled from 'styled-components'

interface ContainerProps {
    bg: string
}
export const Container = styled.div<ContainerProps>`
    width: 100vw;
    max-width: 480px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-image: url(${props => props.bg});
    background-size: cover;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 5.44rem auto 3.38rem;
`

export const Title = styled.div`
    margin-left: 1.25rem;
    font-size: 1.75rem;
    font-weight: 700;
`

export const Highlight = styled.span`
    color: var(--blue-strong);
    font-weight: 700;
`

export const ButtonContainer = styled.div`
    width: 100%;
    max-width: 480px;
    display: flex;
    justify-content: center;
    position: fixed;
    left: 50%;
    bottom: 3.38rem;
    transform: translate(-50%, 0);
`
