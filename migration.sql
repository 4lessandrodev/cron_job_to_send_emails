-- DROP DATABASE test_cron_db;
-- CREATE DATABASE test_cron_db ENCODING 'UTF8' OWNER postgres;

DO $$
DECLARE

BEGIN

CREATE TABLE users (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	email VARCHAR ( 90 ) UNIQUE NOT NULL,
	notification_mail_preferences JSONB NOT NULL DEFAULT '{	"late_task_follower": true,
		"late_task_responsible": true
	}'::JSONB,
	unconfirmed_email BOOLEAN NOT NULL,
	active BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE notifications (
	id serial PRIMARY KEY,
	notifiable_type VARCHAR (10) NOT NULL,
	message VARCHAR (120) NOT NULL,
	to_id INTEGER NOT NULL,
	FOREIGN KEY (to_id) REFERENCES users (id),
	read BOOLEAN NOT NULL
);

END $$