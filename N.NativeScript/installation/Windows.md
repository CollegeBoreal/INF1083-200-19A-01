# Windows 10 (Pro et Éducation)

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

* Enregistrement des variables d'environemments par le script i.e. `JAVA_HOME` et `ANDROID_HOME` 
 
```
This script has modified your environment. You need to log off and log back on for the changes to take effect.
Press any key to continue...
```

:four: Vérification

:bangbang: Sortir du Terminal `cmd` et rouvrir un autre (i.e. `bash`) pour tester les variables

* Variables d'environnements présentes

```bash
$ echo $JAVA_HOME
C:\Program Files\Java\jdk1.8.0_221

$ echo $ANDROID_HOME
C:\Android\android-sdk
```

* `Packages` présents

```
$ choco list --local-only
...
adoptopenjdk 8.192
android-sdk 26.1.1
...
```

* `emulator` présent
```
$ emulator -list-avds
test
```


# Accélerateur de matériel

:warning: Installer l'accélérateur en fonction de votre plateforme

Hyper-V est utilisé, Activer [WHPX](https://developer.android.com/studio/run/emulator-acceleration#vm-windows-whpx)

[Windows Hypervisor Platform](https://stackoverflow.com/questions/53599660/cant-windows-hypervisor-platform-option-in-my-windows-10-pro) feature depends on Windows 10 version 1803 (aka "Redstone 4") 



