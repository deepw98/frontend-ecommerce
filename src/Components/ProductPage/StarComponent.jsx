import React from 'react';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';

const StarRatingContainer= styled.div`
display:inline-block
`;

const Star = styled(StarIcon)`
    color:${(props)=>(props.filled?'gold':'lightgray')};
    font-size:1.2rem;
    margin-right:2px;
`;

export default function StarComponent({rating}){
    const maxRating=5
    const stars=[];

    for(let i=1; i<=maxRating;i++){
        stars.push(<Star 
        key={i}
        filled={i<=rating}
        />)
    }
    return <StarRatingContainer>{stars}</StarRatingContainer>
}