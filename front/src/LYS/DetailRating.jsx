import React, {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
import styled from 'styled-components';

const ARRAY = [0, 1, 2, 3, 4];

function DetailRating(props) {
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    useEffect(() => {
        let starList = [];
        sendReview();
        for (let i = 0; i < props.rating; i++) {
            starList.push(true);
        }

        setClicked([starList[0],starList[1],starList[2],starList[3],starList[4]]);
    }, []); //컨디마 컨디업

    const sendReview = () => {
        let score = clicked.filter(Boolean).length;

    };

    return (
        <Wrap>
            <Stars>
                {ARRAY.map((el, idx) => {
                    return (
                        <FaStar
                            key={idx}
                            size="20"
                            className={clicked[el] && 'yellowStar'}
                        />
                    );
                })}
            </Stars>
        </Wrap>
    );
}

export default DetailRating;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Stars = styled.div`
  display: flex;

  & svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;