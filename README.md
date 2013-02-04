#filter-csv
Filter rows of a csv file by matching values of a column to a regular expression:

This command will filter all rows that have a description column matching the regular expression "car":
```
node ./filter-csv.js -i ./test.csv -o ./filtered.csv -c "description" -r "car"
```
