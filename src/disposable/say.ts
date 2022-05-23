import * as vscode from 'vscode'

export const say = vscode.commands.registerCommand('functree.red', () => {
	vscode.window.showWarningMessage('hello2')
})
