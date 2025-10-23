import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-glow-primary animate-neon-pulse mb-4">
          ABOUT ME
        </h1>
        <p className="text-lg text-muted-foreground">
          A little bit about my journey in the tech world.
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <Image
            src="https://via.placeholder.com/256"
            alt="Profile Picture"
            width={256}
            height={256}
            className="rounded-full border-4 border-primary shadow-glow-primary"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-primary mb-4">Jules</h2>
          <p className="text-muted-foreground mb-6">
            Full-stack developer with a passion for creating unique and performant web experiences.
            I thrive on the bleeding edge of technology, constantly exploring new frameworks and design patterns.
            My core belief is that technology should be both functional and beautiful.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="#" className="btn-glow p-2 border border-border rounded-full"><Github /></Link>
            <Link href="#" className="btn-glow p-2 border border-border rounded-full"><Twitter /></Link>
            <Link href="#" className="btn-glow p-2 border border-border rounded-full"><Linkedin /></Link>
            <Link href="mailto:dummy@example.com" className="btn-glow p-2 border border-border rounded-full"><Mail /></Link>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-glow-secondary">SKILLSET</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'Docker', 'Figma', 'Prisma', 'Go'].map(skill => (
            <div key={skill} className="p-4 border border-border rounded-lg bg-card hover:border-primary hover:shadow-glow-primary transition-all">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-glow-secondary">CAREER</h2>
        <div className="relative border-l-2 border-primary/50 pl-8">
            <div className="mb-12">
                <div className="absolute w-4 h-4 bg-primary rounded-full mt-1.5 -left-2 border-2 border-background"></div>
                <p className="text-sm text-muted-foreground">2023 - Present</p>
                <h3 className="text-xl font-semibold text-primary">Lead Frontend Engineer</h3>
                <p className="text-muted-foreground">CyberCorp Inc.</p>
            </div>
            <div className="mb-12">
                <div className="absolute w-4 h-4 bg-primary rounded-full mt-1.5 -left-2 border-2 border-background"></div>
                <p className="text-sm text-muted-foreground">2020 - 2023</p>
                <h3 className="text-xl font-semibold text-primary">Software Engineer</h3>
                <p className="text-muted-foreground">NeoNet Solutions</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
