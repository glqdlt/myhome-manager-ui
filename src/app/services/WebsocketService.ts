import {Injectable} from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

@Injectable()
export class WebsocketService {

    private stompClient;
    private SPRING_SOCKS = 'http://127.0.0.1:34444/webSocketHandler'
    private NODE_SOCKS = 'ws://127.0.0.1:8999';
    private ws;

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


    // https://stomp-js.github.io/stomp-websocket/codo/extra/docs-src/Usage.md.html#toc_5
    springWebSocketConnection() {
       this.ws= new SockJS(this.SPRING_SOCKS);
        this.stompClient = Stomp.over(this.ws);
        // this is console.log clear
        // this.stompClient.debug = () => {} ;
        let _stomp = this;
        this.stompClient.connect({}, function () {
            _stomp.stompClient.subscribe("/chat", (message) => {
                if (message.body) {
                }
            });
        });

        return this.stompClient;
    }

    sendMessage(message, user){
        this.stompClient.send("/app/chat" , {}, JSON.stringify({'message':message,'user':user}));
    }

    springWebSocketDistroyed(){
        this.stompClient.disconnect();
        this.ws.close();
    }


}