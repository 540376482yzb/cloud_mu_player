## What is this project about
Admin site for managing media content, upload and download media.

## The goal
MVP feature for managing media content, upload and download media. Have the bility to sync up playlist with mobile app.

## System Design
[system design](https://github.com/540376482yzb/cloud_mu_player/wiki/system-design)

## Road map

* Music Service ( upload, get download link of media content)

## Logs/bugs

* fix: permission error with Firebase.getSignUrl. Solution is to add token creator role to default gcp account under IAM.
* fix: unable to write to remote POSTGRES Database. Cloud functions does not allow any outbound network request to other service provider in free tier.
* fix: url length exceed knex.string limitation. Solution is to change from string to text in schema.
