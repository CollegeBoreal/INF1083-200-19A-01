


```bash
$ $ANDROID_HOME/tools/bin/avdmanager.bat create avd -n test -k "system-images;android-25;google_apis;x86"
Auto-selecting single ABI x86===========] 100% Fetch remote repository...
Do you wish to create a custom hardware profile? [no] no
```

```bash
$ emulator -avd test &
```
