import React, {Component} from 'react';

class Counter extends Component {
    constructor() {
        super()

        this.state = {
            count : 0
        }
    }
    Increment(){
        // this.setState({
        //     count: this.state.count +1
        // })
        this.setState(saeed =>({
            count: saeed.count +1
        }))
    }
    render() {
        return (
            <div>
                count - {this.state.count}
                <button onClick={()=> this.Increment()}>increment</button>
            </div>
        );
    }
}

export default Counter;