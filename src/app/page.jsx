import styles from './homepage.module.css';
import Link from 'next/link';
import Navbar from '@/components/featured/Featured';
import Footer from '@/components/footer/Footer';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
