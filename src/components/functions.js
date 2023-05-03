import React, {Component} from 'react'

export class Functions extends Component {

    ClickMe(){
        console.log("salaaaam");
    }
    render() {

        return (
            <div>
                <button onClick={this.ClickMe}>Click</button>
            </div>
        )
    }
}

export default Functions
