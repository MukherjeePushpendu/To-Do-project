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