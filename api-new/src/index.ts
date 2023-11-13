import app from "./app";

// https://www.youtube.com/watch?v=B-T69_VP2Ls

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
