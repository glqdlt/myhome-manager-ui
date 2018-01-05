import {Component, OnInit} from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

import * as sockJs from 'sockjs';
import {WebsocketService} from "../../services/WebsocketService";

@Component({
    selector: 'app-chat-component',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    //http://www.mmrath.com/post/websockets-with-angular2-and-spring-boot/

    message : string;
     wasWebSocket = 'http://127.0.0.1:34444/webSocketHandler'
    private stompClient;

    constructor(private websocketService : WebsocketService) {

        // this.websocketService.nodeWebSocketServerConnection();

        this.initializeWebSocketConnection();
    }

    //https://medium.com/oril/spring-boot-websockets-angular-5-f2f4b1c14cee
    initializeWebSocketConnection(){
        let ws = new SockJS(this.wasWebSocket);
        this.stompClient = Stomp.over(ws);
        let _stomp = this;
        this.stompClient.connect({}, function() {
            _stomp.stompClient.subscribe("/chat", (message) => {
                if(message.body) {
                    console.log(message.body);
                }
            });
        });
    }

    sendMessage(){
        this.stompClient.send("/app/chat" , {}, this.message);
    }


    ngOnInit() {
    }


}
