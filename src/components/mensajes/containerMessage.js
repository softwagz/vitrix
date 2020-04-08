import React, { Component } from 'react'
import Messages from './messages'

class ContainerMessage extends Component {
    constructor(props) {
        super(props)

        this.state = {mesagges:[]}
    }

    

    componentDidMount(){
    }

    render() {

        return (
            <React.Fragment>
                {
                    console.log('los mensajes son ', this.props.messages)
                }
                <div className="messageContainer">
                    <div className="card-header cabeceraMsj">
                        <h3 className="mr-auto">Nombre de l</h3>
                        <span className="btn btn-danger btn-volver" onClick={this.props.cambiar} >Volver</span>
                    </div>
                    <Messages messages = {this.props.messages} />

                </div>
            </React.Fragment>
        )
    }
}

export default ContainerMessage;