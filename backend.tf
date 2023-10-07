terraform {
  backend "s3" {
    bucket = "mytf-state-bucket-server"
    key = "main"
    region = "us-east-2"
    dynamodb_table = "my-dynamodb-table-server"
  }
}