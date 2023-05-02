// node 환경에서 모킹을 하기위한 설정 (JEST 테스트)
// JEST는 Node.js 위에서 돌아가므로 Jest용 서버모킹도 만들어져있음

import { setupServer } from 'msw/node';
import handlers from './handlers';

const server = setupServer(...handlers);

module.exports = server;
