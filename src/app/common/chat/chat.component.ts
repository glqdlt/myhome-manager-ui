import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "../../services/WebsocketService";

@Component({
    selector: 'app-chat-component',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    message : string;

    constructor(private webSocksService : WebsocketService) {
    }

    ngOnInit() {
        this.webSocksService.springWebSocketConnection();

    }

    sendMessage(message){
        this.webSocksService.sendMessage(message);
    }


}
