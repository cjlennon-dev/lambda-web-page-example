# lambda-web-page

This component creates an API Gateway endpoint that is linked to a Lambda function that returns HTML (i.e. page can be viewed in a web browser)

## Intallation

Install this component from the [AWS Serverless Repository](https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:526133899854:applications~lambda-web-page) 

## Local development

To use / modify etc the source code you can get started by:

1.  Clone this repo

2.  From the command line navigate to the `/lambda` folder and run `npm run mock`.  This will mock the html response by creating a file as `mock/mocked-response.html`

3.  This component can be built using AWS Codebuild.  Use the `buildspec.yaml` template if building using Codebuild


     


