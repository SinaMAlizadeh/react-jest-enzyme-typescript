import AsyncAwait from "../AsyncAwait";
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";

describe("Counter testig", () => {
  test("renders learn react link", async () => {
    const wrapper = await mount(<AsyncAwait />);
    expect(wrapper.find(".list-item").length).toBe(5);
  });
});
