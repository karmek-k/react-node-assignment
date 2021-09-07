# Assignment - to-do list

## Running

### Backend

The easiest way to build and run the backend
is by using Docker and Docker Compose.
Run the following command in the current directory:

```
docker-compose up
```

Alternatively, if you want to set the backend up manually,
please read the [backend's README file](backend/README.md).

### Frontend

There is a [README file](frontend/README.md) that explains
how to run a development Next.js server.

**IMPORTANT**: The default URL to the backend is `http://localhost:8000`.
In order to change it, edit [frontend/utils/api.ts](frontend/utils/api.ts).
