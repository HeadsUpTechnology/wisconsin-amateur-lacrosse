import { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc, Firestore } from 'firebase/firestore';

interface IAPIHandler {
	db: Firestore,
	res: NextApiResponse,
	req: NextApiRequest,
	get: () => Promise<void>;
	post: () => Promise<void>;
	put: () => Promise<void>;
	delete: () => Promise<void>;
	handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}

class APIHandler implements IAPIHandler {
	db: Firestore
	res: NextApiResponse | any;
	req: NextApiRequest | any;

	constructor() {
		const app = initializeApp({
			apiKey: process.env.FIRESTORE_API_KEY,
			authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
			projectId: process.env.FIRESTORE_PROJECT_ID,
		})

		this.db = getFirestore()
	}

	handler = async (req: NextApiRequest, res: NextApiResponse) => {
		this.req = req;
		this.res = res;
		
		try {
			switch(req.method) {
				case 'GET':
					return this.get();
				case 'POST':
					return this.post();
				case 'PUT':
					return this.put();
				case 'DELETE':
					return this.delete();
			}
		} catch {
			res.status(500).end();
		}
	}

	public async get () { this.res.status(400).end() }
	public async post () { this.res.status(400).end() }
	public async put () { this.res.status(400).end() }
	public async delete () { this.res.status(400).end() }

	protected async getById(collection: string, id: string) {
		const docRef = doc(this.db, collection, id);
			const snap = await getDoc(docRef);
	
			if(snap.exists()) {
				this.res.status(200).json(snap.data());
			} else {
				this.res.status(404).end();
			}
	}
}

export default APIHandler;