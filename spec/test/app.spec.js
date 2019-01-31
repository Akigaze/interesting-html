import React from "react";
import {shallow} from "enzyme";
import App from "../../src/app";

xdescribe("App Component", () => {
    xit("should render a H1 tag with Hello React! text", () => {
        const app = shallow(<App />);
        const h1 = app.find("h1");

        expect(h1.text()).toBe("Hello React!");
    });
});