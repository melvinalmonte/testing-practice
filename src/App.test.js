import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("Test Counter", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  it("should render", () => {
    expect(wrapper.find("h1").text()).toBe("counter: 0");
  });

  it("should increase counter", () => {
    wrapper.find('button[name="increase"]').simulate("click");
    expect(wrapper.find("h1").text()).toBe("counter: 1");
  });

  it("should decrease counter", () => {
    wrapper.find('button[name="decrease"]').simulate("click");
    expect(wrapper.find("h1").text()).toBe("counter: -1");
  });
});
