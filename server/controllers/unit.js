const asyncHandler = require('express-async-handler')
const sequelize = require('../../sequelize/models')
const AppError = require('../utils/appError')
const { User, Unit } = sequelize

exports.getUnit = asyncHandler(async (req, res, next) => {
  const unit = await Unit.findOne({ where: { code: req.body.code } })
  if (!unit) {
    return next(new AppError('Task not found', 404))
  }
  res.status(200).json({
    status: 'success',
    data: { unit }
  })
})

exports.getUnits = asyncHandler(async (req, res, next) => {
  const units = await Unit.findAll()

  res.status(200).json({
    status: 'success',
    results: units.length,
    data: { units }
  })
})