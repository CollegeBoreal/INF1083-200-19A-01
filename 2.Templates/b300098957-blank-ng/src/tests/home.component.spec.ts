import "reflect-metadata";
import { nsTestBedBeforeEach, nsTestBedAfterEach, nsTestBedRender }     from "nativescript-angular/testing";

import {Component, ComponentRef} from "@angular/core";

import {dumpView} from './test-utils';
import {HomeComponent} from "~/app/home/home.component";

describe("HomeComponent", () => {

    // const result = "(proxyviewcontainer (stacklayout (label), (label), (image)))";
    const label = "(label)";
    const image = "(image)";

    beforeEach(nsTestBedBeforeEach([HomeComponent]));
    afterEach(nsTestBedAfterEach());

    describe("HomeComponent", () => {
        it("should contain: label and image", () => {
            return nsTestBedRender(HomeComponent).then((fixture) => {
                const componentRef: ComponentRef<HomeComponent> = fixture.componentRef;
                const componentRoot = componentRef.instance.elementRef.nativeElement;
                const view = dumpView(componentRoot);
                expect(view).toContain(label);
                expect(view).toContain(image);
            });
        });
    });

});
