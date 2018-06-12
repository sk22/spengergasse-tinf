#!/bin/bash

if [ -z "$1" ]; then
  echo "Input file not given."
  exit -1
elif [ -z "$2" ]; then
  echo "Output file not given."
  exit -1
elif ! test -f $1; then
  echo "File $1 does not exist."
fi


echo -e "<!DOCTYPE html>
<html>
  <head>
    <title>$1</title>
    <meta charset=\"utf-8\">
  </head>
  <body>
    <table>" > $2

line_number=0

OLD_IFS="$IFS"
IFS=";"

while read line; do
  echo "      <tr>" >> $2

  for col in $line; do
    if [ $line_number = "0" ]; then
      echo "        <th>$col</th>" >> $2
    else
      echo "        <td>$col</td>" >> $2
    fi
  done

  echo "      </tr>"  >> $2
  (( line_number++ ))
done < $1

echo "    </table>"  >> $2
echo "  </body>"  >> $2
echo "</html>" >> $2
