#!/bin/sh
TOTAL=$(jq '.|length' vehicleinfo.json)

CONTAINER_ID=$(docker ps --filter 'name=digihey-database-postgresql' --format "{{.ID}}")
CHECK_DATA=$(docker exec -i $CONTAINER_ID psql -U digihey -d digihey -c "SELECT count(*) as cnt FROM vehicle;")

echo "CHECK DB DATA:" $CHECK_DATA

if [[ $CHECK_DATA == *"0"*"(1 row)"* ]];
then
    echo "NO DATA IN DB"
    echo "INSERT START ..."
    for (( i=0; i<$TOTAL; i++ ))
    do
        echo $i
        DATA=$(jq ".[${i}]" vehicleinfo.json)
        MAKE=$(jq -r '.make' <<< ${DATA})
        MODEL=$(jq -r '.model' <<< ${DATA})
        YEAR=$(jq -r '.year' <<< ${DATA})

        (docker exec -i $CONTAINER_ID psql -U digihey -d digihey -c "INSERT INTO vehicle (make,model,year) VALUES ('$MAKE','$MODEL','$YEAR');")
    done
    echo "INSERT DONE"
fi

