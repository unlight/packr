var merge, glob, concat, write, env, pipeline, select, reject, mocha, babel, browserSync, process;
var uglify, ngAnnotate, debug, postcss, ava;

module.exports = function(pipelines) {

	pipelines["build"] = [
		glob({basePath: "src"}, "*.js"),
		babel({modules: "common"}),
		// env(uglify(), ["production"]),
		write("lib"),
	];

	pipelines["tests"] = [
		glob("{src,test}/*.js"),
		pipeline({ activate: true }, "ava", { activate: true }, "eslint"),
	];

	pipelines.explicit["ava"] = [
		process("ava.cmd")
	];

	pipelines.explicit["eslint"] = [
		process("eslint.cmd src")
	];
};