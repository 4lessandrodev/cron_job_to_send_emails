'use strict';
import nodemailer from 'nodemailer';
import {
	MAIL_USER,
	MAIL_PASS,
	MAIL_HOST,
	MAIL_NO_REPLY_MAIL,
	MAIL_NO_REPLY_NAME,
	IS_MAIL_SSL,
	MAIL_PORT,
} from './env.js';

async function sendEmail(data) {
	const transporter = nodemailer.createTransport({
		host: MAIL_HOST,
		port: MAIL_PORT,
		secure: IS_MAIL_SSL,
		auth: {
			user: MAIL_USER,
			pass: MAIL_PASS,
		},
	});

	const info = await transporter.sendMail({
		from: `"${MAIL_NO_REPLY_NAME}" ${MAIL_NO_REPLY_MAIL}`,
		to: data.email.toString(),
		subject: '🏃🏾‍♂️ Notificação de ' + data.notificationType,
		text: data.text,
		html: data.html,
	});
	console.log('Message sent at: ', new Date());
	console.log(info.messageId);
}

export { sendEmail as default };
