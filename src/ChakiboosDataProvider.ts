import * as vscode from "vscode";

import Chakiboo from "./chakiboo";

class ChakiboosDataProvider<Chakiboo>
  implements vscode.TreeDataProvider<Chakiboo> {
  chakiboos: Chakiboo[];
  constructor(db_chakiboos) {
    let chakiboos: Chakiboo[] = db_chakiboos.map((db_chakiboo: any) => {
      return new Chakiboo(db_chakiboo);
    });
    this.chakiboos = chakiboos;
  }

  getTreeItem(element: Chakiboo) {
    return element;
  }

  getChildren() {
    return this.chakiboos;
  }
}

export default ChakiboosDataProvider;
