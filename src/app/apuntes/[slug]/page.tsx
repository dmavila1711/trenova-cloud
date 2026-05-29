import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { MessageCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { mdxComponents } from "@/components/mdx/components";
import {
  getAllApuntes,
  getApunteBySlug,
  formatApunteDate,
} from "@/lib/apuntes";
import { WHATSAPP_URL } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const apuntes = await getAllApuntes();
  return apuntes.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const apunte = await getApunteBySlug(slug);
  if (!apunte) return { title: "Apunte no encontrado" };
  return {
    title: apunte.title,
    description: apunte.excerpt,
    alternates: { canonical: `/apuntes/${apunte.slug}` },
    openGraph: {
      title: `${apunte.title} · Trenova Cloud`,
      description: apunte.excerpt,
      url: `/apuntes/${apunte.slug}`,
      type: "article",
      publishedTime: apunte.date,
    },
  };
}

const prettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
};

export default async function ApunteDetailPage({ params }: Props) {
  const { slug } = await params;
  const apunte = await getApunteBySlug(slug);
  if (!apunte) notFound();

  return (
    <>
      <Header />
      <article className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase mb-4">
            {formatApunteDate(apunte.date)} · {apunte.readingTimeMin} MIN DE
            LECTURA
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-paper mb-12">
            {apunte.title}
          </h1>

          <div>
            <MDXRemote
              source={apunte.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
                },
              }}
            />
          </div>

          <div className="mt-20 pt-12 border-t border-stroke/40">
            <p className="font-mono text-xs tracking-[0.3em] text-sky uppercase mb-3">
              ¿Hablamos?
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-paper mb-6">
              ¿Tu empresa enfrenta algo similar?
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-pill bg-electric px-6 py-3 text-base font-medium text-paper hover:bg-sky transition-colors"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
