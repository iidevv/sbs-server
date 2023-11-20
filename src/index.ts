import express from "express";
import cors from "cors";

import { createHandler } from 'graphql-http/lib/use/express';
import schema from './schema';

import 'dotenv/config';
const port = process.env.PORT || 3001;

const app = express();


// app.use(
//     cors({
//         origin: `http://localhost:${port}`,
//         credentials: true,
//     })
// );

app.all('/graphql', createHandler({ schema }));

app.listen(port, () =>
    console.log(`Server started on http://localhost:${port}`)
);