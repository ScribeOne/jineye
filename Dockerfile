FROM node:13-alpine

# Create and switch to /app
RUN mkdir /app
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install npm packages
COPY package.json /app/
RUN npm install
RUN npm install -g @vue/cli

# Start the app
CMD ["npm", "run", "serve"]