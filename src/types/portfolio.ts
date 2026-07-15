export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface Skill {
	name: string;
	level: number;
	category: string;
}

export interface Experience {
	company: string;
	role: string;
	duration: string;
	location: string;
	project: string;
	description: string[];
	technologies: string[];
}

export interface Project {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	live?: string;
	github?: string;
}

export interface Service {
	title: string;
	description: string;
	icon: string;
}

export interface Testimonial {
	name: string;
	designation: string;
	message: string;
}

export interface Achievements {
	title: string;
	organization: string;
	year: string;
	description: string;
}

export interface Education {
	degree: string;
	specialization: string;
	college: string;
	year: string;
}

export interface PortfolioData {
	hero: {
		name: string;
		designation: string;
		subtitle: string;
		years: string;
		profileImage: string;
		resume: string;
	};

	about: {
		title: string;
		description: string[];
	};

	contact: {
		phone: string;
		email: string;
		location: string;
	};

	socials: SocialLink[];

	services: Service[];

	skills: Skill[];

	experience: Experience[];

	projects: Project[];

	testimonials: Testimonial[];

	achievements: Achievements[];

	education: Education[];
}
