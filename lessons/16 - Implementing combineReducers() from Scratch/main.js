/*
 * Open the console
 * to see the state log.
 */

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

//const { combineReducers } = Redux;


/**

 Object.keys()

 var obj = {'a':'123','b':'345'};
 console.log(Object.keys(obj));  //['a','b']

 var obj1 = { 100: "a", 2: "b", 7: "c"};
 console.log(Object.keys(obj1)); // console: ["2", "7", "100"]



 array1.reduce(callbackfn[, initialValue])

 callbackfn : 必需。一个接受最多四个参数的函数。对于数组中的每个元素，reduce 方法都会调用 callbackfn 函数一次。
 initialValue : 可选。如果指定 initialValue，则它将用作初始值来启动累积。第一次调用 callbackfn 函数会将此值作为参数而非数组值提供
 返回值： 通过最后一次调用回调函数获得的累积结果。



 var sum = [1, 2, 3, 4].reduce(function (previous, current, index, array) {
  return previous + current;
});

 console.log(sum); // 10

 **/

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
          (nextState, key) => {
              nextState[key] = reducers[key](
                state[key],
                action
              );
              return nextState;
          }
        );
    };
}

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const { createStore } = Redux;
const store = createStore(todoApp);

console.log('Initial state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go shopping'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching TOGGLE_TODO.');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');







