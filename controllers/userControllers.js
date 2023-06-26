import asyncHandler from "express-async-handler";

// @desc    Test user route
// @route   GET /api/users/test
// @access  Public
const testUser = asyncHandler(async (req, res) => {
  const { name } = req.body;

  res.status(201).json({ name });
});

export { testUser };
