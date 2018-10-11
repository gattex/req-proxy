echo "Enviroment Test"
echo "Build"
docker-compose -f docker-compose.yml -f docker-compose.test.yml  build h2h-service
echo "Run"
docker-compose -f docker-compose.yml -f docker-compose.test.yml  up -d h2h-service
