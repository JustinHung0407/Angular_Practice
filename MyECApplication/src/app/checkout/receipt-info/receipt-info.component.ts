import { Component, OnInit } from '@angular/core';
import { appPath } from '../../app-path.const';
import { SendType } from './send-type.enum';

@Component({
  selector: 'app-receipt-info',
  templateUrl: './receipt-info.component.html',
  styleUrls: ['./receipt-info.component.css']
})
export class ReceiptInfoComponent implements OnInit {
  /**
   * 給 Template 用的路由定義
   */
  path = appPath;

  /**
   * 給 Template 用的寄送方式列舉
   */
  sendType = SendType;

  /**
   * 當前的寄送類型，預設使用 Email
   */
  selectedType = SendType.EMAIL;
  constructor() { }

  ngOnInit() {
  }

  /**
   * 切換寄送類型
   */
  switch(type: number): void {
    this.selectedType = type;
  }

  /**
   * 傳入的寄送類型是否為當前所選擇的寄送類型
   */
  didSelected(type: number): boolean {
    return this.selectedType === type;
  }

}
