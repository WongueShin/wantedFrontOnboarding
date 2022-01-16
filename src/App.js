import './App.css';
import MainBar from './components/MainBar';
import TopBanner from './components/TopBanner';

function App() {
  return (
    <div className="App">
      <MainBar/>
      <main className='Main'>
        <TopBanner/>
        <div 
          className='mainContent' 
          style={{
            backgroundColor: "rgba(0,0,0,0.175)",
            height: "45rem"
        }}>
          <h3>
            content
          </h3>
        </div>
      </main>
      <div className='Footer' style={{
        height: "5rem"
      }}>
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
