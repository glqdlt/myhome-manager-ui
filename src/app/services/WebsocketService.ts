import {Injectable} from '@angular/core';
import * as Rx from "rxjs/Rx";

@Injectable()
export class WebsocketService {

    constructor() {

    }

    nodeWebSocketServerConnection(){
        const ws = new WebSocket('ws://127.0.0.1:8999');

        ws.onmessage = (event) =>{
            console.log(event.data);
            console.log(event);
        }
        ws.onerror = (event) =>{
            console.error(event);
        }
    }


}