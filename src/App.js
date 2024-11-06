import Navbar from './components/navbar';
import Categories from './components/categories';
import Sale from './components/sale';
import Recommended from './components/recommended';
import Topic from './components/topic';
import Popular from './components/popular';
import Footer from './components/footer';


function App()
{
    return(
          <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Sale></Sale>
    <Recommended></Recommended>
    <Topic></Topic>
    <Popular></Popular>
    <Footer></Footer>
  </div>
    )
}

export default App