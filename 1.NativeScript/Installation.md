# NativeScript 


## Installation Rapide des emulateurs


[Installation Rapide](https://docs.nativescript.org/start/quick-setup)



### Windows


:one: Executer la commande suivante dans `cmd` en tant qu'Administrateur 

`(Touche Windows > taper "cmd" > right click > Run as Administrator)`

```
> @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"
```

:two: Questions a repondre

* [Chocolatey](https://chocolatey.org/)

```
Allow the script to install Chocolatey (It's mandatory for the rest of the script)?
Tip: Note that if you type A you won't be prompted for subsequent installations
(Y)es/(N)o/(A)ll: Y
```

* [Google Chrome](https://www.google.com/chrome/)

```
Allow the script to install Google Chrome?
Tip: Note that if you type A you won't be prompted for subsequent installations
(Y)es/(N)o/(A)ll: N
```

* [OpenJDK](https://openjdk.java.net/)

```
Allow the script to install Java Development Kit (OpenJDK)?
Tip: Note that if you type A you won't be prompted for subsequent installations
(Y)es/(N)o/(A)ll: Y
```

* [Android SDK](https://developer.android.com/studio/releases/sdk-tools)

```
Allow the script to install Android SDK?
Tip: Note that if you type A you won't be prompted for subsequent installations
(Y)es/(N)o/(A)ll: Y
```

* [Android Emulator](https://developer.android.com/studio/run/emulator)

```
Do you want to install Android emulator? (Y)es/(N)o: Y
```

* Enregistrer les variables d'environemments dans le script de demarrage `JAVA_HOME` et `ANDROID_HOME` 
 
```
This script has modified your environment. You need to log off and log back on for the changes to take effect.
Press any key to continue...
```

:warning: Sortir du Terminal `cmd` et rouvrir un autre (i.e. `bash`) pour tester les variables

```bash
moi@ma-machine MINGW64 ~
$ echo $JAVA_HOME
C:\Program Files\Java\jdk1.8.0_221

moi@ma-machine MINGW64 ~
$ echo $ANDROID_HOME
C:\Android\android-sdk
```

#### Accélerateur de matériel

:warning: Installer l'accélérateur en fonction de votre plateforme

Si vous utilisez Hyper-V installer [WHPX](https://developer.android.com/studio/run/emulator-acceleration#vm-windows-whpx)

[Windows Hypervisor Platform](https://stackoverflow.com/questions/53599660/cant-windows-hypervisor-platform-option-in-my-windows-10-pro) feature depends on Windows 10 version 1803 (aka "Redstone 4") 


### MacOS

Ouvrir un terminal et executer la commande

```
$ ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"
These scripts require sudo permissions
Password:
NativeScript requires Xcode.
If you do not have Xcode installed, download and install it from App Store and run it once to complete its setup.
Do you have Xcode installed? (y/n)
y
```
License

```
By typing 'agree' you are agreeing to the terms of the software license agreements. Type 'print' to print them or anything else to cancel, [agree, print, cancel] agree

You can view the license agreements in Xcode's About Box, or at /Applications/Xcode.app/Contents/Resources/English.lproj/License.rtf

This setup script will request to install the following on your machine:
1. Homebrew
2. Google Chrome
3. Open JDK 8
4. Android SDK
5. Android emulator system image
6. HAXM (Hardware accelerated Android emulator)
7. Android emulator
8. CocoaPods
9. CocoaPods setup
10. pip
11. six
12. xcodeproj
Step 1 of 12:
Allow the script to install Homebrew?
(Y)es/(N)o
```

## Utiliser NativeScript

https://github.com/CollegeBoreal/Tutoriels/tree/master/3.Angular/M.Mobile



