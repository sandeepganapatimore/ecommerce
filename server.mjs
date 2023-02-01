import app from "./app.mjs";

const port = 8000;

app.listen(port, () => {
  console.log(`server is running om http://localhost:${port}`);
});
