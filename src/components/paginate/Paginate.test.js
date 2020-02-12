import React from "react";
import { mount } from "enzyme";
import { MockPaginate } from "../../mocks/MockPaginate";

describe("Test Counter", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MockPaginate />);
  });
  it("should render", () => {
    expect(wrapper.find("h1").text()).toBe("1 of 5");
  });

  it("should click first page", () => {
    wrapper.find('button[name="first"]').simulate("click");
    expect(wrapper.find("h1").text()).toBe("1 of 5");
  });

  it("should click previous page", () => {
    wrapper.find('button[name="prev"]').simulate("click");
    expect(wrapper.find("h1").text()).toBe("1 of 5");
  });
  it("should click next page", () => {
    wrapper.find('button[name="next"]').simulate("click");
    expect(wrapper.find("h1").text()).toBe("2 of 5");
  });
  it("should click last page", () => {
    wrapper.find('button[name="last"]').simulate("click");
    expect(wrapper.find("h1").text()).toBe("5 of 5");
  });
  it("should not exceed the last page value", () => {
    const multipleClicks = 6;
    for (let i = 0; i < multipleClicks; i++) {
      wrapper.find('button[name="next"]').simulate("click");
    }
    expect(wrapper.find("h1").text()).toBe("5 of 5");
  });
});
