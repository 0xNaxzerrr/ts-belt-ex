import { ArrayFn1 } from "./array/ex1";
import { ArrayFn2 } from "./array/ex2";
import { ArrayFn3 } from "./array/ex3";
import { ArrayFn4 } from "./array/ex4";
import { ArrayFn5 } from "./array/ex5";
import { ArrayFn6 } from "./array/ex6";
import { ArrayFn7 } from "./array/ex7";
import { ArrayFn8 } from "./array/ex8";
import { ArrayFn9 } from "./array/ex9";
import { ArrayFn10 } from "./array/ex10";

import { ArrayFn30 } from "./array/ex30";
import { ArrayFn29 } from "./array/ex29";
import { ArrayFn28 } from "./array/ex28";
import { ArrayFn27 } from "./array/ex27";
import { ArrayFn26 } from "./array/ex26";
import { ArrayFn25 } from "./array/ex25";
import { ArrayFn24 } from "./array/ex24";
import { ArrayFn23 } from "./array/ex23";
import { ArrayFn22 } from "./array/ex22";
import { ArrayFn21 } from "./array/ex21";
import { ArrayFn20 } from "./array/ex20";

import { resultFn1 } from "./result/ex1";
import { resultFn2 } from "./result/ex2";
import { resultFn3 } from "./result/ex3";
import { resultFn4 } from "./result/ex4";
import { resultFn5 } from "./result/ex5";
import { resultFn6 } from "./result/ex6";
import { resultFn7 } from "./result/ex7";

import { optionFn1 } from "./option/ex1";
import { optionFn2 } from "./option/ex2";
import { optionFn3 } from "./option/ex3";
import { optionFn4 } from "./option/ex4";
import { optionFn5 } from "./option/ex5";
import { optionFn6 } from "./option/ex6";
import { optionFn7 } from "./option/ex7";

import { functionFn1 } from "./function/ex1";
import { functionFn2 } from "./function/ex2";
import { functionFn3 } from "./function/ex3";
import { functionFn4 } from "./function/ex4";
import { functionFn5 } from "./function/ex5";
import { functionFn6 } from "./function/ex6";
import { functionFn7 } from "./function/ex7";

import { DictFn1 } from "./dict/ex1";
import { DictFn2 } from "./dict/ex2";
import { DictFn3 } from "./dict/ex3";
import { DictFn4 } from "./dict/ex4";
import { DictFn5 } from "./dict/ex5";
import { DictFn6 } from "./dict/ex6";
import { DictFn7 } from "./dict/ex7";

function main() {
  // ARRAY
  const executeAndLog = (fnArray: Array<() => any>, label: string) => {
    console.log(`--- ${label} ---`);
    fnArray.forEach((fn, index) => {
      const result = fn();
      console.log(`${label} ${index + 1}:`, result);
    });
  };

  // ARRAY Functions
  const arrayFns = [
    ArrayFn1,
    ArrayFn2,
    ArrayFn3,
    ArrayFn4,
    ArrayFn5,
    ArrayFn6,
    ArrayFn7,
    ArrayFn8,
    ArrayFn9,
    ArrayFn10,
    ArrayFn20,
    ArrayFn21,
    ArrayFn22,
    ArrayFn23,
    ArrayFn24,
    ArrayFn25,
    ArrayFn26,
    ArrayFn27,
    ArrayFn28,
    ArrayFn29,
    ArrayFn30,
  ];
  executeAndLog(arrayFns, "ArrayFn");

  // RESULT
  const resultFns = [
    resultFn1,
    resultFn2,
    resultFn3,
    resultFn4,
    resultFn5,
    resultFn6,
    resultFn7,
  ];
  executeAndLog(resultFns, "ResultFn");

  // OPTION
  const optionFns = [
    optionFn1,
    optionFn2,
    optionFn3,
    optionFn4,
    optionFn5,
    optionFn6,
    optionFn7,
  ];
  executeAndLog(optionFns, "OptionFn");

  // FUNCTION
  const functionFns = [
    functionFn1,
    functionFn2,
    functionFn3,
    functionFn4,
    functionFn5,
    functionFn6,
    functionFn7,
  ];
  executeAndLog(functionFns, "FunctionFn");

  // DICT
  const dictFns = [
    DictFn1,
    DictFn2,
    DictFn3,
    DictFn4,
    DictFn5,
    DictFn6,
    DictFn7,
  ];
  executeAndLog(dictFns, "DictFn");
}
main();
