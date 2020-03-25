FROM ubuntu:16.04

# Install Node
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash \
    && apt-get install nodejs -yq

# Install ImageMagick and GraphicsMagick
RUN apt-get install build-essential libmagick++-dev imagemagick graphicsmagick -yq \
    && ln -s /usr/lib/x86_64-linux-gnu/ImageMagick-6.8.9/bin-Q16/Magick++-config /usr/local/bin/Magick++-config


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
ENTRYPOINT [ "node", "app.js" ]