// //creating own redux : This is how libraries are created as shown below. 
// //We can create our own library by creating a store and then exporting it. 
// //Just like we did for example of my-redux.

// //create function returns a object which has 3 properties.

// export function myCreateStore(reducer) {   //got access of reducer from myStore() reducer. reducer is a function which takes (state, action). 1st time it is undefined thats why we call it our own initial state.
//     let state   //to return a state, we have created a state
//     const listeners = []  //we are keeping this list of listeners(myStore.subscribe(()=>{console.log()}) listeners) in a array, reason being we may have multiple listeners
//     const store = {
//         // manually-created methods: getState(), dispatch(), subscribe() methods
//         getState() {
//             // console.log('getState');
//             return state;
//         },
//         dispatch(action) {  //Here action has object. It can be any type. Calling action and passing to reducer. Where we get reducer from ? Whenever we call myCreateStore() we get reducer from const myStore = myCreateStore(reducer);
//             // console.log('dispatch');
//             //after changing state we are calling listeners as shown below. So that we get updated state. If we call we get previous state.
//             state = reducer(state, action);  //we get updated state from reducer which we assigned to state(let state). By default @@INIT action it will dispatch to reducer
//             listeners.forEach((listener) => {   //for calling each function(listener) we use loop(foreach)
//                 listener()  
//             })
//         },
//         subscribe(listener) {   //we have to pass listeners in subscribe() method 
//             // console.log('subscribe');
//             listeners.push(listener);  //When we subscribe() it won't work, it works when it is dispatched. Whenever something is dispatched all our dispatch methods will run.
//             return function() {
//                 //It removes the error from console for unsubscribe. But still unsubscribe is not working. 
//                 //Because we are not removing the listener from the array. We are just returning.
//                 //Then how to remove ? Here we use splice method to remove.
//                 //Example of splice method: array.splice(index, howmany, item1, item2, itemN to be removed) 
//                 //arr = [1, 2, 3] arr.splice(1, 1) it removes 2 and returns same removed item. 
//                 //when we check arr it has arr[1,3]
//                 //1st we have to find index for removing. how to find index ?
//                 const listenerIndex = listeners.findIndex((registeredListeners) => registeredListeners === listener)    //in findIndex we have to pass callback function to return something. by this point we get index of the corresponding unsubscribe of the listener
//                 listeners.splice(listenerIndex, 1)  //all the listeners from the corresponding unsubscribe listeners data is removed from the console.
//             }
//         }
//         //subscribe method does one more thing. It return something called unsubscribe method. 
//         //when it is called it removes subscribe method.

//         // auto-generated:
//         // state: {},
//         // listeners: [],
//         // getState() {
//         //     return this.state;
//         // },
//         // dispatch(action) {
//         //     this.state = action(this.state);
//         //     this.listeners.forEach(listener => listener());
//         // },
//         // subscribe(listener) {
//         //     this.listeners.push(listener);
//         //     return () => {
//         //         this.listeners = this.listeners.filter(l => l !== listener);
//         //     };
//         // }

//     }
//     store.dispatch({type: '@@INIT'})   //we can give anything in type here. Here we have given redux type
//     return store;
// }
