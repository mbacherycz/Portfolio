import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Project from "./Project/Project";

import Modal from 'react-modal';
import ModalContent from './Modal/Modal';

//Redux 
import { connect } from 'react-redux';
import { openModal, closeModal } from "../../redux/actions/portfolioActions";

const Portfolio = (props) => {
  //binding modal to the root div element in the DOM
  Modal.setAppElement('#root');

  const Wrapper = styled(Grid)`
    padding: 50px;
    z-index:1;
  `;

  const Title = styled.h1`
    font-size: 30px;
    color: #566366;
    margin: auto;
    margin-top: 30px;
  `;

  const Text = styled.p`
    color: #919191;
    font-size: 20px;
    text-align: center;
    padding: 0 50px 0 50px;

    @media (max-width: 600px) {
      padding: 0 30px 0 30px;
    }
  `;

  const ProjWrapper = styled(Grid)`
    height: 30vh;
    margin: 10px;
  `;

  const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: rgb(46, 204, 113);
  outline: none;
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding: 30px;
`;

  const ModalButton = styled.button`
    height: 30px;
    width: calc(100% - 20px);
    margin: auto;
    background-color: rgba(46, 204, 113,0.9);
    color: #ffffff;
    border: none;
    margin-top: 20px;
    outline: none;
    cursor: pointer;
  `;

  return (
    <Wrapper container>
      <Title>Portfolio</Title>
      <Text>
        Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu
        virtute placerat. Purto brute disputando cu est, eam dicam soluta ei.
        Vel dicam vivendo accusata ei, cum ne periculis molestiae pri.{" "}
      </Text>

      {props.portfolioData.map(data => {
        return (
          <ProjWrapper item key={Math.random()} xs={12} sm={4}>
            <Project
              image={data.image}
              title={data.title}
              employer={data.employer}
              link={data.link}
            />
          </ProjWrapper>
        );
      })}


      <Grid style={{ display: 'flex', justifyContent: 'center' }} item xs={12}>
        <ModalButton onClick={() => props.openModal()}>Open Modal</ModalButton>
      </Grid>

      <StyledModal isOpen={props.modalIsOpen} onRequestClose={props.closeModal} >
        <ModalContent />
      </StyledModal>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    modalIsOpen: state.modalIsOpen,
    portfolioData: state.portfolioData
  }
}

const mapDispatchToProps = {
  openModal,
  closeModal
}
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
