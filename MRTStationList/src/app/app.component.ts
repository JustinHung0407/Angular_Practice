import { Component } from '@angular/core';
import { stationList } from './station-list.const';
import { Message } from "./message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // MRT Practice
  title = 'MRTStationList';
  list = stationList;

  // Form Practice
  name = '';
  content = '';
  messages: Message[] = [];

  addMessage(): void {
    // 防呆，避免名稱或內容是空值時也可以留言
    if (!this.name.trim() || !this.content.trim()) {
      return;
    }

    // 用名稱跟內容產生一個留言的資料物件
    const message = new Message(this.name, this.content);

    // 將留言的資料物件放進容器裡
    this.messages.push(message);

    // 清空內容
    this.content = "";
  }

}
