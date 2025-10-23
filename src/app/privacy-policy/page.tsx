const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-glow-primary animate-neon-pulse mb-4">
          プライバシーポリシー
        </h1>
      </header>

      <article className="prose prose-invert mx-auto dark:prose-headings:text-glow-primary dark:prose-a:text-primary dark:hover:prose-a:text-secondary">
        <h2>1. はじめに</h2>
        <p>
          本プライバシーポリシーは、お客様が当ウェブサイトを訪問された際に、当サイトがどのようにお客様の個人情報を収集、使用、保護するかについて説明するものです。
        </p>

        <h2>2. 収集する情報</h2>
        <p>
          当サイトのお問い合わせフォームをご利用の際に、お名前、メールアドレス、メッセージなどの個人情報をご提供いただく場合があります。
          また、当サイトでは Google Analytics を使用して、ウェブサイトのトラフィックに関する匿名データを収集しています。これには、IPアドレス、ブラウザの種類、訪問したページなどの情報が含まれます。
        </p>

        <h2>3. お客様の情報の使用方法</h2>
        <p>
          お問い合わせフォームを通じて収集した情報は、お客様からのお問い合わせに返信するためにのみ使用されます。
          Google Analytics によって収集されたデータは、ユーザーの行動を理解し、当サイトを改善するために役立てられます。
        </p>

        <h2>4. 情報の共有と開示</h2>
        <p>
          当サイトは、お客様の個人を特定できる情報を、外部の第三者に販売、交換、またはその他の方法で譲渡することはありません。
        </p>

        <h2>5. 免責事項</h2>
        <p>
          当ブログで提供される情報は、情報提供のみを目的としています。当サイト上のいかなる情報の正確性または完全性についても、当サイトは一切の表明または保証を行いません。また、当サイト上のリンクをたどって見つかったいかなる情報の正確性または完全性についても、当サイトは一切の表明または保証を行いません。
        </p>
      </article>
    </div>
  );
};

export default PrivacyPolicyPage;
