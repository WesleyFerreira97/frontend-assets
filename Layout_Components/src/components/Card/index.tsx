import styled from 'styled-components'
import CarImage from '../../assets/images/car.jpg'

const CardWrap = styled.div`
    background-color: black;
    width: 100%;
    height: 100%;

    img { 
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

export function Card() {

    return (
        <CardWrap>
            <img src={CarImage} />
        </CardWrap>
    )
}