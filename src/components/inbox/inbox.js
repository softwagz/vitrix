import React, { Component } from 'react';
import Conversation from '../conversation/conversation'
import ContainerMessage from '../mensajes/containerMessage'
class Inbox extends Component {

    constructor(props) {
        super(props)
        this.state = { verConversation: true };
    }

    componentDidMount() {
        this.setState({ verConversation: !this.state['verConversation'] });

    }

    cambiar = (obj) => {
        this.setState({ verConversation: !this.state['verConversation'] });
        if (typeof obj == "string") {
            console.log('soy id');
            this.conversations.map((user,ind) => {
                if(user.id == obj){
                    this.conversationSelected = user.messages;
                }
            })

            
        } else {
            return 'soy calse';
        }
    }

    conversations = [
        {
            id: 'a',
            contactName: "La chuchii",
            lastMsj: "Hola Chucchi que tal estas?",
            time: "05:53 pm",
            messages: [
                {
                    user: "a",
                    text: "Hola Gerardo que tal estas? ",
                    timestamp: 123123123123
                },
                {
                    user: "me",
                    text: "Hola Chuchii, si ya llegue, puedes venir",
                    timestamp: 123123123123
                },
                {
                    user: "a",
                    text: "Estas en tu casa?",
                    timestamp: 123123123123
                },
                {
                    user: "a",
                    text: "Hola buenas Noches",
                    timestamp: 123123123123
                },
            ]
        },
        {
            id: 'b',
            contactName: "Latisher",
            lastMsj: "Hola Latisher que tal estas?",
            time: "05:53 pm",
            messages: [
                {
                    user: "b",
                    text: "Hola Gerardo que tal estas? ",
                    timestamp: 123123123123
                },
                {
                    user: "me",
                    text: "Hola Carleanis, si ya llegue, puedes venir",
                    timestamp: 123123123123
                },
                {
                    user: "b",
                    text: "Estas en tu casa?",
                    timestamp: 123123123123
                },
                {
                    user: "b",
                    text: "Hola buenas Noches",
                    timestamp: 123123123123
                },
            ]
        },
        {
            id: 'c',
            contactName: "Carleanis",
            lastMsj: "Hola Gerardo que tal estas?",
            time: "05:53 pm",
            messages: [
                {
                    user: "c",
                    text: "Hola Gerardo que tal estas? ",
                    timestamp: 123123123123
                },
                {
                    user: "me",
                    text: "Hola Carleanis, si ya llegue, puedes venir",
                    timestamp: 123123123123
                },
                {
                    user: "c",
                    text: "Estas en tu casa?",
                    timestamp: 123123123123
                },
                {
                    user: "c",
                    text: "Hola buenas Noches",
                    timestamp: 123123123123
                },
            ]
        }
    ]

    conversationSelected = [];


        render() {



    if (this.state['verConversation']) {
       return  <ContainerMessage cambiar={this.cambiar} messages = {this.conversationSelected} />

    } else {
        return (<div className="inbox" >
            <div className="text-center">
                <h3>Inbox</h3>
            </div>
            {
                this.conversations.map((obj, ind) => {
                    return <Conversation data={obj} key={ind} cambiar={this.cambiar} cambiar={() => this.cambiar(obj.id)} />
                })
            }
        </div>)

    }
}
}

export default Inbox;