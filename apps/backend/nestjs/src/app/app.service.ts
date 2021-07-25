import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World !';
  }

  getHealthCheck(): string {
    return `
      <!doctype html>
      <html lang=en>
      <head>
      <meta charset=utf-8>
      <title>blah</title>
      </head>
      <body>
      <p>I'm secundo the content</p>
      <script src="https://cdn.socket.io/3.1.3/socket.io.min.js" integrity="sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh" crossorigin="anonymous"></script>
      <script>
        const socket = io();
        setInterval(() => {
          socket.emit("events", {message: "Hellow", timestamp: new Date().getTime() });
        }, 1000);
      </script>
      </body>
      </html>
    `
  }
}
