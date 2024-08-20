const express = require('express');
const app = express();

let requestCount = 0;
let totalTimeTaken = 0;

app.use((req, res, next) => {
    // Increment the request count
    requestCount++;

    // Record the start time of the request
    req.startTime = Date.now();

    // Call the next middleware or route handler
    next();
});

app.use((req, res, next) => {
    // After the response is sent, calculate the time taken
    res.on('finish', () => {
        const timeTaken = Date.now() - req.startTime;
        totalTimeTaken += timeTaken;

        // Calculate the average time
        const averageTime = totalTimeTaken / requestCount;

        // Add custom headers to the response with the stats
        res.setHeader('X-Request-Count', requestCount);
        res.setHeader('X-Average-Time', averageTime.toFixed(2));
    });

    // Call the next middleware or route handler
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/stats', (req, res) => {
    const averageTime = totalTimeTaken / requestCount;
    res.json({
        requestCount: requestCount,
        averageTime: averageTime.toFixed(2)
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});