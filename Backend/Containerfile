FROM docker.io/python:3.10-slim-buster
WORKDIR /home
COPY . .
RUN chmod +x entrypoint.sh
RUN chmod +x wait-for-it.sh
RUN pip install -r requirements.txt
EXPOSE 8000
ENTRYPOINT [ "/home/entrypoint.sh" ]