const { check, validationResult } = require("express-validator");

module.exports = function(req, res, next) {
  const {
    name,
    location,
    nearbyInstitutions,
    phoneNo,
    discountOffered,
    fee,
    availableSeating,
    hostelFeatures,
    specialFeatures
  } = req.body;

  check(phoneNo).isNumeric();
  check(discountOffered).isNumeric();
  //   check(fee.admission).isNumeric();
  //   check(fee.monthly.single).isNumeric();
  //   check(fee.monthly.double).isNumeric();
  //   check(fee.monthly.triple).isNumeric();
  //   check(fee.monthly.fourS).isNumeric();

  const errors = validationResult(req);
  console.log(errors.errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else return res.status(400);
};
