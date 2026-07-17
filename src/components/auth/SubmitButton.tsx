interface SubmitButtonProps {
	loading: boolean;
	text: string;
	loadingText: string;
}

export default function SubmitButton({
	loading,
	text,
	loadingText,
}: SubmitButtonProps) {
	return (
		<button
			type="submit"
			disabled={loading}
			className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 font-semibold transition hover:bg-indigo-500 disabled:opacity-60"
		>
			{loading ? loadingText : text}
		</button>
	);
}
