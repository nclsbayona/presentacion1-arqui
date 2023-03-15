#!/bin/bash
sleep 45s
./wait-for-it.sh db:5432 -- python manage.py migrate
./wait-for-it.sh db:5432 -- python manage.py runserver 0.0.0.0:8000
./wait-for-it.sh db:5432 -- echo "Server ready :D"