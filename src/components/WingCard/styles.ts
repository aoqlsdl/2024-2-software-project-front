import styled from 'styled-components'

interface WrapperProps {
    bg: string
}
export const Container = styled.div`
    width: 18rem;
    height: 26.25rem;
    margin: 0 auto 1rem;
    // padding: 1.88rem 0 2.44rem;
    border-radius: 22px;
`

export const Wrapper = styled.div<WrapperProps>`
    width: 18rem;
    height: 26.25rem;
    display: inline-block;
    position: relative;
    margin-bottom: 1rem;
    border-radius: 22px;
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center -60px;
`

export const Card = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 1.13rem;
`

export const Title = styled.div`
    color: var(--blue-strong);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
`

export const ImgBox = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
`

export const Img = styled.img`
    width: 13.63rem;
    height: 9.81rem;
    margin: 1.56rem auto 1.5rem;
`

export const DescBox = styled.div`
    width: 16rem;
    height: 6.94rem;
    display: inline-block;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, 0);
    margin: 0 auto;
    background: rgba(256, 256, 256, 0.9);
    border-radius: 8px;
`

export const SubTitle = styled.div`
    width: 100%;
    margin: 0.69rem auto;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
`

export const Desc = styled.div`
    width: 12.5rem;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.19rem;
    text-align: center;
`

export const ButtonGroup = styled.div`
    width: 18rem;
    margin: 0 auto 4.94rem;
    display: flex;
    justify-content: space-between;
`
