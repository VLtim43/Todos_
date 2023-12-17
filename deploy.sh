#!/bin/bash

# Argument: Name of the project
project=$1

# Check if the project name is provided
if [ -z "$project" ]; then
  echo "Please specify a project to deploy"
  exit 1
fi

if [ "$project" == "nextjs" ]; then
  dir="next.js"
else
  echo "Unknown project: $project. Please specify a valid project."
  exit 1
fi

cd "$dir" && vercel
