import type { PortfolioData } from '../types/portfolio';

export const portfolio: PortfolioData = {
	hero: {
		name: 'Siva Ram Sunnapu',

		designation: 'Senior Frontend Engineer',

		subtitle:
			'Building enterprise-grade React & Angular applications with over 11 years of experience delivering scalable products across Telecom, Banking, and E-Commerce.',

		years: '11+',

		profileImage: '/profile.png',

		resume: '/resume.pdf',
	},

	about: {
		title: 'About Me',

		description: [
			"I'm a Senior Software Developer passionate about building scalable, user-centric web applications that solve real business problems.",

			"Over the last 11+ years I've worked across Telecom, Banking, Retail and E-Commerce domains delivering enterprise software used by thousands of users.",

			'I enjoy designing clean architectures, building reusable UI components and mentoring developers while continuously learning new technologies.',
		],
	},

	contact: {
		phone: '+91 9676551157',

		email: 'sunnapu.sivaram@gmail.com',

		location: 'Hyderabad, India',
	},

	socials: [
		{
			name: 'LinkedIn',
			url: '#',
			icon: 'linkedin',
		},
		{
			name: 'GitHub',
			url: '#',
			icon: 'github',
		},
		{
			name: 'Email',
			url: 'mailto:sunnapu.sivaram@gmail.com',
			icon: 'mail',
		},
	],

	services: [
		{
			title: 'Frontend Development',

			description:
				'Modern React, Angular, TypeScript applications with scalable architecture.',

			icon: 'layout',
		},

		{
			title: 'Backend Development',

			description:
				'Node.js, Express APIs, authentication and REST integrations.',

			icon: 'server',
		},

		{
			title: 'UI Engineering',

			description:
				'Responsive interfaces focused on accessibility and user experience.',

			icon: 'monitor',
		},

		{
			title: 'Technical Leadership',

			description:
				'Architecture planning, mentoring and Agile delivery for enterprise teams.',

			icon: 'users',
		},
	],

	skills: [
		{ name: 'React', level: 95, category: 'Frontend' },
		{ name: 'Angular', level: 98, category: 'Frontend' },
		{ name: 'TypeScript', level: 94, category: 'Language' },
		{ name: 'JavaScript', level: 97, category: 'Language' },
		{ name: 'Node.js', level: 88, category: 'Backend' },
		{ name: 'Express', level: 86, category: 'Backend' },
		{ name: 'MongoDB', level: 82, category: 'Database' },
		{ name: 'HTML5', level: 99, category: 'Frontend' },
		{ name: 'CSS3', level: 98, category: 'Frontend' },
		{ name: 'SCSS', level: 95, category: 'Frontend' },
		{ name: 'Bootstrap', level: 94, category: 'Frontend' },
		{ name: 'Angular Material', level: 95, category: 'Frontend' },
	],

	experience: [
		{
			company: 'Tata Consultancy Services',

			role: 'Senior Software Developer',

			duration: '2022 - Present',

			location: 'Hyderabad',

			project: 'TM Vital & Converge ICT',

			description: [
				'Developed enterprise CRMS applications for Telecom clients.',
				'Built reusable Angular components.',
				'Integrated REST APIs.',
				'Improved application performance.',
				'Worked with Agile teams.',
			],

			technologies: ['Angular', 'React', 'TypeScript', 'Node', 'REST'],
		},

		{
			company: 'Skuad Lab India',

			role: 'Software Development Engineer',

			duration: '2020 - 2022',

			location: 'Hyderabad',

			project: 'Internal Framework',

			description: [
				'Created reusable JavaScript framework.',
				'Improved security.',
				'Maintained UI libraries.',
			],

			technologies: ['JavaScript', 'HTML', 'CSS'],
		},

		{
			company: 'RYPE Online Services',

			role: 'Software Development Engineer',

			duration: '2017 - 2020',

			location: 'Hyderabad',

			project: 'PTT Trade & Winning Appliances',

			description: [
				'Developed enterprise Angular applications.',
				'Migrated Angular versions.',
				'Implemented authentication.',
			],

			technologies: ['Angular', 'TypeScript', 'Bootstrap', 'RxJS'],
		},

		{
			company: 'Maple Alliance',

			role: 'Software Engineer',

			duration: '2016 - 2017',

			location: 'Hyderabad',

			project: 'E Retail Box',

			description: [
				'Built UI modules.',
				'Integrated payment gateways.',
				'Developed REST APIs.',
			],

			technologies: ['AngularJS', 'SQL Server', 'Bootstrap'],
		},

		{
			company: 'N-Axis Software',

			role: 'Junior Software Developer',

			duration: '2015 - 2016',

			location: 'Hyderabad',

			project: 'Celebrity Calls',

			description: [
				'Developed MVC applications.',
				'Created SQL procedures.',
				'Built business layer.',
			],

			technologies: ['ASP.NET MVC', 'C#', 'SQL'],
		},
	],

	projects: [
		{
			title: 'Telecom CRMS',

			description:
				'Enterprise telecom management platform handling agreements and customer lifecycle.',

			image: '/projects/crms.png',

			technologies: ['Angular', 'REST', 'TypeScript'],
		},

		{
			title: 'Converge ICT',

			description:
				'Large B2B/B2C commerce platform serving international markets.',

			image: '/projects/converge.png',

			technologies: ['Angular', 'Node', 'Bootstrap'],
		},

		{
			title: 'Winning Appliances',
			description:
				'Enterprise ecommerce platform with Angular migration and optimization.',

			image: '/projects/winning.png',

			technologies: ['Angular', 'RxJS'],
		},
	],

	testimonials: [
		{
			name: 'Tech Lead',

			designation: 'TCS',

			message:
				'Siva consistently delivers scalable solutions with exceptional code quality.',
		},

		{
			name: 'Project Manager',

			designation: 'Converge ICT',

			message:
				'An excellent engineer who combines technical depth with strong collaboration.',
		},
	],

	achievements: [
		{
			title: 'Excellent Performer Award',
			organization: 'Maple Alliance Tech Solutions',
			year: '2017',
			description:
				'Awarded for outstanding contribution and exceptional performance.',
		},

		{
			title: 'Technical Fest Coordinator',
			organization: 'TRR College of Engineering',
			year: '2013',
			description:
				'Coordinator and Problem Setter for Annual Technical Coding Fest.',
		},
	],

	education: [
		{
			degree: 'Bachelor of Technology',
			specialization: 'Information Technology',

			college: 'TRR College of Engineering (JNTUH)',

			year: '2010 - 2014',
		},
	],
};
