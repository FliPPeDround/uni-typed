import type {
  Input,
  InputConfirmType,
  InputInputMode,
  InputInstance,
  InputOnBlur,
  InputOnBlurDetail,
  InputOnBlurEvent,
  InputOnConfirm,
  InputOnConfirmDetail,
  InputOnConfirmEvent,
  InputOnFocus,
  InputOnFocusDetail,
  InputOnFocusEvent,
  InputOnInput,
  InputOnInputDetail,
  InputOnInputEvent,
  InputOnKeyboardheightchange,
  InputOnKeyboardheightchangeDetail,
  InputOnKeyboardheightchangeEvent,
  InputProps,
  InputTextContentType,
  InputType,
  InputValue,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("Input", () => {
  expectTypeOf<InputValue>().toBeString();
  expectTypeOf<InputValue>().toEqualTypeOf<UniHelper.InputValue>();

  expectTypeOf<InputType>().toBeString();
  expectTypeOf<InputType>().toEqualTypeOf<UniHelper.InputType>();

  expectTypeOf<InputTextContentType>().toBeString();
  expectTypeOf<InputTextContentType>().toEqualTypeOf<UniHelper.InputTextContentType>();

  expectTypeOf<InputInputMode>().toBeString();
  expectTypeOf<InputInputMode>().toEqualTypeOf<UniHelper.InputInputMode>();

  expectTypeOf<InputConfirmType>().toBeString();
  expectTypeOf<InputConfirmType>().toEqualTypeOf<UniHelper.InputConfirmType>();

  expectTypeOf<InputOnInputDetail>().toBeObject();
  expectTypeOf<InputOnInputDetail>().toEqualTypeOf<UniHelper.InputOnInputDetail>();

  expectTypeOf<InputOnInputEvent>().toBeObject();
  expectTypeOf<InputOnInputEvent>().toEqualTypeOf<UniHelper.InputOnInputEvent>();

  expectTypeOf<InputOnInput>().toBeFunction();
  expectTypeOf<InputOnInput>().toEqualTypeOf<UniHelper.InputOnInput>();

  expectTypeOf<InputOnFocusDetail>().toBeObject();
  expectTypeOf<InputOnFocusDetail>().toEqualTypeOf<UniHelper.InputOnFocusDetail>();

  expectTypeOf<InputOnFocusEvent>().toBeObject();
  expectTypeOf<InputOnFocusEvent>().toEqualTypeOf<UniHelper.InputOnFocusEvent>();

  expectTypeOf<InputOnFocus>().toBeFunction();
  expectTypeOf<InputOnFocus>().toEqualTypeOf<UniHelper.InputOnFocus>();

  expectTypeOf<InputOnBlurDetail>().toBeObject();
  expectTypeOf<InputOnBlurDetail>().toEqualTypeOf<UniHelper.InputOnBlurDetail>();

  expectTypeOf<InputOnBlurEvent>().toBeObject();
  expectTypeOf<InputOnBlurEvent>().toEqualTypeOf<UniHelper.InputOnBlurEvent>();

  expectTypeOf<InputOnBlur>().toBeFunction();
  expectTypeOf<InputOnBlur>().toEqualTypeOf<UniHelper.InputOnBlur>();

  expectTypeOf<InputOnConfirmDetail>().toBeObject();
  expectTypeOf<InputOnConfirmDetail>().toEqualTypeOf<UniHelper.InputOnConfirmDetail>();

  expectTypeOf<InputOnConfirmEvent>().toBeObject();
  expectTypeOf<InputOnConfirmEvent>().toEqualTypeOf<UniHelper.InputOnConfirmEvent>();

  expectTypeOf<InputOnConfirm>().toBeFunction();
  expectTypeOf<InputOnConfirm>().toEqualTypeOf<UniHelper.InputOnConfirm>();

  expectTypeOf<InputOnKeyboardheightchangeDetail>().toBeObject();
  expectTypeOf<InputOnKeyboardheightchangeDetail>().toEqualTypeOf<UniHelper.InputOnKeyboardheightchangeDetail>();

  expectTypeOf<InputOnKeyboardheightchangeEvent>().toBeObject();
  expectTypeOf<InputOnKeyboardheightchangeEvent>().toEqualTypeOf<UniHelper.InputOnKeyboardheightchangeEvent>();

  expectTypeOf<InputOnKeyboardheightchange>().toBeFunction();
  expectTypeOf<InputOnKeyboardheightchange>().toEqualTypeOf<UniHelper.InputOnKeyboardheightchange>();

  expectTypeOf<InputProps>().toBeObject();
  expectTypeOf<InputProps>().toEqualTypeOf<UniHelper.InputProps>();

  expectTypeOf<Input>().not.toBeAny();
  expectTypeOf<Input>().toEqualTypeOf<UniHelper.Input>();

  expectTypeOf<InputInstance>().not.toBeAny();
  expectTypeOf<InputInstance>().toBeObject();
  expectTypeOf<InputInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<InputInstance>().toEqualTypeOf<UniHelper.InputInstance>();
});
