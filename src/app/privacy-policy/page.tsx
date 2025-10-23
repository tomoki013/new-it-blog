const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-glow-primary animate-neon-pulse mb-4">
          Privacy Policy
        </h1>
      </header>

      <article className="prose prose-invert mx-auto dark:prose-headings:text-glow-primary dark:prose-a:text-primary dark:hover:prose-a:text-secondary">
        <h2>1. Introduction</h2>
        <p>
          This privacy policy explains how we collect, use, and protect your personal information when you visit our website.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect personal information from you such as your name, email address, and message when you use our contact form.
          Additionally, we use Google Analytics to collect anonymous data about website traffic. This includes information like your IP address, browser type, and pages visited.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          The information collected through the contact form is used solely to respond to your inquiries.
          The data collected by Google Analytics helps us understand user behavior and improve our website.
        </p>

        <h2>4. Information Sharing and Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
        </p>

        <h2>5. Disclaimer</h2>
        <p>
          The information provided on this blog is for informational purposes only. We make no representations as to the accuracy or completeness of any information on this site or found by following any link on this site.
        </p>
      </article>
    </div>
  );
};

export default PrivacyPolicyPage;
