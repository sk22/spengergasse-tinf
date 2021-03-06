#!/bin/bash

if
  ! echo "Last name;First name;Age" > $1
then
  echo Path invalid. Sorry.
  exit
fi
echo "Enter # to exit."

count=0;

while true; do
  read -p "Enter last name: " last
  if [ "$last" = "#" ]; then break; fi;

  read -p "Enter first name: " first
  if [ "$first" = "#" ]; then break; fi;
  
  read -p "Enter age: " age
  if [ "$age" = "#" ]; then break; fi;
  
  printf "$last;$first;$age\n" >> $1
  echo
  
  count=$(( $count+1 ))
done

echo "$count people recorded."
