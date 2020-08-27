import { ofType, combineEpics } from 'redux-observable'
import { switchMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const completeTodoEpic = action$ => action$.pipe(
    ofType('COMPLETE_TODO'),
    flatMap(action => ajax({
        url: 'https://foo.bar.com/complete-todo',
        method: 'POST',
        body: { id: action.payload }
    })),
    map(data => data.response),
    map(todo => ({ type: 'COMPLEE_TODO_SUCCESS', payload: todo }))
)
const addTodoEpic = action$ => action$.pipe(
    ofType('ADD_TODO'),
    flatMap(action => ajax({
        url: 'https://foo.bar.com/add-todo',
        method: 'POST',
        body: { text: action.payload }
    })),
    map(data => data.response),
    map(todo => ({ type: 'ADD_TODO_SUCCESS', payload: todo }))
)

const rootEpic = combineEpics(completeTodoEpic, addTodoEpic)