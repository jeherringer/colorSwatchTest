# A react application that retrieves color data and displays it with various functionality.

![Showing App Working](https://s8.gifyu.com/images/colorSwatchGif.gif)

## The backend

I used a combination of Express, Node.js, and Mongoose to build out the simple backend for this project. I used mongoose to connect to my MongoDB Atlas cluster and Express to run my server and handle all of the api calls that are used/may be used in the future. 

I also build out a more robust and scalable backend using TypeScript and the same technologies, but decided to go with a more simple implementation for both time and my current knowledge level. You can find the TypeScript backend code, including all the schema, models, and others here: https://github.com/jeherringer/TypeScript-backend.

## The frontend

I mainly used React to create the front-end but also inserted a fair amount of jQuery simply because although I am aware of state configuration and manipulatation I do not totally know how to use it cleanly yet. I know for sure that if I used more this.state and similar techniques the implementation would have been cleaner. As a result, to display all the color swatches, I made a call to my database and got a full array of all the colors I had populated it with. After that I simply created new elements (the cards that the color swatches are) and attached them to a div in which to contain them all. When it comes to switching pages, I decided to just group them in groups of 12 and either .show() or .hide() based on which class they were. While this is really innefficient, it is still fairly easy to scale if I put some more time into building out a better function. 

## Styling

I opted to use styled-components because I really like how it works with React components. It allows me to freely style with CSS or any other styling library I might want to while being easy to read and understand. I put in a quick few hover animations that I think make the page really come to life more and feel better to navigate around. 

## Future optimization

There is a lot of room to actually include more functionality as I have laid almost all of the ground work for it. Using database calls with the structure of my database makes it really easy to target certain properties of the data, for instance; getting all of the color groups (which I just referred to HTML basics for), searching the name of a certain color, searching by hex code, filtering by any number of properties, and much more. 

## Deployed

The site is deployed on heroku at the following link: https://colorwatchproject.herokuapp.com/
