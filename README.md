# To-Do Project

This is a simple To-Do application built with HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as complete.

## Local Setup

To run this project locally, you can simply open the `index.html` file in your web browser. No special server setup is required for basic functionality.

1. Clone the repository:
   ```bash
   git clone https://github.com/MukherjeePushpendu/To-Do-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd To-Do-project
   ```
3. Open `index.html` in your preferred web browser.

## Running with Docker

This project includes a `dockerfile` which allows you to build and run the application within a Docker container.

1. Build the Docker image:
   ```bash
   docker build -t todo-app .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 80:80 todo-app
   ```
3. Open your web browser and navigate to `http://localhost` to access the application.

## Jenkins Integration

To set up continuous integration with Jenkins, you can configure a Jenkins pipeline to build and deploy your Docker image whenever changes are pushed to the repository.

### Prerequisites:
- Jenkins installed and running.
- Docker installed on your Jenkins agent.
- GitHub plugin for Jenkins installed.

### Jenkinsfile (Pipeline as Code)

For a pipeline-as-code approach, you can create a `Jenkinsfile` in the root of your repository. Below is an example `Jenkinsfile` that builds the Docker image and runs it.

```groovy
pipeline {
    agent any

    tools {
        // Assuming Docker is available in the Jenkins environment
        // If not, you might need to specify a Docker tool or ensure it's in the PATH
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t todo-app .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker stop todo-app-container || true'
                    sh 'docker rm todo-app-container || true'
                    sh 'docker run -d --name todo-app-container -p 80:80 todo-app'
                }
            }
        }
    }
}
```

### Setting up a Jenkins Job:

1. In Jenkins, create a new "Pipeline" job.
2. Configure the "Definition" to "Pipeline script from SCM".
3. Select SCM as "Git" and enter your Repository URL: `https://github.com/MukherjeePushpendu/To-Do-project.git`
4. Specify "main" (or your main branch name) for "Branches to build".
5. The "Script Path" should be `Jenkinsfile`.
6. In the "Build Triggers" section, check "GitHub hook trigger for GITScm polling". This will enable the webhook integration.

## GitHub Webhook

To trigger Jenkins builds automatically on every push to your GitHub repository, you need to set up a webhook in your GitHub repository settings.

1. Go to your GitHub repository: `https://github.com/MukherjeePushpendu/To-Do-project.git`
2. Navigate to **Settings** > **Webhooks**.
3. Click on **Add webhook**.
4. **Payload URL**: Enter your Jenkins URL followed by `/github-webhook/` (e.g., `http://your-jenkins-url:8080/github-webhook/`).
5. **Content type**: Select `application/json`.
6. **Secret**: (Optional) If you have configured a secret in your Jenkins GitHub plugin, enter it here.
7. **Which events would you like to trigger this webhook?**: Select "Just the push event."
8. Ensure "Active" is checked.
9. Click **Add webhook**.

Now, every time you push changes to your GitHub repository, Jenkins will be notified and will trigger a new build of your pipeline. 