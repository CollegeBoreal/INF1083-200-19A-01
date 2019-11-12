# Participation

## Execution

* Remplacer `<id>` par son :id:

* Charger le schema

```
$ docker exec --interactive some-mysql \
         mysql --user root -ppassword < ~/Developer/INF1006-202-19A-01/4.DML/<id>/<id>-schema.sql
```

* Charger les données

```
$ docker exec --interactive some-mysql \
         mysql --user root -ppassword < ~/Developer/INF1006-202-19A-01/4.DML/<id>/<id>-data.sql
```

## Resultat


|:hash:| :id:                   | SQL                | Execution                                            | Modèle |  Schema |
|------|------------------------|--------------------|------------------------------------------------------|--------|--------|
| 01   | [300104524](300104524) | :heavy_check_mark: | [:x:](Corrections#etudiant-300104524)                | [:o:](300104524) | technical_support |
| 02   | [300104541](300104541) | :heavy_check_mark: | [:x:](Corrections#etudiant-300104541)                | [:o:](300104541) | Jeuxvideos        |
| 03   | [300105201](300105201) | :heavy_check_mark: | [:x:](Corrections#etudiant-300105201)                | [:o:](300105201) | musicshop |
| 04   | [300106918](300106918) | :heavy_check_mark: | [:x:](Corrections#etudiant-300106918)                | [:bar_chart:](300106918) | network_IT |
| 05   | [300107361](300107361) | :heavy_check_mark: | [:x:](Corrections#etudiant-300107361)                | [:bar_chart:](300107361) | Car_Center |
| 06   | [300108234](300108234) | :heavy_check_mark: | [:x:](Corrections#etudiant-300108234)                | [:bar_chart:](300108234) | Hijabfashion |
| 07   | [300110500](300110500) | :heavy_check_mark: | [:x:](Corrections#etudiant-300110500)                | [:bar_chart:](300110500) | immigration_consulting |
| 08   | [300110529](300110529) | :heavy_check_mark: | [:heavy_check_mark:](Corrections#etudiant-300110529) | [:bar_chart:](300110529) | Carte_graphique |
| 09   | [300111671](300111671) | :x:                | [:heavy_check_mark:](Corrections#etudiant-300110529) | [:o:](300111671) | Boubou |
| 10   | [300111766](300111766) | :x:                | [:heavy_check_mark:](Corrections#etudiant-300111766) | [:bar_chart:](300111766) | vente_portable |
| 11   | [300112017](300112017) | :x:                | [:x:](Corrections#etudiant-300112017)                | [:bar_chart:](300112017) | magasin |
| 12   | [300112687](300112687) | :x:                | [:x:](Corrections#etudiant-300112687)                | [:o:](300112687) |
| 13   | [300112917](300112917) | :heavy_check_mark: | [:heavy_check_mark:](Corrections#etudiant-300112917) | [:bar_chart:](300112917) |
| 14   | [300113775](300113775) | :heavy_check_mark: | [:heavy_check_mark:](Corrections#etudiant-300113775) | [:bar_chart:](300113775) |

## [Corrections](Corrections)

* Nettoyer MySQL

```
$ docker container rm -f some-mysql
$ docker run --name some-mysql --env MYSQL_ROOT_PASSWORD=password --publish 33060:3306 --detach mysql:5.7
```

* Exécuter le script de correction

```
$ sh notation.sh > Corrections/README.md 2>&1
```

## Critères

![image](images/Criteres.png)
