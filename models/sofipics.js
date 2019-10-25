var mongoose = require("mongoose");

var sofipicSchema = new mongoose.Schema({
	name: String,
	image: String,
});

module.exports = mongoose.model("Sofipics", sofipicSchema);
