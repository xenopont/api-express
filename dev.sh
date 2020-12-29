#!/usr/bin/env bash

echo "Building containers..."
echo ""
docker build -t api-server-image --file ./docker/dev-server.dockerfile .

echo "Starting containers..."
echo ""
docker-compose -p api-express-mongo --file ./docker/dev-composition.json up -d

echo "                                                               "
echo "                                                               "
echo "                                                               "
echo "    ╔═════════════════════════════════════════════════════╗    "
echo "    ║ API server dev environment                          ║    "
echo "    ╟─────────────────────────────────────────────────────╢    "
echo "    ║                                                     ║    "
echo "    ║ Command list:                                       ║    "
echo "    ║                                                     ║    "
echo "    ║     • install - installs npm dependencies           ║    "
echo "    ║     • build   - builds the server app from sources  ║    "
echo "    ║     • lint    - validates Typescript code quality   ║    "
echo "    ║     • test    - runs the app tests                  ║    "
echo "    ║     • watch   - starts watching source file changes ║    "
echo "    ║                 and rebuilds them automatically     ║    "
echo "    ║                                                     ║    "
echo "    ╟─────────────────────────────────────────────────────╢    "
echo "    ║                                                     ║    "
echo "    ║ - call http://localhost:9091/ in your API test      ║    "
echo "    ║     utility to test its functionality               ║    "
echo "    ║ - type 'exit' to leave and stop the dev environment ║    "
echo "    ║                                                     ║    "
echo "    ╚═════════════════════════════════════════════════════╝    "
echo "                                                               "
echo "                                                               "
echo "                                                               "

docker exec -it api-server ash
# here your dev session is running

echo "Stopping servers..."
docker-compose --file ./docker/dev-composition.json stop

# uncomment the following two lines if the containers do not stop automatically
docker stop api-server
docker stop api-mongo

echo "Done."
