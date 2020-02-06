# postgresqlコンテナ構築用Dockerfile

FROM postgres: 10.6

# /docker-entrypoint-initdb.d/にコピーしたsqlファイルは、コンテナ起動時に自動実行される
COPY ./ddl /docker-entrypoint-initdb.d/

