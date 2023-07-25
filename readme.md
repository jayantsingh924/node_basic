# Here's the complete list of Docker commands used for this application

1. Set up the project directory and files (Steps 1 and 2 were described in the previous responses):

2. Initialize the Node.js project:

npm init

3.Install Express.js:

npm install express

4.Create the web application code (app.js):

5.Create a Dockerfile:

6.Build the Docker image:

docker build -t basicapp .

7.Run the Docker container:

docker run -p 8080:3000 basicapp

8.(Optional) List the running Docker containers (to find the container ID or name):

docker ps

9.(Optional) Stop the Docker container (replace `<container_id_or_name>` with the actual container ID or name obtained from the previous command):

docker stop <container_id_or_name>

These are the Docker commands used for creating the basic web application with Node.js, Express.js, and Docker.
