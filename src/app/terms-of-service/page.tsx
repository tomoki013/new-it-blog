const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-glow-primary animate-neon-pulse mb-4">
          Terms of Service
        </h1>
      </header>

      <article className="prose prose-invert mx-auto dark:prose-headings:text-glow-primary dark:prose-a:text-primary dark:hover:prose-a:text-secondary">
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </p>

        <h2>2. Copyright</h2>
        <p>
          The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.
        </p>

        <h2>3. Prohibited Activities</h2>
        <p>
          You are prohibited from using the site or its content for any unlawful purpose, to solicit others to perform or participate in any unlawful acts, or to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances.
        </p>

        <h2>4. Disclaimer of Warranties</h2>
        <p>
          The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
        </p>
      </article>
    </div>
  );
};

export default TermsOfServicePage;
