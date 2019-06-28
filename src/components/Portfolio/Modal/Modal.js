import React, { Component } from 'react';
import styled from 'styled-components';
//Redux
import { connect } from 'react-redux';
import { closeModal, addProject } from "../../../redux/actions/portfolioActions";

class Modal extends Component {

    state = {
        title: '',
        employer: '',
        image: '',
        link: '',
        disabled: true
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if (e.target.value.length > 0) {
            this.setState({
                disabled: false,
                [e.target.name]: e.target.value
            })
        }
        if (e.target.value.length <= 0) {
            this.setState({
                disabled: true,
                [e.target.name]: e.target.value
            })
        }
    }

    render() {
        const Title = styled.h1`
        color: #ffffff;
        font-size: 30px;
        text-align: center;
        `;

        const constStyles = {
            input: {//styled component makes input doesn't work
                border: 'none',
                display: 'block',
                width: '90%',
                outline: 'none',
                height: '30px',
                padding: '0px 5px',
                margin: '3px 0px'
            },
            inputWrapper: {
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '30px'
            }
        }

        const StyledButton = styled.button`
            height: 30px;
            width: calc(90% + 10px);
            border: none;
            outline: none;
            margin: auto;
            margin-top: 3px;
            margin-bottom: 10px;
            cursor: ${this.state.disabled ? 'default' : 'pointer'};
            transition: all .3 ease-out;
            background-color: #ffffff;
            text-transform: uppercase;
            font-weight: bold;
            :hover{
                background-color: #cccccc;
            };
            :disabled{
                background-color: red;
            }
        `;

        return (
            <>
                <Title>Add new Portfolio!</Title>
                <div style={constStyles.inputWrapper}>
                    <input style={constStyles.input} onChange={(e) => this.onChangeHandler(e)} type='text' placeholder='Project name' name='title' />
                    <input style={constStyles.input} onChange={(e) => this.onChangeHandler(e)} type='text' placeholder='Company' name='employer' />
                    <input style={constStyles.input} onChange={(e) => this.onChangeHandler(e)} type='text' placeholder='Link to the image' name='image' />
                    <input style={constStyles.input} onChange={(e) => this.onChangeHandler(e)} type='text' placeholder='Link to the project' name='link' />
                </div>
                <StyledButton disabled={this.state.disabled} onClick={() => this.props.addProject(this.state)}>Add</StyledButton>
                <StyledButton onClick={() => this.props.closeModal()}>close</StyledButton>
            </>
        )
    }

}

const mapDispatchToProps = {
    closeModal,
    addProject
}

export default connect(null, mapDispatchToProps)(Modal);