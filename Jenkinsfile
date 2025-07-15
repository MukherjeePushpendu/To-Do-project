pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                git 'https://github.com/MukherjeePushpendu/To-Do-project.git'
            }
        }

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
