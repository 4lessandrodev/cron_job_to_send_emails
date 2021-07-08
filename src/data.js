import pgp from 'pg-promise';
import promise from 'bluebird';
import { DB_HOST, DB_USER, DB_PASS, DB_PORT, DB_NAME } from '../env.js';

const initOptions = {
	promiseLib: promise,
};

const connection = {
	host: DB_HOST,
	port: DB_PORT,
	database: DB_NAME,
	user: DB_USER,
	password: DB_PASS,
};

const db = pgp(initOptions)(connection);

function formatToHtml(str) {
	const html =
		`<p><strong>${str.slice(0, str.search(':'))}</strong>` +
		`${str.slice(str.search(':') + 1, str.length)}</p>`;
	return html;
}

// Get data from postgres database. tables (notifications, users)
const getData = async () =>
	db
		.any(
			`SELECT name, email, notifiable_type, message, notification_mail_preferences FROM notifications AS n
INNER JOIN users AS u ON n.to_id = u.id
WHERE n.read = 'false' 
AND u.unconfirmed_email = 'false'
AND active = 'true'`,
		)
		.then((result) => {
			let i = 0;
			const data = [];
			while (result[i]) {
				const contact = result[i];
				if (
					contact.notification_mail_preferences.late_task_follower ||
					contact.notification_mail_preferences.late_task_responsible
				) {
					data.push({
						name: contact.name,
						email: [contact.email],
						notificationType: contact.notifiable_type,
						text: contact.message,
						html: formatToHtml(contact.message),
					});
				}
				i++;
			}
			return data;
		})
		.catch((error) => {
			console.log(error);
			return [];
		});

export { getData as default };
