#!/usr/bin/env groovy

@Library(['piper-lib-os']) _

//Setup the skeleton for Jenkins based Runs
node {
 stage('Frontend Integration Tests') {
  // Get some code from a GitHub repository
  deleteDir()
  git 'https://github.com/SAP-samples/teched2019-opa.git'
  sh 'git checkout solved'

  // below code is to execute from karma
  karmaExecuteTests script: this, failOnError: false
  testsPublishResults(
   script: this,
   junit: [pattern: 'target/junit/*/TEST*.xml', archive: true]
  )
  publishHTML target: [
   allowMissing: true,
   keepAll: true,
   reportDir: 'target/html/',
   reportFiles: 'JUnit.html',
   reportName: "OPA5 Test Report"
  ]

  publishHTML target: [
   allowMissing: true,
   keepAll: true,
   reportDir: 'target/coverage/Chrome 76.0.3809 (Linux 0.0.0)/',
   reportFiles: 'index.html',
   reportName: "OPA5 Coverage Report"
  ]
 }
 stage('System Tests') {
  deleteDir()
  git 'https://github.com/SAP-samples/teched2019-uiveri5.git'
  sh 'git checkout solved'
  // Call to execute UIVeri5 from piper library using jenkins credential store
  withCredentials([usernamePassword(
   credentialsId: 'uiveri5',
   passwordVariable: 'password',
   usernameVariable: 'username'
  )]) {
   uiVeri5ExecuteTests script: this, testOptions: "--config.auth.sapcloud-form.user=${username} --config.auth.sapcloud-form.pass=${password} --params.user=${username} --params.pass=${password}"

   publishHTML target: [
    allowMissing: true,
    alwaysLinkToLastBuild: true,
    keepAll: true,
    reportDir: 'target/report/',
    reportFiles: "report.html",
    reportName: "UIVeri5 Test Report"
   ]
  }
 }
}
