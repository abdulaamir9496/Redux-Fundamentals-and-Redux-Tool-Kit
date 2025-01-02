// let state = {
//     count : 0,
//     name: 'Aamir',
//     age: 28,
//     city: "Hyderabad"
// }

const { createStore } = require("redux")

// let prevState = state;

// state.count = state.count + 1;
// state.count = state.count + 1;
// state.count = state.count + 1;

// function increment() {
//     //*** Mutating State ***//
//     // state.count = state.count + 1;

//     //*** Not Mutating State ***//
//     state = {...state, count: state.count + 1};
// }

// increment();
// console.log(state);

// increment();
// console.log(state);

// increment();
// console.log(state);

//Redux says we should'nt call like this.
// We should not mutate the state. Without mutating the state we should change the state.

// let state = {
//     count : 0,
//     name: 'Aamir',
//     age: 28,
//     city: "Hyderabad"
// }

//Reducer function: Reducer means updater.

// function stateUpdater(state) {    //Redux says stateUpdater is a reducer, which means reducer is a (stateUpdater)
//     state = {...state, count: state.count + 1}   
//     //Redux says no not this way. You should not touch directly. No updating like this for updating values.
//     //Then how ? Redux says I will update by myself(Redux). How ? Redux says I will pass state(as a parameter) & return new state..
// }

//What Redux will do ?
// let reduxState = {
//     ID : 0,
//     name: 'Aamir',
//     age: 28,
//     city: "Hyderabad"
// }

// function reducer(state) {
//     return{...state, ID: state.ID + 1};
// }

// reduxState = reducer(reduxState);
// reduxState = reducer(reduxState);
// reduxState = reducer(reduxState);

//Behind the scenes this is how it works.

//TOPIC: state + action
//Along with the state we also pass action. action is a plane JS Object. How it looks like ?
// let reduxState = {
//     ID: 0,
//     name: 'Aamir',
//     age: 28,
//     city: "Hyderabad"
// }

// function reducer(state, action) {
//     console.log(action);    //Now it shows as 'undefined'
//     return{...state, ID: state.ID + 1};
// }

// reduxState = reducer(reduxState, action);    //redux will pass the action. We will pass action manually differently.

//we can directly create action as shown below:  
// reduxState = reducer(reduxState, {type: 'post/increment'});   //This is action's type. By convention post/increment is good to use.

//type: Describes what kind of action is happening (e.g., "add a todo", "delete a todo").

//Still it looks confusing ? Will understand with the real time scenario.

// let reduxState = {
//     ID: 0,
//     name: "Aamir",
//     age: 28,
//     city: "Hyderabad"
// }

// function reducer(state, action) {
//     // return{...state, ID: state.ID + 1};

//     //type: Describes what kind of action is happening (e.g., "add a todo", "delete a todo").

//     if(action.type === 'post/increment') {
//         return {...state, ID: state.ID + 1};
//     } else if(action.type === 'post/decrement') {
//         return {...state, ID: state.ID - 1};
//     } else if(action.type === 'post/incrementBy') {
//         // return {...state, ID: state.ID + 1, payload: action.payload + action.payload};
//         // payload: Extra data. Provides the extra details needed to perform that action (e.g., the todo text, or the ID of the todo to delete).
//         return {...state, ID: state.ID + action.payload}
//     }
//     return state;
// }

//What will redux do ?
// console.log(reduxState)

//type: Describes what kind of action is happening (e.g., "add a todo", "delete a todo").

// reduxState = reducer(reduxState, {type: 'post/increment'})
// console.log(reduxState)
// reduxState = reducer(reduxState, {type: 'post/increment'})
// console.log(reduxState)
// reduxState = reducer(reduxState, {type: 'post/decrement'})
// console.log(reduxState)
// //Incrementing values using Redux
// reduxState = reducer(reduxState, {type: 'post/incrementBy', payload: 10})   // Extra data needed to add
// console.log(reduxState)
// reduxState = reducer(reduxState, {type: 'post/incrementBy', payload: 15})   // Extra data needed to add
// console.log(reduxState)
// reduxState = reducer(reduxState, {type: 'post/incrementBy', payload: 7})    // Extra data needed to add
// console.log(reduxState)

//Reducer function reduces the state into a single value.
//Here above lines of code we have seen repetitive code for updating state management. 
//It helps you manage global state by providing a state management mechanism for JavaScript applications 
//that require state management and state management functions in Redux and provide 
//the ability to manage state management for JavaScript applications. 

//TOPIC: Redux
//We will install Redux & parcel (Globally)
//npm init -y (simple npm project gets created by this command)
//npm install -g parcel (parcel project gets created by this command)
//parcel what it does?
// It collects all the files in a bundle and starts a server.
// So we can work in a different different files
//npx parcel index.html
//npm i redux (we could have installed it earlier but we couldn't use it by importing, If we try to import it didn't get imported. Normal JS don't know node modules)


// import { createStore } from 'redux';  //We can use this only for learning purpose

// console.log(createStore)  //This is deprecated. we see some function of createStore
//createStore is a function that takes a reducer function as an argument and returns a store object.
//The store object has methods like getState(), dispatch(), subscribe(), and unsubscribe() that can be used
//to interact with the store.

// to see more create like object methods we use 
// console.dir(createStore)  //createStore() is a function
// createStore()  //We call it normally without console. Uncaught Error: Expected the root reducer to be a function. Instead, received: 'undefined'

// import { createStore } from 'redux';

// const initialState = {
//     ID: 0,
//     name: "Aamir",
//     age: 28,
//     city: "Hyderabad"
// }

// function reducer(state = initialState, action) {
//     if(action.type === 'post/increment') {
//         return {...state, ID: state.ID + 1};
//     } else if(action.type === 'post/decrement') {
//         return {...state, ID: state.ID - 1};
//     } else if(action.type === 'post/incrementBy') {
//         return {...state, ID: state.ID + action.payload}
//     }
//     return state;
// }

// const store = createStore(reducer)  //created store. if we use only store it shows. Uncaught ReferenceError: createStore is not defined

// console.log(store)
// console.log(store.getState());  //we get updated state.

// redux use reducer in behind the scene like shown below:
// reducer({currentStateValue}, {action})

// Then how do we update the state ?
//If we have to call the reducer, we call dispatch(behind the scene dispatch will call the reducer)
//How do we call dispatch?

// store.dispatch()

//who want reducer, action needs reducer. We can't call the reducer directly. In store we don't get reducer directly.
//Through dispatch we call reducer. in dispatch only we have to pass action parameter. 
//Like: dispatch(action) action must be plain obj

// store.dispatch({type: 'post/increment'})  //We have to pass action as a plain object.
// store.dispatch({type: 'testing the dispatch for reducer'})
// store.dispatch({type: 'post/increment'})  //action dispatch: using obj j{type: 'post/increment'} is action type for reducer action increment request.
// console.log(store.getState())
// store.dispatch({type: 'post/decrement'})
// console.log(store.getState())

//Whenever state changes, automatically we should know what solution.
//Now to solve the problem of calling multiple times console.
//log for checking the output this subscribe method will be useful (How ?).

// store.subscribe(() => {  //using callback function
//     console.log(store.getState())    //to get the state we use getState() function
// })

const initialState = {
    id: 0,
    name: 'subscribe',
    age: 29,
    city: 'Delhi'
}

const increment = 'post/increment'
const decrement = 'post/decrement'
const increaseBy = 'post/increaseBy'
const decreaseBy = 'post/decreaseBy'

function reducer(state= initialState, action) {
    if(action.type === increment) {
        return{...state, id: state.id + 1}
    } else if(action.type === decrement) {
        return{...state, id: state.id - 1}
    } else if(action.type === increaseBy) {
        return{...state, id: state.id + action.payload}
    } else if(action.type === decreaseBy) {
        return{...state, id: state.id - action.payload}
    }
}

const store = createStore(reducer)
console.log(store)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type: increment})
store.dispatch({type: decrement})
store.dispatch({type: increment, payload: 1})
store.dispatch({type: increaseBy, payload:10})
store.dispatch({type: decreaseBy, payload:5})
