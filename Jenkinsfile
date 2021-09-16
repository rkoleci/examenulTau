pipeline {
  agent {
    docker {
      image 'node:latest'
    }

  }
  stages {
    stage('Starting Notification') {
      when {
        anyOf {
          branch 'develop'
          branch 'master'
        }

      }
      steps {
        slackSend(color: '#FFFF00', channel: '#p-et-frontend-private', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
      }
    }

    stage('Dependencies') {
      steps {
        sh 'apt update && apt -y install rsync'
      }
    }

    // stage('Analysis') {
    //   steps {
    //     sh 'yarn run analyze'
    //   }
    // }

    stage('Build') {
      when {
        branch 'master'
      }
      steps {
        sh 'npm run build'
      }
    }

    stage('Stg-Build') {
      when {
        branch 'develop'
      }
      steps {
        sh 'npm run build'
      }
    }

    // stage('Deploy') {
    //   when {
    //     branch 'master'
    //   }
    //    steps {
    //    sshagent(credentials: ["${SSHKEYINES}"]) {
    //     sh '/usr/bin/rsync -av $WORKSPACE/public/ -e "ssh -p 22209 -o StrictHostKeyChecking=no" ${SSH_USERLOGIN}@${PROD_ENV}:/data/microservices/examenultau/'
    //     }
    //   }
    // }

    stage('Stg-Deploy') {
      when {
        branch 'develop'
      }
       steps {
       sshagent(credentials: ["${SSHKEYINES}"]) {
        sh '/usr/bin/rsync -av $WORKSPACE/build/ -e "ssh -o StrictHostKeyChecking=no" ${SSH_USERLOGIN}@${TEST_ENV}:/data/working/frontend-et/data/'
        }
      }
    }

  }
  environment {
    CI = 'true'
  }
  post {
        always {
        slackSend channel: '#p-et-frontend-private',
            message: "@channel Build *${currentBuild.currentResult}:* - Job ${env.JOB_NAME}, build no. ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
        echo 'FINISHED'
        }
  }

  options {
    parallelsAlwaysFailFast()
    disableConcurrentBuilds()
    timeout(time: 10, unit: 'MINUTES')
    timestamps()
  }
  triggers {
    githubPush()
  }
}
