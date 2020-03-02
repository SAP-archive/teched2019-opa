#!/usr/bin/env groovy

//Setup the skeleton for Jenkins based Runs
node {
 stage('Frontend Integration Tests') {
  // Get some code from a GitHub repository
 git 'https://github.com/SAP-samples/teched2019-opa.git'
 sh 'git checkout solved && git pull'
 sh "ls -l"
 def files = findFiles(glob: '*/uiveri5/conf.js')
 echo """${files[0].path}"""
}
}
