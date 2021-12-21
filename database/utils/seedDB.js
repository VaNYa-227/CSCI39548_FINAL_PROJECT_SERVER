const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		imageUrl: "https://micefa.org/wp-content/uploads/2017/10/hunter.jpg",
		description: "This is a school in NYC.",
		address: "695 Park Ave, New York, NY 10065"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		imageUrl: "https://www.diarystore.com/sites/default/files/featureimage-education/harvard_university_1-min.jpg",
		description: "This is a school in MA.",
		address: "86 Brattle St Cambridge, MA 02138"
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
	  		email: "joeshmo@dummy.com",
			imageUrl: "https://avatarfiles.alphacoders.com/127/127735.png",
			gpa: 0.0
		});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;