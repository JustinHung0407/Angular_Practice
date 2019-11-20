export class Todo {
         private title = '';
         private completed = false;
         private editMode = false;

         constructor(title: string) {
           this.title = title || ''; // 為避免傳入的值為 Falsy 值，稍作處理
         }
         getTitle(): string {
           return this.title;
         }
         get done(): boolean {
           return this.completed;
         }
         toggleCompletion(): void {
           this.completed = !this.completed;
         }

         get editing(): boolean {
           return this.editMode;
         }
         set editable(bl: boolean) {
           this.editMode = bl;
         }

         setTitle(title: string): void {
           this.title = title;
         }
         /**
          * 設定是否完成
          */
         setCompleted(completed: boolean): void {
           this.completed = completed;
         }
       }
