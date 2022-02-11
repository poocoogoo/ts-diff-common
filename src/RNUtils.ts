import {InnerEnv} from "./Env";

export const InnerHomeURL = InnerEnv.isIOS() ? 'http://xxxxxxxyyyyyzzzz.ios.cn' : 'http://xxxxxxxyyyyyzzzz.android.cn';

export function innerIOSLogicFunc() {
	const greetText = "hello iOS";
	const addedText = "新增iOS逻辑";
}

export function innerAppBizId() {
	if (InnerEnv.isWM()) {
		return 9191;
	} else if (InnerEnv.isMT()) {
		return 9192;
	} else if (InnerEnv.isDP()) {
		return 9193;
	}
}
