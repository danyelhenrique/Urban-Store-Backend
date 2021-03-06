import "./Config/dotenv"
// import "./Config/mongoDb"
import "./Database"

import app from "./server"

const PORT = process.env.PORT || 4594

app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${app.graphqlUrl}`)
)
