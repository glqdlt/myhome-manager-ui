import {Injectable} from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

@Injectable()
export class WebsocketService {

    private stompClient;
    private SPRING_SOCKS = 'http://127.0.0.1:34444/webSocketHandler'
    private NODE_SOCKS = 'ws://127.0.0.1:8999';

    constructor() {

    }

    nodeWebSocketServerConnection() {
        const ws = new WebSocket(this.NODE_SOCKS);

        ws.onmessage = (event) => {
            console.log(event.data);
            console.log(event);
        }
        ws.onerror = (event) => {
            console.error(event);
        }
    }

    springWebSocketConnection() {
        let ws = new SockJS(this.SPRING_SOCKS);
        this.stompClient = Stomp.over(ws);
        let _stomp = this;
        this.stompClient.connect({}, function () {
            _stomp.stompClient.subscribe("/chat", (message) => {
                if (message.body) {
                    console.log(message.body);
                }
            });
        });
    }

    sendMessage(message){
        this.stompClient.send("/app/chat" , {}, JSON.stringify({'message':message}));
    }


}