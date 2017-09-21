/**
 * Client tests
 */
import React from "react";
// eslint import plugin does poorly with webpack aliases
// eslint-disable-next-line import/no-unresolved
import Component from "src/components/<%= componentPath %>";
import { mount, shallow } from "enzyme";

describe("components/<%= componentPath %>", () => {

  it("has expected content with deep render", () => {
    // This is a "deep" render that renders children + all into an actual
    // browser DOM node.
    const wrapper = mount(<Component />);
    const divNode = wrapper.find("div");

    expect(divNode.text()).to.equal("Edit me!");
  });

  it("has expected content with shallow render", () => {
    // This is a "shallow" render that renders only the current component
    // without using the actual DOM.
    const wrapper = shallow(<Component />);
    const divNode = wrapper.find("div");

    expect(divNode).to.have.lengthOf(1);
    expect(divNode.text()).to.equal("Edit me!");
  });

});
