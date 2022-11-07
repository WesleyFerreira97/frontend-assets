import styled from 'styled-components'
// import CarImage from '../../assets/images/car.jpg'
import CarImage from '../../../public/car.jpg'
import { CardImage, CardWrap } from './styles'
import Nature from '../../../public/nature.jpg';

export function Card() {

    return (
        <CardWrap>
            <CardImage>
                <img src={Nature} />
            </CardImage>
        </CardWrap>
    )
}