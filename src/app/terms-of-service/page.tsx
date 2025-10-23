const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-glow-primary animate-neon-pulse mb-4">
          利用規約
        </h1>
      </header>

      <article className="prose prose-invert mx-auto dark:prose-headings:text-glow-primary dark:prose-a:text-primary dark:hover:prose-a:text-secondary">
        <h2>1. 規約への同意</h2>
        <p>
          本ウェブサイトにアクセスすることにより、お客様は本利用規約、適用されるすべての法律および規制に拘束されることに同意し、適用される地域の法律を遵守する責任があることに同意するものとします。
        </p>

        <h2>2. 著作権</h2>
        <p>
          本サイトに関連するコンテンツ、構成、グラフィック、デザイン、編集、およびその他の事項は、適用される著作権法に基づき保護されています。これらの事項または本サイトのいかなる部分であっても、お客様による複製、再配布、使用、または公開は固く禁じられています。
        </p>

        <h2>3. 禁止行為</h2>
        <p>
          お客様は、違法な目的で本サイトまたはそのコンテンツを使用すること、他者に違法行為の実行または参加を勧誘すること、または国際、連邦、州、または地域の規制、規則、法律、または条例に違反することは禁じられています。
        </p>

        <h2>4. 保証の否認</h2>
        <p>
          本ウェブサイト上の資料は、「現状有姿」で提供されます。当サイトは、明示または黙示を問わず、いかなる保証も行わず、商品性、特定目的への適合性、または知的財産権の非侵害またはその他の権利侵害に関する黙示の保証または条件を含むがこれらに限定されない、その他すべての保証を否認し、否定します。
        </p>

        <h2>5. 責任の制限</h2>
        <p>
          いかなる場合においても、当サイトまたはその供給者は、当サイト上の資料の使用または使用不能から生じるいかなる損害（データまたは利益の損失、または事業の中断による損害を含むがこれらに限定されない）についても、責任を負わないものとします。
        </p>
      </article>
    </div>
  );
};

export default TermsOfServicePage;
