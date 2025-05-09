const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

// CORS와 JSON 설정
app.use(cors());
app.use(express.json());

// 정적 파일을 제공할 폴더 설정
app.use(express.static('public'));

// 기본 GET 요청 처리 (index.html이 제공될 것입니다)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
