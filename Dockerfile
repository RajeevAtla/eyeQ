FROM elixir:latest

RUN apt-get update
RUN apt-get install -y tesseract-ocr libtesseract-dev inotify-tools
WORKDIR /eyeQ
COPY . .
RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix deps.get
RUN mix deps.compile
RUN mix assets.deploy
RUN mix compile
ENV PORT 4000
EXPOSE ${PORT}
USER default
CMD ["mix", "phx.server"]