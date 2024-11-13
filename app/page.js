import Header from './components/Header';
import SignUpForm from './components/SignUpForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-950 gap-10 flex flex-col w-full min-h-screen">
      <Header />
      <SignUpForm />
      <Footer />
    </main>
  );
}
