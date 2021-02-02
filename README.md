# What and why
This is a repo created to make visible the react-components I made. The goal is to let reviewers easily see my code and project structure so that they can deliver proper feedback in canvas.

## Learning goals
- Creating a chart-component in React
- Editing the chart-component to align with the data from the API
- Send a fetch request in ReactJS


## React
### Youtube tutorials
What proved to be particularly helpful for me learning how to write an api call in react was the practical react.js tutorial series by [Ben Awad](https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw) on youtube.

For learning how to make the api call for a single object I used [part 12](https://www.youtube.com/watch?v=T3Px88x_PsA), and then to learn how to parse all the objects I used [part 13](https://www.youtube.com/watch?v=ke1pkMV44iU).



### Blogposts and other texts
#### Grouped  Bar-chart in Chartjs
To figure out how to visualize a grouped-bar chart in chartjs [this](https://stackoverflow.com/a/28181877) stackoverflow answer helped me a lot.
#### Sending data from components to each other
[How to send state of one component as a parameter to another component.](https://www.pluralsight.com/guides/how-to-send-state-of-current-component-as-a-parameter-to-another-external-method-using-react)

Een guide over react design patterns, MVC (ModelViewController). [React design patterns](https://www.freecodecamp.org/news/react-superpowers-container-pattern-20d664bdae65/)

[How to display a chart that fetches api data](https://stackoverflow.com/questions/56054400/how-to-make-aspecific-api-call-from-within-a-line-chart-class-in-reactjs-using-r)


#### Changing url with changable variables
I wanted to know how to change the url to which a get request would be posted depending on userinput and used this [solution.](https://stackoverflow.com/a/38617529)
#### Lifecycle methods
Explanation about lifecycle methods [here](https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm#:~:text=componentDidMount%20is%20executed%20after%20the,such%20as%20setTimeout%20or%20setInterval.)
I used this source to learn about the componentWillMount and componentDidMount methods I found out about while following Ben Awad's youtube tutorials.

#### Compontents' props vs states

Component Props

*A component’s props should be used for data that is passed into the component from the outside, typically from a parent component or the redux store.*
*As such, a component cannot change its props; change only comes from the outside when the component receives new props.* 
*In this regard, props can be thought of as a mechanism of communication between components. Typical props include:*
- *a parent component’s state data*
- *a handler function from a parent component if the function needs that parent component’s context*
- *API or payload data from the redux store (via the mapStateToProps function)*
- *dispatch functions from redux (via the mapDispatchToProps function)*


Component State

*A component’s state should be used for data whose changes are managed by the component. 
Object-oriented programmers can think of the state as the component’s member variables or instance variables. 
When a component mounts, its state is initiated to a certain value but the component can change this state over time through the setState method. 
Typical examples of state data include:*
- *data which controls the UI of a component (ie. disable/enable button on form, show/hide modal)*
- *data which originates from user triggered events (ie. entering input fields for controlled components — more on controlled components later)*
- *the passage of time (ie. a clock component)*

[Li, Steven, 2018, 'React Gotchas, Anti-Patterns, and Best Practices', on Medium.com](https://medium.com/@User3141592/react-gotchas-and-best-practices-2d47fd67dd22)

#### Api calls and props
[Punase, Satosh, 2019, 'Integrating api's in React JS-Constructor vs componentWillMount vs componentDidMount', on medium.com](https://medium.com/@santoshpunase/integrating-apis-in-react-js-constructor-vs-componentwillmount-vs-componentdidmount-e0b98c3efecd)