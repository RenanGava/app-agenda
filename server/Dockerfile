FROM node:alpine


WORKDIR /app

COPY . .
COPY tsconfig.json .
COPY package.json .


# copia o 
COPY entrypoint.sh /app/entrypoint.sh
# a parte comentada pode ser usada em caso de pemissao negada.
#  especifico o "chmod +x" que é para permissao de execução
RUN chmod o+x ./entrypoint.sh
ENTRYPOINT "./entrypoint.sh"

# CMD [ "./entrypoint.sh" ]

CMD [ "tail", "-f", "/dev/null" ]
