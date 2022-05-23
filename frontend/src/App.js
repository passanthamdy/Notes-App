import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import NoteList from './pages/NoteList'
import Note from './pages/Note'


function App() {
  return (
    <HashRouter>
    <div className='container dark'>
      <div className='app'>
    <Header/>
    <Routes>
        <Route path="/" element={<NoteList/>}/>
        <Route path="/notes" element={<NoteList/>}/>
        <Route path="/notes/:id" element={<Note/>}/>
        {/* <Route path="*" element={<Error/>}/> */}
    </Routes>
    </div>
    </div>
</HashRouter>
  );
}

export default App;
