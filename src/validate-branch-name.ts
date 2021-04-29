"use strict";

import { getConf } from "./get-config";
export function validateBranchName(branchName: string) {
  const { pattern, errorMsg, sandbox, showPattern } = getConf();
  const validBranchNameRegExp = new RegExp(pattern, "g");
  const result = validBranchNameRegExp.test(branchName);

  if (!result) {
    let errorMessage = `${errorMsg} \n` + `Branch Name: "${branchName}" \n`;
    errorMessage += sandbox ? `Sandbox: "${sandbox}" \n` : "";
    errorMessage += showPattern
      ? `Pattern:"${validBranchNameRegExp.toString()}" \n`
      : "";
    console.error("\x1b[31m%s\x1b[0m", errorMessage);
  }
  return result;
}
