const Project = require('./Projects.model');

module.exports.createProject = async function (blog) {
  return Project.create(blog);
};

module.exports.getProjects = async function () {
  return Project.find({});
};

module.exports.getProjectById = async function (ProjectId) {
  return Project.findById(ProjectId);
};

module.exports.updateProjectById = async function (ProjectId, update) {
  return Project.findByIdAndUpdate(ProjectId, update, { new: true });
};

module.exports.deleteProjectById = async function (ProjectId) {
  return Project.findByIdAndDelete(ProjectId);
};
