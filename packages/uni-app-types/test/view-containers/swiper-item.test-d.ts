import type {
  SwiperItem,
  SwiperItemInstance,
  SwiperItemProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("SwiperItem", () => {
  expectTypeOf<SwiperItemProps>().toBeObject();
  expectTypeOf<SwiperItemProps>().toEqualTypeOf<UniHelper.SwiperItemProps>();

  expectTypeOf<SwiperItem>().not.toBeAny();
  expectTypeOf<SwiperItem>().toEqualTypeOf<UniHelper.SwiperItem>();

  expectTypeOf<SwiperItemInstance>().not.toBeAny();
  expectTypeOf<SwiperItemInstance>().toEqualTypeOf<UniHelper.SwiperItemInstance>();
});