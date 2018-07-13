"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
const axios = require("axios");

import copyChakiboo from "./copyChakiboo";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "kettlecat" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "extension.copyChakiboo",
    () => {
      // The code you place here will be executed every time your command is executed

      axios({
        url: "https://kettlecat-graphql.herokuapp.com/graphql",
        method: "get",
        data: {
          query: `
            query{
              chakiboos{
                id
                title
                description
              }
            }
          `
        }
      })
        .then(result => {
          let db_chakiboos = result.data.data.chakiboos;
          copyChakiboo(db_chakiboos);
        })
        .catch(err => {
          console.log(err);
        });
    }
  );

  let connectionButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    0
  );
  connectionButton.text = "Test";
  connectionButton.command = "extension.copyChakiboo";
  connectionButton.show();

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
