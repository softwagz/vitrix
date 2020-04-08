import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <React.Fragment>
                 {
                    this.props.messages.map((obj, ind) => {
                        if (obj.user != "me") {
                            return (<div className="contact" key={ind}>
                                <p>{obj.text}</p>
                                <div className="timeMessage">
                                    <span> {obj.timestamp}</span>
                                </div>
                            </div>
                            )
                        } else {
                            return (<div className="user" key={ind}>
                                <p>{obj.text}</p>
                                <div className="timeMessage">
                                    <span> {obj.timestamp} </span>
                                </div>
                            </div>
                            )

                        }
                    })
                }  
            </React.Fragment>
        )
    }
}

export default Message;