 # Run server postgress docker:
docker run --name some-postgres -e POSTGRES_PASSWORD=postgrespw -e POSTGRES_DB=blog -p 5432:5432  -d postgres
