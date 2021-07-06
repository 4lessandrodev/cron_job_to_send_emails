# Cron job for send notification

### Get all notification on database

Requirements

- make sure you have a database with the table as in the script example `migration.sql`
- make sure you have entered the credentials in the .env file
- make sure you have nodeJs installed
- make sure you have installed all dependencies `yarn intall`
- make sure your user table on column `notification_mail_preferences` look like the exemple bellow
- make sure you have a valid email user account

```json
{
	"late_task_follower": true,
	"late_task_responsible": true
}
```

- make sure you have set the default cron
- you can use Cronhub to create your pattern
  https://crontab.cronhub.io/

### Run the project

`$ yarn start`
