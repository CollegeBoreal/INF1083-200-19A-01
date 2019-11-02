# 300112917

:no_entry: Corriger l'erreur suivante

***** Fatal JavaScript exception - application has been terminated. *****
Native stack trace:
1   0x105b4824e NativeScript::reportFatalErrorBeforeShutdown(JSC::ExecState*, JSC::Exception*, bool)
2   0x105b84878 NativeScript::FFICallback<NativeScript::ObjCMethodCallback>::ffiClosureCallback(ffi_cif*, void*, void**, void*)
3   0x10652b3d6 ffi_closure_unix64_inner
4   0x10652bdfa ffi_closure_unix64
5   0x109afdeae -[CALayer layoutSublayers]
6   0x109b02b88 CA::Layer::layout_if_needed(CA::Transaction*)
7   0x109b0eee4 CA::Layer::layout_and_display_if_needed(CA::Transaction*)
8   0x109a7e3aa CA::Context::commit_transaction(CA::Transaction*)
9   0x109ab5584 CA::Transaction::commit()
10  0x10a78eccb __34-[UIApplication _firstCommitBlock]_block_invoke_2
11  0x108e2caec __CFRUNLOOP_IS_CALLING_OUT_TO_A_BLOCK__
12  0x108e2c2b0 __CFRunLoopDoBlocks
13  0x108e26b34 __CFRunLoopRun
14  0x108e26302 CFRunLoopRunSpecific
15  0x10ffc32fe GSEventRunModal
16  0x10a775ba2 UIApplicationMain
17  0x10652bc3d ffi_call_unix64
18  0x1203aeaa0
JavaScript stack trace:
file:///node_modules/tns-core-modules/ui/content-view/content-view.js:44:0
at _eachLayoutView(file:///node_modules/tns-core-modules/ui/core/view/view-common.js:1018:0)
at file:///node_modules/tns-core-modules/ui/proxy-view-container/proxy-view-container.js:45:0
at eachChildView(file:///node_modules/tns-core-modules/ui/layouts/layout-base-common.js:125:0)
at _eachLayoutView(file:///node_modules/tns-core-modules/ui/proxy-view-container/proxy-view-container.js:43:0)
at get(file:///node_modules/tns-core-modules/ui/content-view/content-view.js:38:0)
at onMeasure(file:///node_modules/tns-core-modules/ui/page/page.js:272:0)
at measure(file:///node_modules/tns-core-modules/ui/core/view/view.js:55:0)
at measureChild(file:///node_modules/tns-core-modules/ui/core/view/view-common.js:957:0)
at layoutView(file:///node_modules/tns-core-modules/ui/core/view/view.js:636:0)
at viewDidLayoutSubviews(file:///node_modules/tns-core-modules/ui/page/page.js:192:0)
at UIApplicationMain([native code])
at _start(file:///node_modules/tns-core-modules/application/application.js:295:0)
at run(file:///node_modules/tns-core-modules/application/application.js:323:0)
at bootstrapNativeScriptApp(file:///node_modules/nativescript-angular/platform-common.js:210:0)
at bootstrapApp(file:///node_modules/nativescript-angular/platform-common.js:111:0)
at bootstrapModule(file:///node_modules/nativescript-angular/platform-common.js:91:0)
at file:///app/bundle.js:206:144
at ./main.ts(file:///app/bundle.js:211:34)
at __webpack_require__(file:///src/webpack/bootstrap:750:0)
at checkDeferredModules(file:///src/webpack/bootstrap:43:0)
at webpackJsonpCallback(file:///app/runtime.js:31:<…>
JavaScript error:
file:///node_modules/tns-core-modules/ui/content-view/content-view.js:44:0: JS ERROR Error: More than one layout child inside a ContentView
