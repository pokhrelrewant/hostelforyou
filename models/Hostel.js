const mongoose = require("mongoose");

const HostelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  nearbyInstitutions: [{}],
  phoneNo: {
    type: String,
  },
  discountOffered: {
    type: Number,
  },
  fee: {
    admission: Number,
    monthly: [
      { single: Number, double: Number, triple: Number, fourS: Number },
    ],
  },
  availableSeating: [
    {
      single: Number,
      double: Number,
      triple: Number,
      fourS: Number,
    },
  ],
  hostelFeatures: [
    {
      timesFoodOffered: Number,
      notableFeatures: Array,
      laundry: [
        {
          availablePerWeek: String,
        },
      ],
      furnitureAndClothing: Array,
    },
  ],
  specialFeatures: [{}],
  photos: {
    type: String,
  },
  slug: {
    type: String,
  },
});

module.exports = Hostel = mongoose.model("hostel", HostelSchema);
