module.exports = {
  prompts: {
    name: {
      type: String,
      required: false,
      message: 'Project Name',
      default: 'rollup-library'
    },
    author: {
      type: String,
      message: 'Project Author'
    },
    vsersion: {
      type: String,
      message: 'Project Version',
      default: '0.0.1'
    },
    description: {
      type: String,
      required: false,
      message: 'Project description',
      default: 'A new Rollup project'
    }
  }
}
