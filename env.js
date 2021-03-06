import env from 'env-var';

export const MAIL_USER = env.get('MAIL_USER').required().asString();
export const MAIL_PASS = env.get('MAIL_PASS').required().asString();
export const MAIL_HOST = env.get('MAIL_HOST').required().asString();
export const MAIL_NO_REPLY_MAIL = env
	.get('MAIL_NO_REPLY_MAIL')
	.required()
	.asString();
export const MAIL_NO_REPLY_NAME = env
	.get('MAIL_NO_REPLY_NAME')
	.required()
	.asString();
export const DB_NAME = env.get('DB_NAME').asString();
export const DB_HOST = env.get('DB_HOST').asString();
export const DB_USER = env.get('DB_USER').asString();
export const DB_PASS = env.get('DB_PASS').asString();
export const DB_PORT = env.get('DB_PORT').asPortNumber();
export const IS_MAIL_SSL = env.get('IS_MAIL_SSL').required().asBool();
export const MAIL_PORT = env.get('MAIL_PORT').required().asPortNumber();
