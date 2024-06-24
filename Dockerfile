# 기본 이미지로 Node.js 사용
FROM node:20-alpine AS build

# 작업 디렉토리 설정
WORKDIR /src

# 종속성 설치를 위해 package.json 및 package-lock.json 복사
COPY package.json package-lock.json ./

# 소스 코드 복사
COPY . .

# 포트 3000 노출
EXPOSE 3000

# Nginx 실행 명령어 설정
CMD ["npm", "start"]
