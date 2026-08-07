import Container from "@/components/layout/container";
import PageWrapper from "@/components/layout/page-wrapper";
import Section from "@/components/layout/section";

export default function Home() {
  return (
    <PageWrapper>
      <Container>
        <Section>Navbar Placeholder</Section>

        <Section>Hero Placeholder</Section>

        <Section>Featured Project Placeholder</Section>

        <Section showDivider={false}>Footer Placeholder</Section>
      </Container>
    </PageWrapper>
  );
}
