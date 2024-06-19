FROM node
WORKDIR /restagram-front
COPY package.json package-lock.json ./
RUN npm install 
COPY . .

# React 애플리케이션 빌드
RUN npm run build

EXPOSE 3000