const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow cookies (if needed)
    optionsSuccessStatus: 204 // No content status for preflight requests
};

module.exports = corsOptions;
