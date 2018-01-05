import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import {WebsocketService} from "./WebsocketService";

const CHAT_URL = 'ws://127.0.0.1:34444/';

export interface Message {
    message: string,
    user: string
}

@Injectable()
export class ChatService {


    constructor() {
    }
}