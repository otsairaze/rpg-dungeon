import { CardList, Header } from "@/components";
import "./globals.css";
import { Container } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <CardList />
      </Container>
    </>
  );
}
