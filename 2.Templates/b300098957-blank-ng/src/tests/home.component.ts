import {nsTestBedAfterEach, nsTestBedBeforeEach, nsTestBedRender} from "nativescript-angular/testing";
import { ComponentRef } from "@angular/core";

import {HomeComponent} from "~/app/home/home.component";
import {TextBase, View} from "tns-core-modules/ui/text-base";

function getChildren(view: View): Array<View> {
    let children: Array<View> = [];
    (<any>view).eachChildView((child) => {
        children.push(child);
        return true;
    });
    return children;
}

export function dumpView(view: View, verbose: boolean = false): string {
    let nodeName: string = (<any>view).nodeName;
    if (!nodeName) {
        // Strip off the source
        nodeName = view.toString().replace(/(@[^;]*;)/g, '');
    }
    nodeName = nodeName.toLocaleLowerCase();

    let output = ["(", nodeName];
    if (verbose) {
        if (view instanceof TextBase) {
            output.push("[text=", view.text, "]");
        }
    }

    let children = getChildren(view).map((c) => dumpView(c, verbose)).join(", ");
    if (children) {
        output.push(" ", children);
    }

    output.push(")");
    return output.join("");
}

/*
describe("Home suite", function() {

    let homeComponent: HomeComponent;
    let el: HTMLElement;

    beforeEach(function () {
        homeComponent = new HomeComponent();
    });

    it("contains a lable", function() {
        expect(homeComponent.message).toBe("16 taps left");
    });

    it("Displays 2 lables", function () {
        let ls = el.querySelectorAll('label');

        expect(ls.length).toBe(2);

    })


});
*/

describe("Renderer E2E", () => {
    beforeEach(nsTestBedBeforeEach([
        HomeComponent
    ]));
    afterEach(nsTestBedAfterEach(false));

    it("component with a layout", () => {
        return nsTestBedRender(HomeComponent).then((fixture) => {
            const componentRef: ComponentRef<HomeComponent> = fixture.componentRef;
            const componentRoot = componentRef.instance.elementRef.nativeElement;
            const v = dumpView(componentRoot);

            expect("(proxyviewcontainer (stacklayout (label)))").toBe(v);
            console.trace(v);
        });
    });
});
