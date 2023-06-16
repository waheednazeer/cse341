module.exports = (mongoose) => {
  const Temple = mongoose.model(
    'temples',
    mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        email: String,
        favoriteColor: String,
        birthday: String
      },
      { timestamps: true }
    )
  );

  return Temple;
};
