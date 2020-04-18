# To change this license header, choose License Headers in Project Properties.
# To change this template file, choose Tools | Templates
# and open the template in the editor.
FROM node:13-stretch
COPY . /
RUN rm ./build &> /dev/null
RUN npm i && npm run build
CMD npm install -g serve && serve -s build
