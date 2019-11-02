# 300105201

:bangbang:

:x: Ne pas ecrire dans `app.component.html`

```
Successfully synced application org.nativescript.b300105201blankng on device F0A0CC25-FA45-4B32-88C2-84E949666C87.
CONSOLE INFO file:///node_modules/nativescript-dev-webpack/hot.js:3:0: HMR: Hot Module Replacement Enabled. Waiting for signal.
***** Fatal JavaScript exception - application has been terminated. *****
Native stack trace:
1   0x10a24d24e NativeScript::reportFatalErrorBeforeShutdown(JSC::ExecState*, JSC::Exception*, bool)
2   0x10a289878 NativeScript::FFICallback<NativeScript::ObjCMethodCallback>::ffiClosureCallback(ffi_cif*, void*, void**, void*)
3   0x10ac303d6 ffi_closure_unix64_inner
4   0x10ac30dfa ffi_closure_unix64
5   0x10d50ba6f _CFXRegistrationPost
6   0x10d50b7b3 ___CFXNotificationPost_block_invoke
7   0x10d5ef5e2 -[_CFXNotificationRegistrar find:object:observer:enumerator:]
8   0x10d50b101 _CFXNotificationPost
9   0x10b474eaf -[NSNotificationCenter postNotificationName:object:userInfo:]
10  0x10f3d3fab -[UIApplication _callInitializationDelegatesForMainScene:transitionContext:]
11  0x10f3d90c6 -[UIApplication _runWithMainScene:transitionContext:completion:]
12  0x10ec1e6d6 __111-[__UICanvasLifecycleMonitor_Compatability _scheduleFirstCommitForScene:transition:firstActivation:completion:]_block_invoke
13  0x10ec26fce +[_UICanvas _enqueuePostSettingUpdateTransactionBlock:]
14  0x10ec1e2ec -[__UICanvasLifecycleMonitor_Compatability _scheduleFirstCommitForScene:transition:firstActivation:completion:]
15  0x10ec1ec48 -[__UICanvasLifecycleMonitor_Compatability activateEventsOnly:withContext:completion:]
16  0x10ec1cfba __82-[_UIApplicationCanvas _transitionLifecycleStateWithTransitionContext:completion:]_block_invoke
17  0x10ec1cc71 -[_UIApplicationCanvas _transitionLifecycleStateWithTransitionContext:completion:]
18  0x10ec219b6 __125-[_UICanvasLifecycleSettingsDiffAction performActionsForCanvas:withUpdatedScene:settingsDiff:fromSettings:transitionContext:]_block_invoke
19  0x10ec22610 _performActionsWithDelayForTransitionContext
20  0x10ec2171d -[_UICanvasLifecycleSettingsDiffAction performActionsForCanvas:withUpdatedScene:settingsDiff:fromSettings:transitionContext:]
21  0x10ec266d0 -[_UICanvas scene:didUpdateWithDiff:transitionContext:completion:]
22  0x10f3d79a8 -[UIApplication workspace:didCreateScene:withTransitionContext:completion:]
23  0x10ef8edfa -[UIApplicationSceneClientAgent scene:didInitializeWithEvent:completion:]
24  0x117772125 -[FBSSceneImpl _didCreateWithTransitionContext:completion:]
25  0x11777bed6 __56-[FBSWorkspace client:handleCreateScene:withCompletion:]_block_invoke_2
26  0x11777b700 __40-[FBSWorkspace _performDelegateCallOut:]_block_invoke
27  0x10db10d02 _dispatch_client_callout
28  0x10db13d41 _dispatch_block_invoke_direct
29  0x1177ad146 __FBSSERIALQUEUE_IS_CALLING_OUT_TO_A_BLOCK__
30  0x1177acdfe -[FBSSerialQueue _performNext]
31  0x1177ad393 -[FBSSerialQueue _performNextFromRunLoopSource]
JavaScript stack trace:
_preparseLoadedTemplate(file:///node_modules/@angular/compiler/fesm5/compiler.js:18755:0)
at normalizeTemplate(file:///node_modules/@angular/compiler/fesm5/compiler.js:18732:0)
at loadDirectiveMetadata(file:///node_modules/@angular/compiler/fesm5/compiler.js:20981:0)
at file:///node_modules/@angular/compiler/fesm5/compiler.js:27383:0
at forEach([native code])
at file:///node_modules/@angular/compiler/fesm5/compiler.js:27382:0
at forEach([native code])
at _loadModules(file:///node_modules/@angular/compiler/fesm5/compiler.js:27379:0)
at _compileModuleAndComponents(file:///node_modules/@angular/compiler/fesm5/compiler.js:27357:0)
at compileModuleAsync(file:///node_modules/@angular/compiler/fesm5/compiler.js:27317:0)
at bootstrapModule(file:///node_modules/@angular/core/fesm5/core.js:26789:0)
at _bootstrapper(file:///node_modules/nativescript-angular/platform-common.js:89:0)
at file:///node_modules/nativescript-angular/platform-common.js:156:0
at notify(file:///node_modules/tns-core-modules/data/observable/observable.js:110:0)
at [native code]
at notifyAppStarted(file:///node_modules/tns-core-modules/application/application.js:156:0)
at didFinishLaunchingWithOptions(file:///node_modules/tns-core-modules/application/application.js:148:0)
at [native code]
at onReceive(file:///node_modules/tns-core-modules/application/application.js:36:0)
at UIApplicationMain([native code])
at _start(file:///node_modules/tns-core-modules/application/application.js:295:0)
at run(file:///node_modules/tns-core-modules/application/application.js:323:0)
at bootstrapNativeScriptApp(file:///node_modules/nativescript-angular/platform-common.js:210:0)
at bootstrapAp<…>
JavaScript error:
file:///node_modules/@angular/compiler/fesm5/compiler.js:18755:0: JS ERROR Error: Template parse errors:
Unexpected closing tag "Label". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags ("          changes sync live while you play with the code."
class="h2 description-label">[ERROR ->]</Label>
</StackLayout>
</ScrollView>
"): ng:///AppModule/AppComponent.html@16:41
NativeScript caught signal 11.

```
