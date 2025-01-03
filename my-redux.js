//create function returns a object which has 3 properties.

export function myCreateStore() {
    const store = {
        // manually-created methods: getState(), dispatch(), subscribe() methods
        getState() {
            console.log('getState');
        },
        dispatch() {
            console.log('dispatch');
        },
        subscribe() {
            console.log('subscribe');
        }

        // auto-generated:
        // state: {},
        // listeners: [],
        // getState() {
        //     return this.state;
        // },
        // dispatch(action) {
        //     this.state = action(this.state);
        //     this.listeners.forEach(listener => listener());
        // },
        // subscribe(listener) {
        //     this.listeners.push(listener);
        //     return () => {
        //         this.listeners = this.listeners.filter(l => l !== listener);
        //     };
        // }
    }
    return store;
}
