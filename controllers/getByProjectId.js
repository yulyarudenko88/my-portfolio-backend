// const { Project } = require("../../models");

// const { HttpError, ctrlWrapper } = require("../../helpers");

// const getByProjectId = async (req, res) => {
//   const { projectId } = req.params;
//   const result = await Project.findById(projectId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.json(result);
// };

// module.exports = {
//   getByProjectId: ctrlWrapper(getByProjectId),
// };
