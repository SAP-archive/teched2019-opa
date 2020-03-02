#!/usr/bin/env groovy

//Setup the skeleton for Jenkins based Runs
node {
 stage('Frontend Integration Tests') {
  // Get some code from a GitHub repository
 git 'https://github.com/SAP-samples/teched2019-opa.git'
 sh 'git checkout solved'
 sh "ls -l"
 def files = findFiles(glob: '**/cart-view.xml')
 echo """${files[0].name} ${files[0].path} ${files[0].directory} ${files[0].length} ${files[0].lastModified}"""
}
}
