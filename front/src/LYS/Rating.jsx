import React, {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
import styled from 'styled-components';

const ARRAY = [0, 1, 2, 3, 4];

function Rating(props) {
    const [starPoint, setStarPoint] = useState([false, false, false, false, false]);

    const handleStarClick = index => {
        let clickStates = [...starPoint];
        for (let i = 0; i < props.rating+1; i++) {
            clickStates[i] = i <= index ? true : false;
        }
        setStarPoint(clickStates);
    };

    useEffect(() => {
        sendReview();
    }, [starPoint]); //컨디마 컨디업

    const sendReview = () => {
        let score = starPoint.filter(Boolean).length;
    };

    return (
        <Wrap>
            <Stars>
                {ARRAY.map((el, idx) => {
                    return (
                        <FaStar
                            key={idx}
                            size="20"
                            onClick={() => handleStarClick(el)}
                            className={starPoint[el] && 'yellowStar'}
                        />
                    );
                })}
            </Stars>
        </Wrap>
    );
}

export default Rating;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;