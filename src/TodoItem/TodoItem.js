import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        const { title, finished } = this.props.item;

        return (
            <div>
                <input type="checkbox" checked={finished} onClick={this.props.onToggle} />
                {title}
                <button onClick={this.props.onItemDelete}>X</button>
            </div>
        )
    }
}

export default TodoItem
