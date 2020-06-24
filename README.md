### Collection Items Server

To run:
docker-compose build && docker-compose up

To test visit:
http://localhost:4000/v1/collectionitems/

Note:
If building and running server outside of docker:
use: npm install && npm run dev

Modify config/appconsts.js to use:
mongoHost: 'mongodb://localhost:27017'
