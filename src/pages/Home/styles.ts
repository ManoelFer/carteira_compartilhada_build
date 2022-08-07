import styled from 'styled-components'

import { backgroundHome } from 'assets'

export const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;


    background-image: url(${backgroundHome});
    background-repeat: round;
    background-size: cover;
`
export const TitleCard = styled.h1`
    color: ${({ theme }) => theme.colors.lettersWithe};
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 3%;
`

export const TextCard = styled.h2`
    color: ${({ theme }) => theme.colors.lettersWithe};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 40px;
    letter-spacing: 3%;
`

export const ContainerButton = styled.div`
    margin-top: 70px;
    justify-content: center;
    display: flex;
`