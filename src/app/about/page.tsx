import Image from 'next/image';
import { Timeline } from '@/components/features/about/Timeline';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-glow-primary animate-neon-pulse mb-4">
          私について
        </h1>
        <p className="text-lg text-muted-foreground">
          技術の世界での私の旅路について少しお話しします。
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <Image
            src="/images/introduce.jpg"
            alt="Profile Picture"
            width={256}
            height={256}
            className="rounded-full border-4 border-primary shadow-glow-primary"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-primary mb-4">Tomokichi</h2>
          <p className="text-muted-foreground mb-6">
            Next.jsとTypeScriptを軸に、再利用性の高いコンポーネント設計と、誰もがストレスなく使えるUI/UXの実現に情熱を注いでいます。
            この技術への探究心は、自身の「旅」の経験と深く結びついています...
          </p>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-glow-secondary">SKILLSET</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          {['Next.js', 'TypeScript', 'React', 'Tailwind CSS'].map(skill => (
            <div key={skill} className="p-4 border border-border rounded-lg bg-card hover:border-primary hover:shadow-glow-primary transition-all">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <Timeline />
    </div>
  );
};

export default AboutPage;
