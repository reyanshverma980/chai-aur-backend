import "dotenv/config";
import connectToDB from "./db/index.js";
import { app } from "./app.js";

connectToDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error: ", err);
      throw err;
    });
		
    app.listen(process.env.PORT || 8000, () => {
      console.log(`app listening on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed!", err);
  });
