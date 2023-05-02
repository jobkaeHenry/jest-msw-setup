import { rest } from 'msw';
import testHandler from './handler/testHandler';


// 원래 (Dom에서) 는 /test 형태로 Path만 적어줘도 동작하지만, Node환경 ('Jest') 에서는 URL을 전부 적어줘야함
export default [
  testHandler()
];
