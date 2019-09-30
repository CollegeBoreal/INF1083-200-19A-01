


## Windows

* Installer la derniere version de la SDK Android

```bash
$ $ANDROID_HOME/tools/bin/sdkmanager.bat "emulator" "platform-tools" "platforms;android-28" "build-tools;28.0.3" "extras;android;m2repository" "extras;google;m2repository"
```

* Creer 

```bash
$ $ANDROID_HOME/tools/bin/avdmanager.bat create avd -n test -k "system-images;android-28;google_apis;x86"
Auto-selecting single ABI x86===========] 100% Fetch remote repository...
Do you wish to create a custom hardware profile? [no] no
```

```bash
$ emulator -avd test &
```
