Back-end API Environment:
	AWS Elastic Beanstalk Node.js 12 running on 64bit Amazon Linux 2/5.4.1
		URL - http://udagramapi-env.eba-qxkmez6h.us-east-1.elasticbeanstalk.com/
		Environment includes Postgres database - endpoint: https://console.aws.amazon.com/rds/home?region=us-east-1#dbinstances:id=aa7xcyevl2p02y
		App name: udagram-api
		S3 bucket for uploading udagram-api app - elasticbeanstalk-us-east-1-618730978837

Front-End 
	AWS S3 bucket udacity-fullstackhosted
		Configured for static website hosting: http://udacity-fullstackhosted.s3-website-us-east-1.amazonaws.com

Deployment Pipeline

	CircleCI connected to main branch of GitHub project - https://github.com/Daniel-M-Kelly/Udacity-HostingFullStack

