import styled from 'styled-components'

export const Container = styled.div`
    max-width: 480px;
    height: 100vh;
    margin: 0 auto;
    background-color: #fff;
`

export const Wrapper = styled.div`
    width: 21rem;
    max-width: 480px;
    margin: 0 auto;
`

export const Contents = styled.div`
    // margin-left: 1.25rem;
`

export const Title = styled.div`
    margin-top: 4.19rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.38rem;
`

export const SubTitle = styled.div`
    margin-top: 4.19rem;
    font-weight: 700;
    font-size: 1.5rem;
`

export const DescCard = styled.div`
    width: 20.94rem;
    // padding: 1rem 0.81rem;

    &:nth-child(2) {
        margin-top: 1.25rem;
    }

    &:nth-child(3) {
        margin-top: 3.19rem;
    }
`

export const Content = styled.div`
    width: 21rem;
    padding: 1rem 0;
`

export const Head = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0.63rem;
`

export const Body = styled.div`
    width: 19rem;
    padding: 1rem;
    border-radius: 8px;
    background: rgba(238, 255, 170, 0.5);
    font-size: 1rem;
    font-weight: 400;
`

export const BodyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
`

export const Benefit = styled.div`
    width: calc(50% - 0.25rem);
    height: 3.38rem;
    display: flex;
    flex-direction: row;
    background-color: var(--blue-mute);
    border-radius: 8px;

    &:nth-child(2n-1) {
        margin-right: 0.5rem;
    }

    &:nth-child(1) {
        margin-bottom: 0.5rem;
    }

    &:nth-child(2) {
        margin-bottom: 0.5rem;
    }
`

export const Icon = styled.img`
    width: 2.25rem;
    height: 2rem;
    margin: 0.63rem;
`

export const Name = styled.div`
    width: calc(100% - 2.25rem);
    height: 100%;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    line-height: 330%;
`

export const HighLight = styled.span`
    color: var(--blue-strong);
`

export const Promote = styled.div`
    width: 21rem;
    margin: 2.31rem auto 0.63rem;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    color: var(--blue-strong);
`
