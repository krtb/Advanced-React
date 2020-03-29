import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
// Components
import Header from '../components/Header';
import Meta from './Meta';

// regular object
const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

// tag template literal // using black from (theme) above
const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;

// props is making use of interpolation
const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
     margin: 0 auto;
    padding: 2rem;
`;

class Page extends Component {
    render() { 
        return (
            <ThemeProvider theme={theme} >
            <StyledPage>
                <Meta />
                <Header /> 
                <Inner>{this.props.children}</Inner>
            </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page;