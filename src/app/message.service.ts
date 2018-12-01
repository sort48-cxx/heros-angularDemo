import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {//添加log
    console.log(message);
    this.messages.push(message);
  }
  
  clear() {//清除log
    this.messages = [];
  }
  constructor() {}
}
