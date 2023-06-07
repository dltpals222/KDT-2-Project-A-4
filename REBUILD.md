프로젝트 진행 및 문제 추적을 용이하게 하기 위한 환경 재구축하기

설치 할 목록 및 순서
1. TypeScript
2. Webpack 
3. React, React-DOM, React-Router-DOM
4. express
5. mariadb

이후 추가로 설치해야 할 목록에 대해선 아래 추가할 것.

추가사항

재구축 과정의 경우, 가능한 한 단계씩 진행하고 커밋할 것.

설치시, 이하의 목록들 이외에는 모두 devDependencies로 설치할 것.(이외 모듈들은 개발 환경에서만 쓰며 프로젝트 실행때 필요하지 않기 때문임.)
1. express
2. react, react-dom, react-router-dom
3. mariadb

추가 - ESM 방식을 사용하기에 package.json에 types:module을 추가했으나, 테스트 결과 트랜스파일하여 사용하다보니 굳이 적용할 필요가 없음을 확인, 그렇기에 package의 types:module을 삭제하기로 결정함.