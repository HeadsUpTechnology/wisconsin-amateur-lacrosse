import { NextApiRequest, NextApiResponse } from 'next';
import APIHandler from '@/common/APIHandler';

class SharesAPIHandler extends APIHandler {
}

const sharesAPIHandler = new SharesAPIHandler();
export default sharesAPIHandler.handler;