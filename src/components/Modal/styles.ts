import styled from 'styled-components'

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
`

export const Container = styled.div`
    width: 19.63rem;
    height: 31.69rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    border-radius: 8px;
    background-color: #fff;
`

export const Wrapper = styled.div`
    margin: 1.25rem;
`

export const Title = styled.div`
    width: 17.13rem;
    height: 3.63rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.81rem;
`

export const BtnGroup = styled.div`
    width: fit-content;
    height: 7.38rem;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    align-content: space-between;
`
