import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        Evans Github pages
        <div>
          Projects
        </div>
      </div>
      <Footer/>
    </div>
  );
}
