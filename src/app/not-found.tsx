import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-9xl font-bold text-cyan-400 animate-glitch-translate">404</h1>
      <h2 className="mt-4 text-4xl font-semibold text-white text-glow-primary">Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-400">
        The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <div className="mt-8">
        <Link href="/" className="btn-glow bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors">
            Return to Home
        </Link>
      </div>
    </div>
  );
}
