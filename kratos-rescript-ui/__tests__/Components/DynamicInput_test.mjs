// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Jest from "@glennsl/bs-jest/src/jest.mjs";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as JestDom from "bs-jest-dom/src/JestDom.mjs";
import * as DynamicInput from "../../src/Components/DynamicInput.mjs";
import * as ReactTestingLibrary from "@rescriptbr/react-testing-library/src/ReactTestingLibrary.mjs";

Jest.describe("DynamicInputComponent", (function (param) {
        var createComponent = function (param) {
          return React.createElement(DynamicInput.make, {
                      name: "password",
                      type: "password",
                      required: true
                    });
        };
        var createComponentWithLabel = function (param) {
          return React.createElement(DynamicInput.make, {
                      name: "password",
                      type: "password",
                      label: {
                        context: undefined,
                        id: 10,
                        text: "Cool Label",
                        type: "info"
                      },
                      required: true
                    });
        };
        Jest.test("when label is provided then matches expected", (function (param) {
                return Jest.Expect.toMatchSnapshot(Jest.Expect.expect(ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, createComponentWithLabel(undefined)).container));
              }));
        Jest.test("when no label is provided then matches snapshot", (function (param) {
                return Jest.Expect.toMatchSnapshot(Jest.Expect.expect(ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, createComponent(undefined)).container));
              }));
        return Jest.test("when label is provided then has visible label", (function (param) {
                      var partial_arg = {
                        NAME: "Str",
                        VAL: "Cool Label"
                      };
                      var arg = function (param) {
                        return JestDom.toHaveTextContent(partial_arg, param);
                      };
                      var partial_arg$1 = {
                        NAME: "Str",
                        VAL: "label"
                      };
                      var arg$1 = function (param, param$1) {
                        return ReactTestingLibrary.getByTestId(partial_arg$1, param, param$1);
                      };
                      return Curry._2(arg, undefined, expect(Curry._2(arg$1, undefined, ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, createComponentWithLabel(undefined)))));
                    }));
      }));

export {
  
}
/*  Not a pure module */
