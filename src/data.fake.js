function formatToHtml(str) {
	const html =
		`<p><strong>${str.slice(0, str.search(':'))}</strong>` +
		`${str.slice(str.search(':') + 1, str.length)}</p>`;
	return html;
}

// Type one valid fake email on line 12 and 22
const result = [
	{
		name: 'john smith',
		email: 'wekisap905@nhmty.com', // fill this field (https://temp-mail.org/)
		message: 'Mensagem: Você recebeu uma nova mensagem',
		notifiable_type: 'Mensagem',
		notification_mail_preferences: {
			late_task_follower: true,
			late_task_responsible: true,
		},
	},
	{
		name: 'sarah parker',
		email: 'meloci7017@ovooovo.com', // fill this field (https://temp-mail.org/)
		message: 'Comentário: Alguém comentou em uma postagem sua',
		notifiable_type: 'Comentário',
		notification_mail_preferences: {
			late_task_follower: true,
			late_task_responsible: true,
		},
	},
];

const getData = async () => {
	const data = [];
	let i = 0;
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
};

export { getData as default };
