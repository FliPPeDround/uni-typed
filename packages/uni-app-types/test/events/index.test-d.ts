import type {
  BaseEvent,
  BaseTouchEvent,
  CustomEvent,
  EventTarget,
  TouchCanvasDetail,
  TouchCanvasEvent,
  TouchDetail,
  TouchEvent,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("Events", () => {
  expectTypeOf<EventTarget>().toBeObject();
  expectTypeOf<EventTarget>().toEqualTypeOf<UniHelper.EventTarget>();

  expectTypeOf<BaseEvent>().toBeObject();
  expectTypeOf<BaseEvent>().toEqualTypeOf<UniHelper.BaseEvent>();

  expectTypeOf<CustomEvent>().toBeObject();
  expectTypeOf<CustomEvent>().toEqualTypeOf<UniHelper.CustomEvent>();

  expectTypeOf<TouchDetail>().toBeObject();
  expectTypeOf<TouchDetail>().toEqualTypeOf<UniHelper.TouchDetail>();

  expectTypeOf<TouchCanvasDetail>().toBeObject();
  expectTypeOf<TouchCanvasDetail>().toEqualTypeOf<UniHelper.TouchCanvasDetail>();

  expectTypeOf<BaseTouchEvent>().toBeObject();
  expectTypeOf<BaseTouchEvent>().toEqualTypeOf<UniHelper.BaseTouchEvent>();

  expectTypeOf<TouchEvent>().toBeObject();
  expectTypeOf<TouchEvent>().toEqualTypeOf<UniHelper.TouchEvent>();

  expectTypeOf<TouchCanvasEvent>().toBeObject();
  expectTypeOf<TouchCanvasEvent>().toEqualTypeOf<UniHelper.TouchCanvasEvent>();
});
