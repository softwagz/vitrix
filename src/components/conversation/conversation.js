import React, { Component } from 'react';
import ContainerMessage from '../mensajes/containerMessage';

class Conversation extends Component {

    constructor(props) {
        super(props);

    }
    

    render() {


        return (
            <React.Fragment>
                <div className="col-md-12" onClick={this.props.cambiar} >
                    <div className="card-header conversation">
                        <h4>{this.props.data.contactName}</h4>
                        <p>{this.props.data.lastMsj}</p>
                        <div className="timeConversation">
                            <span>{this.props.data.time}</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default Conversation;