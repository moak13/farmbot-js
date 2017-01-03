import * as Corpus from "./corpus";
import { Dictionary } from "./interfaces";

export function uuid() {
  let template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  let replaceChar = function (c: string) {
    let r = Math.random() * 16 | 0;
    let v = c === "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  };
  return template.replace(/[xy]/g, replaceChar);
};

export function pick<T>(target: { [k: string]: T | undefined },
  value: string,
  fallback: T) {
  return target[value] || fallback;
}

// TODO: Make this a generic.
export function assign(target: Dictionary<any>, ...others: Dictionary<any>[]) {
  others.forEach(function (dict) {
    for (let k in dict) {
      target[k] = dict[k];
    };
  });
  return target;
}

export function isCeleryScript(x: any): x is Corpus.CeleryNode {
  // REMEMBER: (typeof null === "object"). PS: Sorry :(
  let isObj = (o: any) => o && JSON.stringify(o)[0] === "{";
  let hasKind = (o: any) => typeof o.kind === "string";
  let hasArgs = (o: any) => isObj(o) && !!o.args;

  return isObj(x) && hasKind(x) && hasArgs(x);
}

export function coordinate(x: number, y: number, z: number): Corpus.Coordinate {
  return { kind: "coordinate", args: { x, y, z } };
}

export function rpcRequest(): Corpus.RpcRequest {
  return {
    kind: "rpc_request",
    args: {
      data_label: uuid()
    }
  };
}
