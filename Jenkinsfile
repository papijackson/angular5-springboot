pipeline {
  agent {
    docker {
      image 'maven:3.3.3'
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