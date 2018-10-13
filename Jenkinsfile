pipeline {
agent none
    stages {
        stage('Build') {
          parallel {
            stage('Build Backend') {
            agent { docker 'maven:3.3.3' }
              steps {
                  sh 'cd UserManagementApp/user-app-backend && mvn clean install'
              }
            }

            stage('Build FrontEnd') {
                agent { docker 'node:7-alpine' }
                steps {
                    sh 'cd angular-front-template && npm install'
                    sh 'cd angular-front-template && npm build'
                }
            }

          }

        }
    }
}
