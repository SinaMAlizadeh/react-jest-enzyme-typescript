import App from "./App";
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";

describe("Counter testig", () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test("renders learn react link", () => {
    expect(wrapper.find("h1").text()).toContain("Learn React");
  });

  test("render a button wrapper", () => {
    expect(wrapper.find("#increament-btn").text()).toBe("increament");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event button counter value", () => {
    wrapper.find("#increament-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decreament-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
