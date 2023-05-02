import axios from 'axios';

describe('MSW JEST 연동 테스트', () => {
  it('모킹한 라이브러리로 정상적으로 요청을 보내는지', async () => {
    const response = await axios.post('/test').then(res => {
      return res.data;
    });
    expect(response).toHaveProperty('message','test Success');
    expect(response.message).toEqual('test Success');
  });
});
