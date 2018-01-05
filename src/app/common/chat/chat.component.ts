import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebsocketService} from "../../services/WebsocketService";
import {MessageObject} from "./messageObject";

@Component({
    selector: 'app-chat-component',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

    talkData : MessageObject[];

    userName : string = 'tester';
    ngOnDestroy(): void {
        console.log('im die');
        this.webSocksService.springWebSocketDistroyed();
    }

    message : string;

    constructor(private webSocksService : WebsocketService) {
        this.talkData = [{message : 'hello', user : this.userName}];
    }

    ngOnInit() {
        this.webSocksService.springWebSocketConnection();

    }


    sendMessage(message){
        this.webSocksService.sendMessage(message,this.userName);
    }


}
