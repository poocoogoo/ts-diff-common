import { InnerEnv } from "./Env";
import { InnerWMEnv } from "./WMEnv";
import {InnerHomeURL, innerAppBizId, innerIOSLogicFunc} from "./RNUtils";

export const Greeter = (name: string) => {
  return `hello ${name}`;
};

export const Env = InnerEnv;
export const WMEnv = InnerWMEnv;
export const HomeURL = InnerHomeURL;
export const iOSLogicFunc = innerIOSLogicFunc;
export const appBizId = innerAppBizId;
