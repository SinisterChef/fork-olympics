#!/bin/bash

# Navigate to the Directus project directory and start it
echo "Starting Directus..."
mintty -t "Directus" -e bash -c "cd ./cms && npx directus start; exec bash" &

# Navigate to the React project directory and start it
echo "Starting React..."
mintty -t "React" -e bash -c "cd ./project && npm run dev; exec bash" &

# Wait for background processes to complete (optional)
wait

echo "Both React and Directus are up and running!"
