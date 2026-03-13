const User = require("../models/User");

const users = [
  {
    _id: "65b8e564ea5ce114184ccb96",
    name: "demo user",
    email: "qq87315156@gmail.com",
    password:'$2a$10$68D2p8iZFJh5P.hJhh2nYetAS/bToPRUiBlmBK33xT716eyitc.0G',
    isVerified: true,
    isAdmin: false,
    __v: 0,
  },
  {
    _id: "65c2526fdcd9253acfbaa731",
    name: "rishibakshi",
    email: "qq530191398@gmail.com",
    password: '$2a$10$68D2p8iZFJh5P.hJhh2nYetAS/bToPRUiBlmBK33xT716eyitc.0G',
    isVerified: true,
    isAdmin: false,
    __v: 0,
  },
];

exports.seedUser = async () => {
  try {
    await User.insertMany(users);
    console.log("User seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
