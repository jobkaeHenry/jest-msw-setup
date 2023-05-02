// 브라우저 환경에서 모킹을 하기위한 설정 (실제 우리 테스트)
// JEST는 Node.js 위에서 돌아가므로 Jest용 서버모킹도 만들어져있음

import { setupWorker } from 'msw';
import handlers from './handlers';

const worker = setupWorker(...handlers);

export default worker;
