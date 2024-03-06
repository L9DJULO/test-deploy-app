import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import './Petite.css'
	
function App() {
   return (
   <>
      <Header />
      <MainContent companyName= "La ABC corp" />
      <Footer publishMonth = "October" publishYear= "2012"/>
   </>
   );
}
	
export default App;