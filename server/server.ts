import express from "express";
import cors from "cors";
import casual from "casual";
import { SampleType } from "../src/types";

const app = express();
const port = 3001;
app.use(cors());

app.get("/api/sampleData", cors(), (_req, res) => {
  const users: SampleType[] = Array.from({ length: 10 }, (): SampleType => ({
    id: casual.uuid,
    name: casual.name,
    email: casual.email
  }));

  res.json(users);
});

app.listen(port, () => {
  console.log(`Mock server listening at http://localhost:${port}`);
});
