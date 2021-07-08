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

---

## How to run this project?

> ⚠️ **You can jump step one to seven**: If you Import `getData` function from `data.fake.js` instead `data.js` on `index.js`

- Run optionally docker compose `docker-compose up -d` or if you have postgressql installed on you computer just ignore this step
- Connect to your postgres `psql -U postgres -h localhost -p 5432 -d test_cron_db`
- Create your database `CREATE DATABASE test_cron_db;`
- Create valid fake email (you can use https://temp-mail.org/') and update them on migration.sql script line 33
- Create your table: Copy the commands script on migration.sql and paste on your terminal
- Check if tables were created: `\dt`
- Exit your postgres terminal connection: `\q`
- Create your `.env` file with your credentials
- You may use a fake smtp email service like `mailtrap` https://mailtrap.io/fake-smtp-server/
- `$ yarn start`
- Wait until timer match. Default timer is 5 minutes
