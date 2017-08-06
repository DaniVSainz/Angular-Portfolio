Previous Push Successful after zone.js update\

We're using NPM not yarn.Yarn is ignored by heroku since it's is added to slugignore.

Updating node and npm versions fixed heroku deploys.

We also updated zone.js although i do not believe that was the root cause of production deploys failing.
