
#!/bin/sh

# --------------------------------------
#
#  2.Templates
#
#
# --------------------------------------

ETUDIANTS=(
300104524
300104541
300105201
300106918
300107361
300108234
300110500
300111671
300111766
300112017
300112687
300112917
300113775
)



echo "# Participation au `date +"%d-%m-%Y %H:%M"`"
echo "\n## Légende\n"

echo "| Signe              | Signification                 |"
echo "|--------------------|-------------------------------|"
echo "| :heavy_check_mark: | Prêt à être corrigé           |"
echo "| :x:                | Projet inexistant             |"


echo "\n## Résultat\n"
echo "|:hash:| Boréal :id:                | :100:              |"
echo "|------|----------------------------|--------------------|"

i=1


for id in "${ETUDIANTS[@]}"
do
   FILE=b${id}-blank-ng
   OK="| ${i} | [${id}](${FILE}) | [:heavy_check_mark:](Correction.md#etudiant-${id}) | "
   KO="| ${i} | [${id}](${FILE}) | [:x:](Correction.md#etudiant-${id})                | "
   if [ -d "$FILE" ]; then
       echo ${OK}
   else
       echo ${KO}
   fi
   let "i++"
done
