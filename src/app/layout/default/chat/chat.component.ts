import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebsocketService} from "../../../services/WebsocketService";
import {MessageObject} from "./messageObject";

import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {LoginUser} from "../../../model/LoginUserModel";
import {LoginToken} from "../../../model/LoginTokenModel";


@Component({
    selector: 'app-chat-component',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

    private stompClient;
    private SPRING_SOCKS = 'http://127.0.0.1:34444/webSocketHandler'
    private NODE_SOCKS = 'ws://127.0.0.1:8999';
    private ws;

    talkData :MessageObject[];
    userName : string;


    ngOnDestroy(): void {
        console.log('im die');
        this.springWebSocketDistroyed();
    }

    message : string;

    constructor() {
        this.talkData = [];

        let token : LoginToken = JSON.parse(localStorage.getItem('my-home-manager-app'));
        console.log(token);
        this.userName = token.username;
    }

    ngOnInit() {
        this.springWebSocketConnection();

    }

    springWebSocketConnection() {
        this.ws= new SockJS(this.SPRING_SOCKS);
        this.stompClient = Stomp.over(this.ws);
        // this is console.log clear
        // this.stompClient.debug = () => {} ;
        let _stomp = this;
        let _talkData = this.talkData;
        this.stompClient.connect({}, function () {
            _stomp.stompClient.subscribe("/push/chat", (message) => {
                if (message.body) {
                    let msg:MessageObject = JSON.parse(message.body);
                    _talkData.push(msg);
                }
            });
        });

        return this.stompClient;
    }

    sendMessage(message){
        this.stompClient.send("/app/chat" , {}, JSON.stringify({'message':message,'user':this.userName}));
    }

    springWebSocketDistroyed(){
        this.stompClient.disconnect();
        this.ws.close();
    }


}