pipeline {
    agent any
    // {
    //     label "BuildAgent2"
    // }
    // environment {
    //     registry = "756519817970.dkr.ecr.us-east-2.amazonaws.com/postboard-server-repo"
    // }
    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        
        stage("Code Coverage") {
            steps {
                jacoco()
            }
        }
       
        stage("Build &Upload") {
            steps {
                sh "npm install"
                // sh "npm run build"
                sh "set +x && echo \"//ec2-18-222-132-112.us-east-2.compute.amazonaws.com:8081/repository/postboard-server/:_authToken=NpmToken.e16aff1c-2ce9-3004-ac4e-b66093f87b7d\" >> .npmrc"
                sh "npm publish"
                 //To publish without using puting the repo url in package.json do the line below
                //npm publish --registry http://ec2-18-222-132-112.us-east-2.compute.amazonaws.com:8081/repository/postboard-server/
            }
        }
      
        // stage ("Code Quality") {
        //     steps {
        //         withSonarQubeEnv("SonarQube") {
        //             sh "npm install sonar-scanner"
        //             sh "npm run sonar"
        //         }
        //     }
        // }
        
        //     stage ("terraform init") {
        //     steps {
        //         sh ("terraform init -reconfigure") 
        //     }
        // }
        
        // stage ("terraform plan") {
        //     steps {
        //         sh ('terraform plan') 
        //     }
        // }

        // stage ("terraform apply") {
        //     steps {
        //         echo "Terraform action is --> ${action}"
        //         sh ('terraform ${action} --auto-approve') 
        //   }
        // }
        
        
//         stage ('DEV Notify')  {
//             steps {

//       slackSend(channel:'myredditpipeline', message: "Job is successful, here is the info -  Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
//   }
// }


 stage ('DEV Approve')  {
            steps {
               echo "Taking approval from DEV Manager for QA Deployment"     
            timeout(time: 7, unit: 'DAYS') {
            input message: 'Do you approve QA Deployment?', submitter: 'admin'
            }

}
   }






        
        
        
    //     stage('Building image') {
    //   steps{
    //     script {
    //       dockerImage = docker.build registry
    //     }
    //   }
    // }
    
    // stage('Pushing to ECR') {
    //  steps{  
    //      script {
    //             sh 'aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 756519817970.dkr.ecr.us-east-2.amazonaws.com'
    //             sh 'docker push 756519817970.dkr.ecr.us-east-2.amazonaws.com/postboard-server-repo:latest'
    //      }
    //     }
    //   }
   

    //  stage('stop previous containers') {
    //      steps {
    //         sh 'docker ps -f name=postboard-server-container -q | xargs --no-run-if-empty docker container stop'
    //         sh 'docker container ls -a -fname=postboard-server-container -q | xargs -r docker container rm'
    //      }
    //     }
        
        

// stage('Docker Run') {
//      steps{
//          script {
//                 sh 'docker run -d -p 8091:3000 --rm --name postboard-server-container 756519817970.dkr.ecr.us-east-2.amazonaws.com/postboard-server-repo:latest'
//             }
//       }
//     }



        
    }
}
