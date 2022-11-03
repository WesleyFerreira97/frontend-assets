import styled from 'styled-components'
// import CarImage from '../../assets/images/car.jpg'
import CarImage from '../../../public/car.jpg'
import { CardImage, CardWrap } from './styles'


export function Card() {

    return (
        <CardWrap>
            <CardImage>
                <img src={CarImage} />
            </CardImage>
        </CardWrap>
    )
}