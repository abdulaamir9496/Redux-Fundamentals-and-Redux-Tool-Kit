let state = {
    count : 0
}

let prevState = state;

// state.count = state.count + 1;
// state.count = state.count + 1;
// state.count = state.count + 1;

function increment() {
    //*** Mutating State ***//
    // state.count = state.count + 1;

    //*** Not Mutating State ***//
    state = { count: state.count + 1};
}

increment();
console.log(state);

increment();
console.log(state);

increment();
console.log(state);

//Redux says we should'nt call like this.
// We should not mutate the state. Without mutating the state we should change the state.
