# Use a imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação estará em execução (substitua a porta 3000 pela porta que sua aplicação utiliza)
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for executado (ajuste de acordo com seu projeto)
CMD [ "npm", "start" ]