const express = require('express');
const mongoose = require('mongoose');
const scheduleRoutes = require('./routes/scheduleRoutes');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
// connected to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/transportation', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error(error));
// Routes
app.use('/api/schedules', scheduleRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
