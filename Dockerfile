FROM node:22.14.0

WORKDIR /app
# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "start"]
