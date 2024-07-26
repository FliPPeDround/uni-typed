import type {
  Slider,
  SliderInstance,
  SliderOnChange,
  SliderOnChangeDetail,
  SliderOnChangeEvent,
  SliderOnChanging,
  SliderOnChangingDetail,
  SliderOnChangingEvent,
  SliderProps,
  SliderValue,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("Slider", () => {
  expectTypeOf<SliderValue>().toBeNumber();
  expectTypeOf<SliderValue>().toEqualTypeOf<UniHelper.SliderValue>();

  expectTypeOf<SliderOnChangeDetail>().toBeObject();
  expectTypeOf<SliderOnChangeDetail>().toEqualTypeOf<UniHelper.SliderOnChangeDetail>();

  expectTypeOf<SliderOnChangeEvent>().toBeObject();
  expectTypeOf<SliderOnChangeEvent>().toEqualTypeOf<UniHelper.SliderOnChangeEvent>();

  expectTypeOf<SliderOnChange>().toBeFunction();
  expectTypeOf<SliderOnChange>().toEqualTypeOf<UniHelper.SliderOnChange>();

  expectTypeOf<SliderOnChangingDetail>().toBeObject();
  expectTypeOf<SliderOnChangingDetail>().toEqualTypeOf<UniHelper.SliderOnChangingDetail>();

  expectTypeOf<SliderOnChangingEvent>().toBeObject();
  expectTypeOf<SliderOnChangingEvent>().toEqualTypeOf<UniHelper.SliderOnChangingEvent>();

  expectTypeOf<SliderOnChanging>().toBeObject();
  expectTypeOf<SliderOnChanging>().toEqualTypeOf<UniHelper.SliderOnChanging>();

  expectTypeOf<SliderProps>().toBeObject();
  expectTypeOf<SliderProps>().toEqualTypeOf<UniHelper.SliderProps>();

  expectTypeOf<Slider>().not.toBeAny();
  expectTypeOf<Slider>().toEqualTypeOf<UniHelper.Slider>();

  expectTypeOf<SliderInstance>().not.toBeAny();
  expectTypeOf<SliderInstance>().toEqualTypeOf<UniHelper.SliderInstance>();
});
