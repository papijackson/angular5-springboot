pipeline {
agent none
    stages {
        stage('Build Backend') {
            agent { docker 'maven:3.3.3' }
            steps {
                sh 'cd UserManagementApp/user-app-backend && mvn clean install'
            }
        }
        stage('Build FrontEnd') {
            agent { docker 'node:7-alpine' }
            steps {
                sh 'cd UserManagementApp/user-app-frontend && npm install'
                sh 'cd UserManagementApp/user-app-frontend && npm build'
            }
        }
    }
  stages {
    stage('Build') {
      steps {
        sh 'cd UserManagementApp && mvn clean install'
      }
    }
  }
}
