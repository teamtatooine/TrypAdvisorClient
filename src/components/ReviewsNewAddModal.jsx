import React from 'react';
import styled from 'styled-components';

const NewAddModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  font-family: Arial, Tahoma, "Bitstream Vera Sans", sans-serif;
  z-index: 1000;
  &.display-block {
    display: block;
  }
  &.display-none {
    display: none;
  }
`;

const Window = styled.section`
  position:fixed;
  padding: 24px;
  margin: 8px 200px 8px 8px;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
    z-index: 1100;
`;




const ReviewsNewAddModal = (props) => {

  const showHideClassName = props.show ? "display-block" : "display-none";

  return (
    <NewAddModal className={showHideClassName}>
      <Window>
        <div>Write a Review</div>
        <button onClick={props.handleClose}>close</button>
      </Window>
    </NewAddModal>
  );
};

export default ReviewsNewAddModal;