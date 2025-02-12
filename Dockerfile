FROM scratch

WORKDIR /app
COPY GooMap-Review-Snatcher .

# 添加執行權限
RUN chmod +x GooMap-Review-Snatcher

CMD ["./GooMap-Review-Snatcher"]