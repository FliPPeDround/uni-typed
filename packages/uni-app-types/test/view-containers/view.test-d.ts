import type { View, ViewInstance, ViewProps } from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("View", () => {
  expectTypeOf<ViewProps>().toBeObject();
  expectTypeOf<ViewProps>().toEqualTypeOf<UniHelper.ViewProps>();

  expectTypeOf<View>().not.toBeAny();
  expectTypeOf<View>().toEqualTypeOf<UniHelper.View>();

  expectTypeOf<ViewInstance>().not.toBeAny();
  expectTypeOf<ViewInstance>().toEqualTypeOf<UniHelper.ViewInstance>();
});