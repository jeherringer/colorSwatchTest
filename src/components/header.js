import React from 'react';
import styled from 'styled-components';

// styles for our header
const Styles = styled.div`
    .header {
        display: flex;
        justify-content: space-between;
        background: rgb(54, 60, 60);
        min-height: 30%;
        align-items: center;
        height: 90px;
}

    .logo {
        color: white;
        padding: 15px;
        width: 80px;
        height: 80px;
}

    .header input {
        height: 3rem;
        margin-right: 20px;
        border-radius: 10px;
        border: none;
        box-shadow: none;
        outline: none;
}

    input[type=text] {
        padding-left: 25px;
        font-size: 1.5rem;
}
    
`;

const Header = () => (
    <Styles>
        <div className="header">
            <img className="logo" alt="HelpfulHuman Logo" src={require('../assets/logo-symbol.svg')}></img>
            <input type="text" placeholder="Search.."></input>
        </div>
    </Styles>
);

export default Header;