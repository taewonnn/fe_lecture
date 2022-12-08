# 설치 방법

https://velog.io/@jxxunnn/

# 협업 컨벤션

## 커밋 컨벤션

### "[태그]: 제목"의 형태이며, : 뒤에만 space가 있음에 유의합니다.

- feat: 새로운 기능 구현
- fix: 오류 수정
- docs: readme.md, json 파일 등 수정, 라이브러리 설치 (문서 관련)
- refactor: 코드 리팩토링
- style: 코드에 변화가 없는 수정 (세미콜론 등)
- chore: 빌드 부분 혹은 패키지 매니저 수정 사항
- rename: 파일 혹은 폴더명 수정, 옮기기
- remove: 파일 삭제

### 커밋 터미널 작성 예시입니다. 본문은 한글로 작성하고 footer에 발행한 이슈와 매치시킵니다.

```
# [타입] : <제목> 형식으로 작성하며 제목은 최대 50글자 정도로만 입력
# 제목을 아랫줄에 작성, 제목 끝에 마침표 금지, 무엇을 했는지 명확하게 작성
[feat]: 로그인 기능 구현
################
# 본문(추가 설명)을 아랫줄에 작성
구글 API 활용하여 로그인 기능 구현, 본인 구글 계정으로 테스트 가능
################
# 꼬릿말(footer)을 아랫줄에 작성 (관련된 이슈 번호 등 추가)
resolved: #이슈번호
################
# feat: 새로운 기능 구현
# fix: 오류 수정
# docs: readme.md, json 파일 등 수정 and 라이브러리 설치 (문서관련)
# refactor : 코드 리팩토링
# style: 코드에 변화가 없는 수정 (세미콜론 등)
# chore: 빌드 부분 혹은 패키지 매니저 수정사항
# rename: 파일 혹은 폴더명 수정 or 옮기기
# remove: 파일 삭제
################
```

## 스타일 컨벤션

### Prettier란 정해진 규칙에 따라 자동으로 코드 스타일을 정리 해주는 도구입니다. 아래와 같은 커맨드로 설치합니다.

`npm install -D prettier`

.prettierrc.js는 다음과 같이 통일합니다.

```js
module.exports = {
  semi: true,
  printWidth: 120,
  endOfLine: "auto",
  singleQuote: true,
  useTabs: false,
  tabWidth: 8,
  trailingComma: "all",
  arrowParens: "always",
};
```

- semi: true - statement 마지막에 세미콜론을 찍음
- printWidth: 120 - 선호되는 한 줄의 길이
- endOfLine: 'auto' - 파일의 마지막에는 EOL을 보장
- singleQuote: true - 쌍따옴표가 아닌 홑따옴표를 사용
- useTabs: false - 탭을 사용하지 않고 스페이스를 사용
- tabWidth: 2 - 탭을 할 경우 2 스페이스
- trailingComma: 'all' - 여러줄로 나뉘었을 때는 쉼표를 사용
- arrowParens: 'always' - 화살표 함수에서 괄호 사용 의무화

### ESLint는 자바스크립트에서 문법적 에러를 표시해주는 도구입니다. 아래와 같은 커맨드로 설치합니다.

`npm install add -D eslint`
추가적인 설정을 위해 다음과 같은 플러그인을 추가로 설치합니다.

```
npm install -D eslint-plugin-import
npm install -D eslint-config-airbnb-base
npm install -D eslint-config-naver
npm install -D eslint-config-prettier
npm install -D eslint-plugin-prettier
npm install -D eslint-plugin-react
```

- eslint-plugin-import: ES2015+의 import/export 구문을 지원
- eslint-config-airbnb-base: airbnb사의 코딩스타일
- eslint-config-naver: 네이버 자바스크립트 코딩컨벤션
- eslint-config-prettier, eslint-plugin-prettier: 앞선 prettier를 ESLint와 연결하기 위한 플러그인
- eslint-plugin-react: 리액트 전용 플러그인

프로젝트의 .eslintrc 는 아래와 같이 통일합니다.

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-new": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-plusplus": "error",
    "no-param-reassign": "error",
    "no-underscore-dangle": "off",
    "no-return-assign": "error",
    "max-depth": ["error", 2],
    "max-lines-per-function": ["error", 15],
    "import/extensions": ["off"],
    "import/prefer-default-export": "off",
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
  },
};
```

- env는 프로젝트의 사용 환경입니다.
- parserOptions에는 자바스크립트 버전, 모듈 사용 여부 등을 설정할 수 있습니다.
- extends 부분에는 확장 설정을 넣어줍니다. airbnb사의 코딩 스타일을 따르며 prettier을 반영하도록 설정했습니다.
- rules에는 extends와 plugins에 대한 세부 설정을 변경하는 코드를 넣을 수 있습니다.. 값을 0으로 주면 에러 검출을 하지 않고, 1로 주면 경고, 2로 주면 에러를 표시합니다.
