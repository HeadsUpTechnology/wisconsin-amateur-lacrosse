import { getDoc, doc } from 'firebase/firestore';
import APIHandler from '@/common/APIHandler';

class ShareAPIHandler extends APIHandler {
	public override async get() {
		const { id } = this.req.query;

		try {
			this.getById("shares", id as string);
		} catch (e: any) {
			this.res.status(500).json({ params: this.req.query.params, message: e.message })
		}
	}
}

const shareAPIHandler = new ShareAPIHandler();

export default shareAPIHandler.handler;