const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Trim Level Schema
const TrimLevelSchema = new Schema({
  trim: String,
  price: Number,
  features: [String]
});

// Emissions Schema
const EmissionsSchema = new Schema({
  co2: String,
  compliance: String
});

// Warranty Schema
const WarrantySchema = new Schema({
  basic: String,
  powertrain: String
});

// Maintenance Costs Schema
const MaintenanceCostsSchema = new Schema({
  annual_service: Number,
  common_repairs: {
    brake_pads: Number,
    oil_change: Number
  }
});

// User Submissions Schema
const UserSubmissionSchema = new Schema({
  username: String,
  photo: String,
  review: String
});

// FAQ Schema
const FAQSchema = new Schema({
  question: String,
  answer: String
});

// Car Schema
const CarSchema = new Schema({
  id: String,
  make: String,
  model: String,
  year: Number,
  price_range: {
    min: Number,
    max: Number
  },
  overall_rating: Number,
  type: String,
  trim_levels: [TrimLevelSchema],
  detailed_description: String,
  fuel_type: String,
  emissions: EmissionsSchema,
  warranty: WarrantySchema,
  maintenance_costs: MaintenanceCostsSchema,
  user_submissions: [UserSubmissionSchema],
  images: [String],
  faqs: [FAQSchema]
});

// Export the Car model
const carSchema = mongoose.model('Car', CarSchema);

module.exports = Car;
