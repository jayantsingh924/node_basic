
# Docker Commands for Basic Node.js Web Application

Below is a step-by-step guide on how to set up and run a basic Node.js web application using Docker. These commands will help you create a simple web application and containerize it with Docker.

1. Set up the project directory and files (Steps 1 and 2 were described in the previous responses):

2. Initialize the Node.js project:
```
npm init
```

3. Install Express.js:
```
npm install express
```

4. Create the web application code (app.js):
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is my basic Node.js web application!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

5. Create a Dockerfile:
```
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
```

6. Build the Docker image:
```
docker build -t basicapp .
```

7. Run the Docker container:
```
docker run -p 8080:3000 basicapp
```

8. (Optional) List the running Docker containers (to find the container ID or name):
```
docker ps
```

9. (Optional) Stop the Docker container (replace `<container_id_or_name>` with the actual container ID or name obtained from the previous command):
```
docker stop <container_id_or_name>
```

These are the Docker commands used for creating the basic web application with Node.js, Express.js, and Docker. Once the container is running, you can access the web application by navigating to `http://localhost:8080` in your web browser.

Feel free to customize the application code and Dockerfile according to your specific needs. Happy coding!
