
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <header>
        <h1 >JOLLY HOLIDAYS!</h1>
        <nav>
          <ul>
            <li><a href="Home.html">Home</a></li>
            <li><a href="About.html">About</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
      <br></br>
        <h2>Explore the World</h2>
        
        <p>Welcome to our tourist website! Discover exciting destinations and plan your next adventure.</p>
        <br></br>
        <section>
          <h3>Popular Destinations</h3>
          
          <div className='jai'>
            <button className='ja'>
            <a href="https://www.lonelyplanet.com/articles/best-things-to-do-in-paris">Paris</a>
            </button>
            <button className='jp'>
            <a href="https://trulytokyo.com/">Tokyo</a>
            </button>
            <button className='js'>
            <a href="https://travel.usnews.com/features/the-best-new-york-city-tours">New York</a>
            </button>
            </div>
           
          
        </section>
        <div>
          
<br></br>

<br></br>
<br></br>
<br></br>
       
          <table class="center">
        
          
            <tr> 
               <th>SI   NO</th>
               <th>  COUNTRY  </th>
               <th>PRICE</th>
               
             </tr>
             <tr>
               <th>  1 </th>
               <td>PARIS</td>
               <td>100K</td>
               
             </tr>
             <tr> 
               <th>  2  </th>
               <td>NEWYORK</td>
               <td>150K</td>
               
            </tr>
            <tr> 
               <th>  3 </th>
               <td>TOKYO</td>
               <td>300K</td>
               
            </tr>
           </table>
          
        </div>
      </main>
      <button className='aj'>
      <a href="https://www.sotc.in/world-tour-packages">BOOK YOUR JOURNEY</a>

      </button>
      <footer>
        <p>&copy; 2023 JOLLY HOLIDAYS. All rights reserved.</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
