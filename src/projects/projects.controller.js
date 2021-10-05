const projectService = require('./projects.service');

module.exports.createProject = async function (req, res) {
  const blog = req.body;
  const createdBlog = await projectService.createProject(blog);
  return res.json(createdBlog);
};

module.exports.getProjects = async function (req, res) {
  const projects = await projectService.getProjects();
  return res.json(projects);
};

module.exports.getProjectById = async function (req, res) {
  const projectId = req.params.id;
  const project = await projectService.getProjectById(projectId);
  return res.json(project);
};

module.exports.updateProjectById = async function (req, res) {
  const projectId = req.params.id;
  const update = req.body;
  const project = await projectService.updateProjectById(projectId, update);
  return res.json(project);
};
module.exports.deleteProjectById = async function (req, res) {
  const projectId = req.params.id;
  const project = await projectService.deleteProjectById(projectId);
  return res.json(project);
};

module.exports.getHomePage = async function (req, res) {
  res.render('homePage');
};


