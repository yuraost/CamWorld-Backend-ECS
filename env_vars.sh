#!/bin/bash
echo PORT="${PORT}" >> /usr/src/app/.production.env
echo POSTGRES_HOST="${POSTGRES_HOST}" >> /usr/src/app/.production.env
echo POSTGRES_USER="${POSTGRES_USER}" >> /usr/src/app/.production.env
echo POSTGRES_DB="${POSTGRES_DB}" >> /usr/src/app/.production.env
echo POSTGRESS_PASSWORD="${POSTGRESS_PASSWORD}" >> /usr/src/app/.production.env
echo POSTGRESS_PORT="${POSTGRESS_PORT}" >> /usr/src/app/.production.env
echo PRIVATE_KEY="${PRIVATE_KEY}" >> /usr/src/app/.production.env
exec "$@"