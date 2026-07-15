import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function Contact() {
	return (
		<Section id="contact">
			<SectionTitle
				subtitle="Contact"
				title="Let's Build Something Great Together"
			/>

			<div className="grid gap-12 lg:grid-cols-2">
				{/* Contact Information */}
				<Card className="p-8">
					<div className="space-y-8">
						<div className="flex items-start gap-4">
							<Mail className="text-indigo-600" />
							<div>
								<h4 className="font-semibold">Email</h4>
								<a
									href={`mailto:${portfolio.contact.email}`}
									className="text-slate-600 hover:text-indigo-600 dark:text-slate-400"
								>
									{portfolio.contact.email}
								</a>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<Phone className="text-indigo-600" />
							<div>
								<h4 className="font-semibold">Phone</h4>
								<a
									href={`tel:${portfolio.contact.phone}`}
									className="text-slate-600 hover:text-indigo-600 dark:text-slate-400"
								>
									{portfolio.contact.phone}
								</a>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<MapPin className="text-indigo-600" />
							<div>
								<h4 className="font-semibold">Location</h4>
								<p className="text-slate-600 dark:text-slate-400">
									{portfolio.contact.location}
								</p>
							</div>
						</div>

						<div className="flex gap-4 pt-6">
							<a
								href="#"
								className="rounded-xl border p-3 transition hover:bg-indigo-600 hover:text-white"
							>
								<Mail size={20} />
							</a>

							<a
								href="#"
								className="rounded-xl border p-3 transition hover:bg-indigo-600 hover:text-white"
							>
								<Mail size={20} />
							</a>
						</div>
					</div>
				</Card>

				{/* Contact Form */}
				<Card className="p-8">
					<form className="space-y-6">
						<div>
							<label className="mb-2 block font-medium">
								Name
							</label>
							<input
								type="text"
								className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-indigo-500 dark:border-slate-700"
							/>
						</div>

						<div>
							<label className="mb-2 block font-medium">
								Email
							</label>
							<input
								type="email"
								className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-indigo-500 dark:border-slate-700"
							/>
						</div>

						<div>
							<label className="mb-2 block font-medium">
								Message
							</label>
							<textarea
								rows={6}
								className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-indigo-500 dark:border-slate-700"
							/>
						</div>

						<Button icon={<Send size={18} />}>Send Message</Button>
					</form>
				</Card>
			</div>
		</Section>
	);
}
