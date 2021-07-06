import { CronJob } from 'cron';
import sendEmail from './node_mailer.js';
import getData from './data.js';
const mondayToFridayAtSevenAm = '0 7 * * MON-FRI';
const eachFiveMinutes = '*/5 * * * *';
const locale = 'America/Sao_Paulo';
const runImediatly = true;
const command = null;
const oneSecond = 1000;

const queue = (email) => {
	let i = 0;
	const interval = setInterval(() => {
		const hasEmail = email[i];
		if (!hasEmail) {
			return clearInterval(interval);
		}
		sendEmail(hasEmail);
		i++;
	}, oneSecond);
};

const job = new CronJob(
	eachFiveMinutes,
	async () => {
		const data = await getData();
		queue(data);
	},
	command,
	runImediatly,
	locale,
);

job.start();
