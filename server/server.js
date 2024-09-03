import express from 'express';
import cors from 'cors';

const app = express();

const data = [
    {
        username: "JaneDoe123",
        message: "Had an amazing time at the event! Everything was perfect."
    },
    {
        username: "JohnSmith456",
        message: "Great event! Met a lot of interesting people."
    },
    {
        username: "TravelLover789",
        message: "Loved the atmosphere and the food was delicious!"
    },
    {
        username: "NatureFanatic001",
        message: "The outdoor setup was breathtaking. Well done!"
    },
    {
        username: "FoodieQueen",
        message: "The catering was top-notch. Compliments to the chef!"
    }
]

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

app.post("/message", (req, res) => {
    data.push(req.body);
    res.json(req.body);
})

app.get("/messages", (req, res) => {
    res.json(data);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
