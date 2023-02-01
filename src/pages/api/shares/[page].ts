import APIHandler from '@/common/APIHandler';
import { Share } from '@/types/Share';
import { collection, getDocs, limit, onSnapshot, orderBy, query, startAt } from 'firebase/firestore';

const PAGE_SIZE = 5;

class ShareAPIHandler extends APIHandler {
	public override async get() {
		const { db, res, req } = this;
		const { page = 0 } = req.query;

		try {
			const response: Share[] = [];
			const getShares = query(collection(this.db, '/shares'), orderBy('created'), startAt(page * PAGE_SIZE), limit(PAGE_SIZE));
			const snapshot = await getDocs(getShares);
			snapshot.docs.forEach((doc) => response.push(doc.data() as Share));
			console.log(response)
			res.status(200).json(response);
		} catch (e: any) {
			res.status(500).json({ params: req.query.params, message: e.message });
			res.end();
		}

		this.res.end();
	}
}

const shareAPIHandler = new ShareAPIHandler();

export default shareAPIHandler.handler;