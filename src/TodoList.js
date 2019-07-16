import React, { Component } from "react";

class TodoList extends Component {
    constructor (props) {
        super(props);

        this.addItem.bind(this);

    }

    addItem()
}
    render() {
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="Enter Task">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;