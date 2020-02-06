# postgresqlコンテナ構築用Dockerfile
#製品とvarsionの間は、スペース空けない⇒引数が２つだと思われてしまう
FROM postgres:10.6 


# /docker-entrypoint-initdb.d/にコピーしたsqlファイルは、コンテナ起動時に自動実行される
COPY ./ddl /docker-entrypoint-initdb.d/

