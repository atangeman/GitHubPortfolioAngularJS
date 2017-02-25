#!/bin/bash

MY_DIR=$(dirname $(readlink -f $0))
while getopts c:d:s: option # get type and name of js file to generate
do
    case "${option}"
    in
        c) echo "generating controller ${OPTARG}.js"
           cat $MY_DIR/_basectrl.js > ${OPTARG}.js
           echo "complete"
           ;;
        d) echo "generating directive ${OPTARG}.js"
           cat $MY_DIR/_basedirective.js > ${OPTARG}.js
           echo "complete"
           ;;
        s) echo "generating service file ${OPTARG}.js"
           cat $MY_DIR/_baseservice.js > ${OPTARG}.js
           echo "complete"
           ;;
    esac
done

echo "done"

exit 0
