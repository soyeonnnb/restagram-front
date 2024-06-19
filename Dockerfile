# 기본 이미지로 Node.js 사용
FROM node

# 작업 디렉토리 설정
WORKDIR /restagram-front

# 종속성 설치를 위해 package.json 및 package-lock.json 복사
COPY package.json package-lock.json ./

# npm 종속성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# React 애플리케이션 빌드
RUN npm run build

# 포트 3000 노출
EXPOSE 3000

# 애플리케이션 실행 명령어 설정
CMD ["npm", "start"]
