import * as vscode from 'vscode';
import { uploadEntry } from './events/uploadEntry';
import { DepNodeProvider, Dependency } from './nodeDependencies';

// 激活事件
export function activate(context: vscode.ExtensionContext) {
	console.log("---------------组件激活---------------");

	if (vscode.workspace.workspaceFolders?.length === 0) {
		return
	}
	
	// @ts-ignore
	const rootPath =  vscode.workspace.workspaceFolders[0]?.uri._fsPath
	
	// @ts-ignore
	console.log('文件夹目录', rootPath)
	console.log('旧版本目录', vscode.workspace.rootPath)
	const nodeDependenciesProvider = new DepNodeProvider(rootPath || "");
	vscode.window.registerTreeDataProvider('nodeDependencies', nodeDependenciesProvider);
	vscode.commands.registerCommand('nodeDependencies.refreshEntry', () => nodeDependenciesProvider.refresh());
	vscode.commands.registerCommand('nodeDependencies.uploadEntry', uploadEntry);
}

// 销毁周期
export function deactivate() {
	console.log("---------------銷毀---------------");
}
