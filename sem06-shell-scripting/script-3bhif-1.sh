#!/bin/bash

# echo Hallo, ich bin der $USER mit Heimverzeichnis $HOME

# echo 'Ich kann keine Variablen interpolieren. $USER'
# echo "Ich schon. $USER"


# echo "Übergebene Parameter: $1, $2, ... (Anzahl: $#)"
# echo "Alle: $@"

# read -p "Sag was: " input
# echo "Du hast $input gesagt."

mkdir 3bhif-test-dir &&
  cd 3bhif-test-dir &&
  echo 'success' ||
  echo 'failed'


newdir='./ddd1';

if mkdir $newdir; then
  echo "Directory $newdir created!"
elif test -d $newdir; then
  echo "Directory $newdir already exists."
else
  echo "Directory $newdir was not created."
fi

ls -l | grep -e "^-" -e "dd"

for x in aa bb cc dd ee; do
  echo "$x"
done

for f in $(ls); do
  echo "file: $f"
done

for f in *.csv; do
  echo "$f"
done;
