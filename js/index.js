Vue.component("app-article", {
	data: function () {
		return {
			name: "Ahmed",
			count: 0,
		};
	},
	props: ["counter", "posts"],
	template: `
				<div>
					<p @click="count++">Hello
					{{name}} You Clicked This Paragraph
					{{count}} Times And Count Is {{counter}}</p>
					<ul>
						<li v-for="post in posts">
							<h2>{{post.author}}</h2>
							<p>{{post.title}}</p>
						</li>
					</ul>
				</div>
				`,
});

const AppArticleItem = {
	data: function () {
		return {
			name: "Ahmed",
			count: 0,
		};
	},
	template: `
				<div>
					<p>Hello</p>
				</div>
			`,
};

const vm = new Vue({
	el: "#root",
	data: {
		hour: 0,
		minute: 0,
		second: 0,

		// eg: 0,
		// sar: 0,
		// username: "",
		// findLanguage: "",
		// languages: [
		// 	"HTML",
		// 	"Css",
		// 	"Sass",
		// 	"JavaScript",
		// 	"PHP",
		// 	"MySQL",
		// 	"Python",
		// 	"C#",
		// 	"Java",
		// ],
		// name: "Mahmoud Easa",
		// counter: 0,
		// title: "<b class='rank'>Noob</b>",
		// age: 32,
		// message: " Easa",
		// date: "Today",
		// imageSrc: "../images/product-1.jpeg",
		// imageAltText: "Alternate Text",
		// imageUrl: "https://www.google.com",
		// skills: ["HTML", "CSS", "JS"],
		// isSubscribed: false,
		// completedTests: [
		// 	{
		// 		testName: "First Test",
		// 		TestResult: "80%",
		// 	},
		// 	{
		// 		testName: "Second Test",
		// 		TestResult: "70%",
		// 	},
		// 	{
		// 		testName: "Third Test",
		// 		TestResult: "90%",
		// 	},
		// ],
		posts: [
			{ id: 1, author: "Osama", title: "Article Number One" },
			{ id: 2, author: "Ahmed", title: "Article Number Two" },
			{ id: 3, author: "Sayed", title: "Article Number Three" },
			{ id: 4, author: "Sameh", title: "Article Number four" },
		],
	},
	components: {
		"app-article-item": AppArticleItem,
	},
	methods: {
		// sayMyName: function () {
		// 	return this.name;
		// },
		// yourAgeInDays: function () {
		// 	return `Your Age In Days Is: ${this.age * 365}`;
		// },
		// showNewDate: function () {
		// 	this.date = Date();
		// },
		// increaseNum: function () {
		// 	this.counter++;
		// },
		// decreaseNum: function () {
		// 	if (this.counter > 0) {
		// 		this.counter--;
		// 	}
		// },
		// setCounter: function () {
		// 	if (this.counter < 0) {
		// 		this.counter = 0;
		// 	}
		// },

		method: function () {},
	},
	computed: {
		// calcAge: function () {
		// 	console.log("Run");
		// 	return this.message.split("").reverse().join("");
		// },
		// fullName: function () {
		// 	console.log("Run");
		// 	return `${this.name} ${this.message}`;
		// },
		// filterLanguages: function () {
		// 	// const filtering = this.languages.filter(
		// 	// 	(lan) => lan.toLowerCase() === this.findLanguage.toLowerCase()
		// 	// );
		// 	// return lang[0];
		// 	const filtering = new RegExp(this.findLanguage, "i");
		// 	return this.languages.filter((el) => el.match(filtering));
		// },

		// validateUsername: function () {
		// 	if (!this.username) {
		// 		return "Username Cant be Empty";
		// 	} else if (this.username.length < 8) {
		// 		return "Username is Too Short";
		// 	} else if (!isNaN(this.username)) {
		// 		return "Username Cant be Numbers Only";
		// 	} else {
		// 		return `Hello ${this.username} Everything is Good`;
		// 	}
		// },

		comput: function () {},
	},
	watch: {
		// eg: function (v) {
		// 	this.sar = v / 5;
		// },
		// sar: function (v) {
		// 	this.eg = v * 5;
		// },

		hour: function (v) {
			this.minute = v * 60;
		},
		minute: function (v) {
			this.hour = v / 60;
			this.second = v * 60;
		},
		second: function (v) {
			this.minute = v / 60;
		},
	},
});
