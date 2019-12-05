import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem';

export class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map((item, key) =>
                    <TodoItem item={item} key={key} onItemDelete={() => this.props.onItemDelete(item)} onToggle={() => this.props.onToggle(item)} />
                )}
            </div>
        )
    }
}

export default TodoList
