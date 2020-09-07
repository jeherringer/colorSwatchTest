import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
/*
const colorNameArray = [];
const colorGroupArray = [];
*/
// Styles for all the right-side content
const Styles = styled.div`;

.rightContainer {
    height: 90vh;
    width: 85%;
    float: right;
}

#cardDiv {
    display: flex;
    margin-left: 17.5%;
    justify-content: center;
    width: 65%;
    flex-wrap: wrap;
    margin-top: 15px;
    font-family: 'Source Serif Pro', serif;
}

#detailedDiv {
    display: flex;
    margin-left: 7.5%;
    justify-content: center;
    width: 85%;
    flex-wrap: wrap;
    margin-top: 15px;
    height: 90vh;
    flex-wrap: wrap;
}

#detailedDiv img {
    height: 85%;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

#detailCard {
    width: 85%;
    border: 1px black solid;
    border-radius: 15px;
    height: 60vh;
    margin: 20px;
    font-family: 'Source Serif Pro', serif;
}

#detailCard p {
    padding-top: 2rem;
}

#detailedDiv p {
    display: flex;
    justify-content: center;
    align-content: center;
}

#detailedDiv button {
    border: 1px #dedede solid;
    width: 25%;
    height: 3rem;
    margin-top: 20px;
    border-radius: 15px;
    font-family: 'Source Serif Pro', serif;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

#detailedDiv button:hover {
    width: 28%;
    height: 3.5rem;
    cursor: pointer;
}

#bottomDetailCard {
    width: 85%;
    height: 25vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    font-family: 'Source Serif Pro', serif;
}

.contentRight {
    width: 85%;
}

ul {
    list-style-type: none;
    display: flex;
    justify-content:space-between;
    margin-left: 20%;
    margin-right: 20%;
    cursor: pointer;
    font-family: 'Source Serif Pro', serif;
    color: 	rgb(69, 75, 75);
}

li {
    width: 20px;
    text-align: center;
    transition: all 0.5s ease;
}

li:hover {
    border-bottom: 3px black solid;
    font-size: 1.5rem;
    font-type: bold;
}

.pages {
    width: 65%;
    margin-top: 20px;
    margin-left: 17.5%;
}

#hexCode {
    border: 1px #dedede solid;
    width: 20%;
    border-radius: 15px;
    height: 14rem;
    margin: 20px;
    transition: all 0.3s ease;
    color: 	rgb(69, 75, 75);
}

#hexCode:hover {
    cursor: pointer;
    width: 22%;
    height: 14.5rem;
}

#hexCode img {
    height: 85%;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

#hexCode p {
    height: 15%;
    text-align: center;
}

.groupTwo, .groupThree, .groupFour, .groupFive, .groupSix, .groupSeven, .groupEight, .groupNine, #detailedDiv{
    display:none;
}

#miniCard {
    width: 15%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 8rem;
    margin: 20px;
    border: 1px #dedede solid;
    border-radius: 15px;
}

#miniCard img {
    height: 75%;
}

#miniCardText {
    height: 25%;
    padding: 10px;
    color: 	rgb(69, 75, 75);
}

#detailText {
    font-size: 2em;
    padding: 0px;
    color: 	rgb(69, 75, 75);
}
`

class ContentRight extends React.Component {
    // set up a state to wait to render until our data arrives
    constructor(props) {
        super(props)
        this.state = {
          loaded: false
        }
      }
      
   componentDidMount  = () => {
        // grab the div to append colorSwatches too
        /*
        var cardDiv = document.getElementById("cardDiv");
        var connectDiv = document.getElementById("detailedDiv")
        */
        // run a normal fetch GET call to retrieve our data
        fetch('https://fat-pug-91.loca.lt/', {
           method: 'GET',
           async: true,
           port: 3000,
        }).then(res => res.json())
            .then(json => {
               console.log(json) 
               /*
                // going to loop through our data and add what we need to an empty array
                for (let i = 0; i < 100; i++) {
                    colorNameArray.push(json[i]);
                    colorGroupArray.push(json[i].colorGroup);
                    // create a new element for every index
                    var newCard = document.createElement("div");
                    var cardImg = document.createElement("img");
                    var card = document.createElement("p");
                    $(card).text(colorNameArray[i].colorHue);
                    $(cardImg).css('background-color', colorNameArray[i].colorHue);
                    // apply different classes based on index number to sort later
                    if (colorNameArray[i]._id > 0 && colorNameArray[i]._id < 13) {
                        newCard.className = "groupOne";
                    }
                    else if (colorNameArray[i]._id > 12 && colorNameArray[i]._id < 25) {
                        newCard.className = "groupTwo";
                    }
                    else if (colorNameArray[i]._id > 24 && colorNameArray[i]._id < 37) {
                        newCard.className = "groupThree";
                    }
                    else if (colorNameArray[i]._id > 36 && colorNameArray[i]._id < 49) {
                        newCard.className = "groupFour";
                    }
                    else if (colorNameArray[i]._id > 48 && colorNameArray[i]._id < 61) {
                        newCard.className = "groupFive";
                    }
                    else if (colorNameArray[i]._id > 60 && colorNameArray[i]._id < 73) {
                        newCard.className = "groupSix";
                    }
                    else if (colorNameArray[i]._id > 72 && colorNameArray[i]._id < 85) {
                        newCard.className = "groupSeven";
                    }
                    else if (colorNameArray[i]._id > 84 && colorNameArray[i]._id < 97) {
                        newCard.className = "groupEight";
                    }
                    else if (colorNameArray[i]._id > 96 && colorNameArray[i]._id < 101) {
                        newCard.className = "groupNine";
                    }
                    newCard.id = "hexCode";
                    // append our new elements to the parent element
                    newCard.appendChild(cardImg);
                    newCard.appendChild(card);
                    cardDiv.appendChild(newCard);
                    // create new elment for the detailed card view and hide the rest
                    $(newCard).click(function() {
                        console.log(colorGroupArray);
                        $("#detailedDiv").show();
                        var newDetailCard = document.createElement("div");
                        newDetailCard.id = "detailCard"
                        var newDetailImg = this.children[1].innerText;
                        var newDetailColor = document.createElement("img");
                        var newDetailText = document.createElement("p");
                        var clearBtn = document.createElement("button");
                        var cardBottom = document.createElement("div");
                        var similarColors = document.createElement("div");
                        newDetailText.id = "detailText"
                        similarColors.id = "similarColors";
                        cardBottom.id = "bottomDetailCard";
                        $(clearBtn).text("Clear")
                        $(newDetailColor).css("background-color", newDetailImg);
                        $(newDetailText).text(newDetailImg)
                        newDetailCard.appendChild(newDetailColor);
                        newDetailCard.appendChild(newDetailText);
                        connectDiv.appendChild(newDetailCard);
                        cardBottom.appendChild(similarColors);
                        cardBottom.appendChild(clearBtn);
                        connectDiv.appendChild(cardBottom);
                        
                        for (let x = 0; x < colorNameArray.length; x++) {
                            if (this.children[1].innerText === colorNameArray[x].colorHue) {
                                console.log(this.children[1].innerText);
                                var thisColorGroup = colorNameArray[x].colorGroup;
                                console.log(thisColorGroup);
                            }
                            else {
                                console.log("didnt match")
                            }
                        }

                        var divCreated = 0;
                        for (let m = 0; m < colorNameArray.length; m++) {
                            if (thisColorGroup === colorNameArray[m].colorGroup) {
                                    var miniCard = document.createElement("div");
                                    miniCard.id = "miniCard";
                                    var miniCardColor = document.createElement("img");
                                    var miniCardText = document.createElement("p");
                                    $(miniCardText).id = "miniCardText";
                                    $(miniCardText).text(colorNameArray[m].colorHue);
                                    $(miniCardColor).css("background-color", colorNameArray[m].colorHue);
                                    miniCard.appendChild(miniCardColor);
                                    miniCard.appendChild(miniCardText);
                                    cardBottom.prepend(miniCard);
                                    // incremenent a variable to break production after 5 elements are made
                                    divCreated++;
                                    if (divCreated > 4) {
                                        break;
                                    }
                            }
                            else {
                                console.log("not matching");
                            }
                        }
                        $(cardDiv).hide();
                        $(".pages").hide();
                        // button functionality to get back to main page
                        $(clearBtn).click(function() {
                            $("#detailedDiv").hide();
                            $("#detailCard").remove();
                            $("#bottomDetailCard").remove();
                            $(cardDiv).show();
                            $(".pages").show();
                        })
                        
                    })
                    
                };
             */
            });
            
            // messy way to show/hide based on classes
            $("#pageOne").click(function() {
                $(".groupOne").show();
                $(".groupTwo").hide(); 
                $(".groupThree").hide(); 
                $(".groupFour").hide(); 
                $(".groupFive").hide(); 
                $(".groupSix").hide(); 
                $(".groupSeven").hide(); 
                $(".groupEight").hide(); 
                $(".groupNine").hide();
            });
            $("#pageTwo").click(function() {
                    $(".groupOne", ).hide(); 
                    $(".groupThree").hide(); 
                    $(".groupFour").hide(); 
                    $(".groupFive").hide(); 
                    $(".groupSix").hide(); 
                    $(".groupSeven").hide(); 
                    $(".groupEight").hide(); 
                    $(".groupNine").hide();
                    $(".groupTwo").show();
            });
            $("#pageThree").click(function() {
                $(".groupOne").hide(); 
                $(".groupTwo").hide(); 
                $(".groupFour").hide(); 
                $(".groupFive").hide(); 
                $(".groupSix").hide(); 
                $(".groupSeven").hide(); 
                $(".groupEight").hide(); 
                $(".groupNine").hide();
                $(".groupThree").show();
            });
            $("#pageFour").click(function() {
                $(".groupOne").hide(); 
                $(".groupTwo").hide();  
                $(".groupFive").hide(); 
                $(".groupSix").hide(); 
                $(".groupSeven").hide(); 
                $(".groupEight").hide(); 
                $(".groupNine").hide();
                $(".groupThree").hide();
                $(".groupFour").show();
            });
            $("#pageFive").click(function() {
                $(".groupOne").hide(); 
                $(".groupTwo").hide(); 
                $(".groupFour").hide(); 
                $(".groupThree").hide(); 
                $(".groupSix").hide(); 
                $(".groupSeven").hide(); 
                $(".groupEight").hide(); 
                $(".groupNine").hide();
                $(".groupFive").show();
            });
            $("#pageSix").click(function() {
                $(".groupOne").hide(); 
                $(".groupTwo").hide(); 
                $(".groupFour").hide(); 
                $(".groupFive").hide(); 
                $(".groupThree").hide(); 
                $(".groupSeven").hide(); 
                $(".groupEight").hide(); 
                $(".groupNine").hide();
                $(".groupSix").show();
            });
            $("#pageSeven").click(function() {
                $(".groupOne").hide(); 
                $(".groupTwo").hide(); 
                $(".groupFour").hide(); 
                $(".groupFive").hide(); 
                $(".groupSix").hide(); 
                $(".groupThree").hide(); 
                $(".groupEight").hide(); 
                $(".groupNine").hide();
                $(".groupSeven").show();
            });
            $("#pageEight").click(function() {
                $(".groupOne").hide(); 
                $(".groupTwo").hide(); 
                $(".groupFour").hide(); 
                $(".groupFive").hide(); 
                $(".groupSix").hide(); 
                $(".groupSeven").hide(); 
                $(".groupThree").hide(); 
                $(".groupNine").hide();
                $(".groupEight").show();
            });
            $("#pageNine").click(function() {
                $(".groupOne").hide(); 
                $(".groupTwo").hide(); 
                $(".groupFour").hide(); 
                $(".groupFive").hide(); 
                $(".groupSix").hide(); 
                $(".groupSeven").hide(); 
                $(".groupEight").hide(); 
                $(".groupThree").hide();
                $(".groupNine").show();
            });
        // call our render method with our loaded state included  
        this.setState({ loaded: true });
    }
    
    
     
    render () {
    const loaded  = this.state
    if (loaded === false) {
        return(null)
    }
    else {
        return (
        <div>
            <Styles>
                <div className="rightContainer">
                    <div id="cardDiv"></div>
                    <div id="detailedDiv"></div>
                    <div className="pages">
                        <ul>
                            <li id="pageOne">1</li>
                            <li id="pageTwo">2</li>
                            <li id="pageThree">3</li>
                            <li id="pageFour">4</li>
                            <li id="pageFive">5</li>
                            <li id="pageSix">6</li>
                            <li id="pageSeven">7</li>
                            <li id="pageEight">8</li>
                            <li id="pageNine">9</li>
                        </ul>
                    </div>
                </div>
            </Styles>
        </div>
        );
    }};

};




export default ContentRight

// i recognize this is easier with state management and setting offsets and limit, but honestly I don't quite have the knowledge of how that works yet
