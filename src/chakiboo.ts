import * as vscode from "vscode";

//declaring a class to manage chakiboos
class Chakiboo extends vscode.TreeItem {
  id: string;
  title: string;
  description: string;
  language: string;
  constructor(db_chakiboo: any) {
    super(db_chakiboo.title);
    this.id = db_chakiboo.id;
    this.title = db_chakiboo.title;
    this.description = db_chakiboo.description;
    this.language = db_chakiboo.language;
    this.tooltip = db_chakiboo.description;
  }
}

export default Chakiboo;
