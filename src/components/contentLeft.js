import React from 'react';
import styled from 'styled-components';

// styles for all the left content
const Styles = styled.div`

.btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}
.contentLeft {
    width: 15%;
    height: 90vh;
    background-color: rgb(214, 216, 216);
    border: 1px solid grey;
    float: left;
    font-family: 'Source Serif Pro', serif;
    color: 	rgb(69, 75, 75);
}

.randomColor {
    margin-top: 30px;
    height: 3rem;
    width: 80%;
    border-radius: 10px;
    border: 1px black solid;
    font-size: 1.5rem;
    font-family: 'Source Serif Pro', serif;
    color:rgb(62, 65, 65);
}

.contentContainer li {
    padding-top: 30px;
    padding-left: 40px;
    font-size: 1.5rem;

}`

// normal component
const ContentLeft = () => (
    <Styles>
        <div className="contentContainer">
            <div className="contentLeft">
                <div className="btnContainer">
                    <button className="randomColor">Random Color</button>
                </div>
                <div className="colorList">
                    <ul className="colorLabels">
                        <li id="redBtn">Red</li>
                        <li id="orangeBtn">Orange</li>
                        <li id="yellowBtn">Yellow</li>
                        <li id="greenBtn">Green</li>
                        <li id="blueBtn">Blue</li>
                        <li id="purpleBtn">Purple</li>
                        <li id="brownBtn">Brown</li>
                        <li id="greyBtn">Grey</li>
                    </ul>
                </div>
            </div>
        </div>
    </Styles>
)

export default ContentLeft;