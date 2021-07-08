-- DROP DATABASE test_cron_db;

DO $$
DECLARE
-- Create your database
-- CREATE DATABASE test_cron_db ENCODING 'UTF8' OWNER postgres;

BEGIN
 ------- starts here -------
CREATE TABLE users (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	email VARCHAR ( 90 ) UNIQUE NOT NULL,
	notification_mail_preferences JSONB NOT NULL DEFAULT '{	"late_task_follower": true,
		"late_task_responsible": true
	}'::JSONB,
	unconfirmed_email BOOLEAN NOT NULL DEFAULT false,
	active BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE notifications (
	id SERIAL PRIMARY KEY,
	notifiable_type VARCHAR (10) NOT NULL DEFAULT 'teste',
	message VARCHAR (120) NOT NULL,
	to_id INTEGER NOT NULL,
	FOREIGN KEY (to_id) REFERENCES users (id),
	read BOOLEAN NOT NULL DEFAULT false
);

-- change the emails values for a valid faker email 
-- you can use https://temp-mail.org/
INSERT INTO users (name, email) 
VALUES ('john smith', 'john@mail.com'),('sarah parker', 'parker@mail.com');

-- message pattern [title]:[message]
INSERT INTO notifications (message, to_id) 
VALUES ('Comentário: Você foi marcado em um comentário', 1), 
('Mensagem: Você recebeu uma nova mensagem', 2);
 ------- finish here -------

END $$