# To-do CRUD Apps

This repository contains applications that implement CRUD operations for a to-do list.

## Overview

The API provided makes HTTP requests to a PostgreSQL instance. This PostgreSQL instance is running inside a Docker container. For more details on the setup and deployment of the PostgreSQL instance, please refer to the repository [here](https://github.com/VLtim43/PostgreSQL_Docker_test).

## Deployment to Vercel

This repository uses a shell script to deploy specific projects to Vercel. To deploy a project, run the script with the project name as an argument:

```bash
./deploy.sh <project_name>
```

## Interacting with the API using `curl`
