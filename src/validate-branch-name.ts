"use strict";

import { getConf } from "./get-config";
export function validateBranchName(branchName: string) {
  const { pattern, errorMsg } = getConf();
  const validBranchNameRegExp = new RegExp(pattern, "g");
  const result = validBranchNameRegExp.test(branchName);
  if (!result) {
    console.error(
      "\x1b[31m%s\x1b[0m",
      `${errorMsg} \n` +
        `Branch Name: "${branchName}" \n` +
        `Pattern:"${validBranchNameRegExp.toString()}" \n`
    );
  }
  return result;
}
