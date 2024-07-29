import type {
  AdInteractive,
  AdInteractiveInstance,
  AdInteractiveOnError,
  AdInteractiveOnErrorDetail,
  AdInteractiveOnErrorEvent,
  AdInteractiveOnLoad,
  AdInteractiveOnLoadEvent,
  AdInteractiveProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("AdInteractive", () => {
  expectTypeOf<AdInteractiveOnLoadEvent>().toBeObject();
  expectTypeOf<AdInteractiveOnLoadEvent>().toEqualTypeOf<UniHelper.AdInteractiveOnLoadEvent>();

  expectTypeOf<AdInteractiveOnLoad>().toBeFunction();
  expectTypeOf<AdInteractiveOnLoad>().toEqualTypeOf<UniHelper.AdInteractiveOnLoad>();

  expectTypeOf<AdInteractiveOnErrorDetail>().toBeObject();
  expectTypeOf<AdInteractiveOnErrorDetail>().toEqualTypeOf<UniHelper.AdInteractiveOnErrorDetail>();

  expectTypeOf<AdInteractiveOnErrorEvent>().toBeObject();
  expectTypeOf<AdInteractiveOnErrorEvent>().toEqualTypeOf<UniHelper.AdInteractiveOnErrorEvent>();

  expectTypeOf<AdInteractiveOnError>().toBeFunction();
  expectTypeOf<AdInteractiveOnError>().toEqualTypeOf<UniHelper.AdInteractiveOnError>();

  expectTypeOf<AdInteractiveProps>().toBeObject();
  expectTypeOf<AdInteractiveProps>().toEqualTypeOf<UniHelper.AdInteractiveProps>();

  expectTypeOf<AdInteractive>().not.toBeAny();
  expectTypeOf<AdInteractive>().toEqualTypeOf<UniHelper.AdInteractive>();

  expectTypeOf<AdInteractiveInstance>().not.toBeAny();
  expectTypeOf<AdInteractiveInstance>().toBeObject();
  expectTypeOf<AdInteractiveInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<AdInteractiveInstance>().toEqualTypeOf<UniHelper.AdInteractiveInstance>();
});
