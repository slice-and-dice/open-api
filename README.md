# data-pipeline

## Running the app locally

We manage [backing services](https://12factor.net/backing-services) like Postgres, as attached resources.

Wire the app to your insulated Postgres development instance by setting the `${DATABASE_URL}` environment variable, prior to starting the app.

```
export DATABASE_URL="postgres://username:password@host:port/database?ssl=true"
npm start
```
