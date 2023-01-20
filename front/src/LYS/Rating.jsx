import React, {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
import styled from 'styled-components';

const ARRAY = [0, 1, 2, 3, 4];

function Rating() {
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const handleStarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
        console.log(clickStates)
        console.log(clicked)
    };

    // useEffect(() => {
    //     sendReview();
    // }, [clicked]); //컨디마 컨디업
    useEffect(() => {
        sendReview();
        setClicked([true,true,true,false,false])
    }, []); //컨디마 컨디업

    const sendReview = () => {
        let score = clicked.filter(Boolean).length;

    };

    return (
        <Wrap>
            <Stars>
                {ARRAY.map((el, idx) => {
                    return (
                        // <FaStar
                        //     key={idx}
                        //     size="20"
                        //     onClick={() => handleStarClick(el)}
                        //     className={clicked[el] && 'yellowStar'}
                        // />
                        <FaStar
                            key={idx}
                            size="20"
                            onClick={() => handleStarClick(el)}
                            className={clicked() && 'yellowStar'}
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