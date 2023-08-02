FROM node:alpine


WORKDIR /app

COPY . .
COPY tsconfig.json .
COPY package.json .

# a parte comentada pode ser usada em caso de pemissao negada.
#  especifico o "chmod +x"
# COPY entrypoint.sh /app/entrypoint.sh
# RUN chmod +x /app/entrypoint.sh
# ENTRYPOINT ["/app/entrypoint.sh"]

CMD [ "./entrypoint.sh" ]

# CMD [ "tail", "-f", "/dev/null" ]
