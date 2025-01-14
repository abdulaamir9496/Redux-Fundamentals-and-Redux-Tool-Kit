// let state = {
//     count : 0,
//     name: 'Aamir',
//     age: 28,
//     city: "Hyderabad"
// }
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
let reduxState = {
    ID: 0,
    name: "Aamir",
    age: 28,
    city: "Hyderabad"
};
function reducer(state, action) {
    // return{...state, ID: state.ID + 1};
    //type: Describes what kind of action is happening (e.g., "add a todo", "delete a todo").
    if (action.type === 'post/increment') return {
        ...state,
        ID: state.ID + 1
    };
    else if (action.type === 'post/decrement') return {
        ...state,
        ID: state.ID - 1
    };
    else if (action.type === 'post/incrementBy') // return {...state, ID: state.ID + 1, payload: action.payload + action.payload};
    // payload: Extra data. Provides the extra details needed to perform that action (e.g., the todo text, or the ID of the todo to delete).
    return {
        ...state,
        ID: state.ID + action.payload
    };
    return state;
}
//What will redux do ?
console.log(reduxState);
//type: Describes what kind of action is happening (e.g., "add a todo", "delete a todo").
reduxState = reducer(reduxState, {
    type: 'post/increment'
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/increment'
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/decrement'
});
console.log(reduxState);
//Incrementing values using Redux
reduxState = reducer(reduxState, {
    type: 'post/incrementBy',
    payload: 10
}) // Extra data needed to add
;
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/incrementBy',
    payload: 15
}) // Extra data needed to add
;
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/incrementBy',
    payload: 7
}) // Extra data needed to add
;
console.log(reduxState) //Reducer function reduces the state into a single value.
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
;

//# sourceMappingURL=index.672d4772.js.map
