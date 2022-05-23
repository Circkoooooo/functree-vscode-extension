import * as vscode from 'vscode'
import { say } from './say'

const disposables: vscode.Disposable[] = [say]

export default disposables
