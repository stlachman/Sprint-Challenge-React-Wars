# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a UI library that allows developers to create reusable components to build complex web applications that scale and work for many users.  By splitting the UI into components, the developer can consider this piece in isolation which helps when attempting to debug an application. Developers can build a sidebar component  that can be used on a user’s profile page as well as their newsfeed like Twitter. A component can then update dynamically based on new data and interactions on that component (such as updating the number of retweets on a card component for example).

1.  What does it mean to _think_ in react?

To think in React means to break apart UI elements into smaller components based on the single responsibility principle. Each component should be responsible for doing one thing well. For example, think of a weather application or website. If you look at the five day forecast, normally this information is contained in a table with each piece of weather data such as chance of precipitation, wind, high/low assigned to a column. with the data beneath the column. So the data column could be thought of  as a single component within that view and the column is only responsible for rendering the appropriate data for that particular column.  

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class or stateful component is a component that contains it's own state. It is also normally written using JavaScript class syntax. A functional component doesn't use it's have it's own state, but it can receive props from other components. 

1.  Describe state.

State can be thought of as the warehouse or distribution center of an application. All of the packages that need to be delivered to various parts of the county (or application) are stored in this warehouse. The warehouse receives packages from other parts of the country and directs those packages to the correct location.  State is the data that can be passed around from a parent component to a child component and allows components to update when the state of that component is updated. 

1.  Describe props.

Continuing from the analogy above, props are the packages (or to be more specific, the item within the package)  that is delivered to a specific address.  Props are immutable which fits nicely with our analogy. The contents of the package shouldn’t be changed in route to their destination (we will ignore accidents in this case).  Props are received by components and used to display data to the user. 
