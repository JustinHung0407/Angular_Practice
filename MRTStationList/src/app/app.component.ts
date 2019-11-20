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
    // ���b�A�קK�W�٩Τ��e�O�ŭȮɤ]�i�H�d��
    if (!this.name.trim() || !this.content.trim()) {
      return;
    }

    // �ΦW�ٸ򤺮e���ͤ@�ӯd������ƪ���
    const message = new Message(this.name, this.content);

    // �N�d������ƪ����i�e����
    this.messages.push(message);

    // �M�Ť��e
    this.content = "";
  }

}
