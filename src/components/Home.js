import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import History from './History';

const Home = ({setInputValue}) => {
   const [value,setValue] = useState("");

   const handleClick = () => {
    setInputValue(value);
    setValue("");
   } 
   

   return (
<>
        <div className='inputContainer'>
        <h1>URL <span>Inputshortner</span></h1>

            <div>
                <input type='text' placeholder='Paste your link'
                value={value}
                onChange={e => setValue(e.target.value)} />
                <button onClick={handleClick}> Shortner</button>

                <button> <Link to="/History" > History </Link> </button>
                <Routes>
                        <Route path="/History" element={<History/>} />
                </Routes> 
            </div>
        </div>


    </>
   );
};
export default Home;


// import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// const App = () => {

//    const [name, setName] = useState('');
//    const [pwd, setPwd] = useState('');
//    const [url, setUrl] = useState('');
//    const [date, setDate] = useState('');

//    const handle = () => {
//       localStorage.setItem('Name', name);
//       localStorage.setItem('Password', pwd);
//       localStorage.setItem('Url', url);
//       localStorage.setItem('Date', date);
//    };
//    const remove = () => {
//       localStorage.removeItem('Name');
//       localStorage.removeItem('Password');
//       localStorage.removeItem('Url');
//       localStorage.removeItem('Date');
//    };
//    return (
//       <div className="inputContainer">
//          <h1>URL <span>Inputshortner</span></h1>
//          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
       
//          <input type="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)}/>

//          <input type="url" placeholder="url" value={url} onChange={(e) => setUrl(e.target.value)}/>

//          <input type="date" placeholder="date" value={date} onChange={(e) => setDate(e.target.value)}/>

//          <div>
//             <button onClick={handle}>Done</button>
//          </div>

//          {localStorage.getItem('Name') && (
//             <div>
//                Name: <p>{localStorage.getItem('Name')}</p>
//             </div>
//          )}

//          {localStorage.getItem('Password') && (
//             <div>
//                Password: <p>{localStorage.getItem('Password')}</p>
//             </div>
//          )}

//             {localStorage.getItem('Url') && (
//             <div>
//                Password: <p>{localStorage.getItem('Url')}</p>
//             </div>
//          )}

//             {localStorage.getItem('Date') && (
//             <div>
//                Password: <p>{localStorage.getItem('Date')}</p>
//             </div>
//          )}
//          <div>
//             <button onClick={remove}>Remove</button>
//          </div>
//       </div>
//    );
// };
// export default App;