exports.success = (message, data) => {
  return {message, data};
};
exports.error = (message, error) => {
  return {message, error};
};

exports.getUniqueId = (sauces) => {
  const saucesIds = sauces.map((sauce) => sauce.id);
  const maxId = saucesIds.reduce((a, b) => Math.max(a, b));
  const uniqueId = maxId + 1;

  return uniqueId;
};
