import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../globals/theme';
import Home from './Home/Home';
import About from './About/About';
import MySkills from './MySkills/MySkills';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import NotFound from './NotFound/NotFound';
import { Route, BrowserRouter, NavLink, Switch } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

//Redux
import { connect } from 'react-redux';
import { handleToggle } from '../redux/actions/portfolioActions';

class Layout extends Component {

  render() {
    const StyledLink = styled(NavLink)`
      transition: 0.3s;
      text-decoration: none;
      color: green;
      width: 100px;
      text-align: center;
      padding: 10px 5px;
      margin: 10px 5px;
      background-color: rgba(46, 204, 113, 0.1);
      :hover{
        background-color: #2ECC71;
        color: #ffffff;
      }
    `;

    const active = {
      backgroundColor: '#2ECC71',
      color: '#ffffff'
    }

    const NavButton = styled.div`
      transition: all 0.3s;
      cursor: pointer;
      position: fixed;
      left: 20px;
      top: 20px;
      width: 50px;
      height: 50px;
      outline: none;
      border: none;
      background-color: rgba(255,255,255,0.5);
      :after{
        content: '';
        position: absolute;
        width: 40px;
        left: 5px;
        top: ${this.props.open ? '25' : '10'}px;
        height: 2px;
        background-color: #2ECC71;
        transform: rotate(${this.props.open ? '-45' : '0'}deg); 
      }
      :before{
        transition: 0.3s;
        content: '';
        position: absolute;
        width: 40px;
        left: 5px;
        bottom: ${this.props.open ? '23' : '10'}px;
        height: 2px;
        background-color: #2ECC71;
        transform: rotate(${this.props.open ? '45' : '0'}deg); 
      }
    `;

    const NavLine = styled.div`
      transition: all 0.3s;
      height: 2px;
      position: absolute;
      background-color: #2ECC71;
      width: 40px;
      top: calc(50% - 1px);
      left: 5px;
      opacity: ${this.props.open ? '0' : '1'};
    `;

    const CloseBtn = styled.p`
      position: absolute;
      bottom: 20px;
      transition: 0.3s;
      text-decoration: none;
      color: green;
      width: 100px;
      text-align: center;
      padding: 10px 5px;
      margin: 10px 5px;
      :hover{
        border-color: #2ECC71;
        cursor: pointer;
      }
    `;

    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Drawer open={this.props.open} >
            <StyledLink onClick={this.props.handleToggle} exact to='/' activeStyle={active}>Home</StyledLink>
            <StyledLink onClick={this.props.handleToggle} exact to='/About' activeStyle={active}>About</StyledLink>
            <StyledLink onClick={this.props.handleToggle} exact to='/MySkills' activeStyle={active}>My Skills</StyledLink>
            <StyledLink onClick={this.props.handleToggle} exact to='/Experience' activeStyle={active}>Experience</StyledLink>
            <StyledLink onClick={this.props.handleToggle} exact to='/Portfolio' activeStyle={active}>Portfolio</StyledLink>
            <CloseBtn onClick={this.props.handleToggle}>Close</CloseBtn>
          </Drawer>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/About' component={About} />
            <Route path='/MySkills' component={MySkills} />
            <Route path='/Experience' component={Experience} />
            <Route path='/Portfolio' component={Portfolio} />
            <Route component={NotFound} />
          </Switch>

          <NavButton onClick={this.props.handleToggle}>
            <NavLine />
          </NavButton>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.open
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleToggle: () => dispatch(handleToggle())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);