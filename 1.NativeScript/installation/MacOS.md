# MacOS

* Ouvrir un terminal et executer la commande

```
$ ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"
These scripts require sudo permissions
Password:
NativeScript requires Xcode.
If you do not have Xcode installed, download and install it from App Store and run it once to complete its setup.
Do you have Xcode installed? (y/n)
y
```
* Lire la License XCode Apple en appuyant :

    - plusieurs fois sur la touche `espace` 
    
    - et en finissant avec la touche `q`

```
By typing 'agree' you are agreeing to the terms of the software license agreements. Type 'print' to print them or anything else to cancel, [agree, print, cancel] agree

You can view the license agreements in Xcode's About Box, or at /Applications/Xcode.app/Contents/Resources/English.lproj/License.rtf
```

* Accepter la License en tapant :  `agree`



* Menu d'installation

```
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

```

:warning: Installer par defaut en tapant `Y` soit le logiciel se mettra a jour soit ile ne sera pas installe

* Installer Homebrew

```
Step 1 of 12:
Allow the script to install Homebrew?
(Y)es/(N)o
Y
```

* Installer Google Chrome

```
Step 2 of 12:
Allow the script to install Google Chrome?
(Y)es/(N)o
Y
...
Error: It seems there is already an App at '/Applications/Google Chrome.app'.
WARNING: Google Chrome not installed
```

* Installer Open JDK 8

```
Step 3 of 12:
Allow the script to install Open JDK 8?
(Y)es/(N)o
Y
Set JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
```

```
Step 4 of 12:
Allow the script to install Android SDK?
Note that if you type all you won't be prompted for subsequent installations
(Y)es/(N)o/(A)ll
Y
```

```
Step 5 of 12:
Do you want to install Android emulator system image? (y/n)
y
```

```
Step 6 of 12:
Do you want to install HAXM (Hardware accelerated Android emulator)? (y/n)
y
```
