/*
This is empty on purpose! Your code to build the resume will go here.
 */





var bio={
	"name" : "Ji Yang",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "213-706-2192",
		"email" : "yang547@usc.edu",
		"github" : "yyssjj33",
		"twitter" : "@yangji1993",
		"location" : "USC, Los Angeles, CA"
	},
	"welcomeMessage" : "Seeking a computer science related internship for summer 2016.",
	"skills" : ["Java", "Python", "R", "HTML", "CSS", "JavaScript","C/C++","Matlab"],
	"bioPic" : "images/selfi.jpg"
};

var education={
	"schools" :[
		{
			"name" : "University of Southern California",
			"degree" : "MS",
			"major" : "Computer Science",
			"location" : "Los Angeles, CA",
			"graduationYear" : 2017,
			"courses" : ["Introduction to Computer Network", "Intro to JavaScript"]
		},

		{
			"name" : "Wuhan University",
			"degree" : "BS",
			"major" : "Biology",
			"location" : "Wuhan, China",
			"graduationYear" : 2015,
			"courses" : ["Algorithm I", "Intro to Data science"]
		}

	],
	"onlineCourses":[
		{
			"title" : "JavaScript Syntax",
			"site"  : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804"
		},
		{
			"title" : "intro to HTML and CSS",
			"site"  : "Coursera",
			"date" :2014,
			"url" : "https://www.coursera.com"
		}

	]
}

var works = {
	"fulltime" : [
		{

		},
		{

		}
	],
	"intern":[
		{
			"employer" : "Wuhan University, School of Computer Science, Prof. Wang",
			"title" : "researcher",
			"location": "Wuhan, China",
			"date" : "2014/10--2015/02",
			"description": "Processed and obtained data by SQL and MDX language, and obtained data and parameters from database, obtained  multi-dimensional data through MDX.Prepared sales statements with open source BI suit in Pentaho.Processed and edited webpage with Javascript, HTML and CSS.Built a model of sales data with R language to forecast sales volume.",


		},
		// {
		// 	"employer" : "Wuhan University, School of Computer Science, Prof. Wang",
		// 	"title" : "researcher",
		// 	"location": "Wuhan, China",
		// 	"date" : "2014/10",
		// 	"description": "Processed and obtained data by SQL and MDX language, and obtained data and parameters from database, obtained  multi-dimensional data through MDX.Prepared sales statements with open source BI suit in Pentaho.Processed and edited webpage with Javascript, HTML and CSS.Built a model of sales data with R language to forecast sales volume.",
		// }

		
	]
}

var projects = {
    "acdamic": [
        {
            "title": "Random Walker",
            "date": "2015/09",
            "description": "This random walk simulates the wandering of an intoxicated person on a square street grid. The drunkard will start out in the middle of the grid and will randomly pick one of the four compass directions, and take a step in that direction, then another step from that new location in a random direction, etc. This will be repeated some number of times determined by the user. The output will display the path of the drunkard as a sequence of line-segments.",
            "images": [
                "images/randomwalker.jpg"
            ]
        },
        {
            "title": "Solve Bulgarian Solitaire Game",
            "date": "2015/09",
            "description": "<p>Implemented a <a class='inlinea' href='https://en.wikipedia.org/wiki/Bulgarian_solitaire'>SolitaireBoard</a> class and other helper class, for a given initial board state or random one, give the every step how to solve the problem. Finish it in linear time.</p>",
            "images": [
                "images/SolitaireBoard.jpg",
                "images/SolitaireBoard2.jpg",
                "images/SolitaireBoard3.jpg"
            ]
        },
        {
            "title": "Maze Solver",
            "date": "2015/10",
            "description": "Recurssively solved a maze search problem, and visualized it.",
            "images": [
                "images/Maze1.jpg",
                "images/Maze2.jpg"
            ]
        },
        {
            "title": "Random Text Generator",
            "date": "2015/11",
            "description": "Implemented Random Text Generator. Based on word-level Markov text generating rule, used java(hashmap) to simulate a text generator. Given a sourcefile, randomly generator a somehow meaningful text.",
            "images": [
                "images/textgen.jpg"
            ]
        }
    ],
    "projects": [
        {},
        {}
    ]
}
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%","<a class='inlinea' href='mailto:yang547@usc.edu'>"+bio.contacts.email+"</a>");
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedMsg);



$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);

});


if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length ; i++) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	};
}
function displayWork(){
	for(job in works.intern){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",works.intern[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",works.intern[job].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%",works.intern[job].date);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%",works.intern[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

function inName(){
	var name = window.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

	return name[0]+" "+"(Jeremy)"+ " "+name[1];
}

var name = $("#name").text();
$('#header').append(internationalizeButton);

projects.display = function(){
	for(project in projects.acdamic){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.acdamic[project].title);
		console.log(formattedTitle);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.acdamic[project].date);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.acdamic[project].description);
		$(".project-entry:last").append(formattedDescription);
		if(projects.acdamic[project].images.length > 0){
			for(image in projects.acdamic[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.acdamic[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}

}
projects.display();

function displayEducation(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedName);
	
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
	
		var  formattedDates =  HTMLschoolDates.replace("%data%",education.schools[school].graduationYear);
		$(".education-entry:last").append(formattedDates);
	
		var formattedLocation =  HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

	}

}
displayEducation();
$("#education").append(HTMLonlineClasses);
function displayonlinCourses(){
	$("#education").append(HTMLschoolStart);
	for(onlineCourse in education.onlineCourses){
		var formattedName = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
		$(".education-entry:last").append(formattedName);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].site);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].date);
		$(".education-entry:last").append(formattedDates);
		var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedUrl);
	}
}

displayonlinCourses();

$("#mapDiv").append(googleMap);




