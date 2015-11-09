if [ ! -f /.env ]; then
  echo "Setting up dev env vars"
  source ./.env
fi

node ./slack.js
