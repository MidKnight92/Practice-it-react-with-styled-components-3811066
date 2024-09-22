import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./components/examples/Home";
import About from "./components/examples/About";
import Contact from "./components/examples/Contact";
import Todo from './components/examples/Todo';
import TodoList from './components/examples/TodoList';
import React from "react";
import BookList from './components/examples/BookList';
import books from './components/challanges/bookData';


// const App = () => {
//    return (<div>
//       <h1>hey</h1>
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to='/about'>About</Link>
//               </li>
//               <li>
//                 <Link to='/home'>Home</Link>
//               </li>
//               <li>
//                 <Link to='/contact'>Contact</Link>
//               </li>
//             </ul>
//           </nav>
//            <Routes>
//             <Route path="/home" element={<Home/>} />
//             <Route path="/about" element={<About/>} />
//             <Route path="/contact" element={<Contact/>} />
//             <Route exact path='/' element={<Home/>} />
//           </Routes>
//         </div>
//       </Router>
//     </div>)
// };

// const App = () => {
//   const todos = ['Buy groceries', 'Finish homework', 'Go for a run'];
//   return <TodoList todos={todos}/>
// }

const App = () => {
  return <BookList books={books}/>
}


export default App;
