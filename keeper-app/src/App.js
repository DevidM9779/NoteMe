import logo from './logo.svg';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Note from "./Components/Note"
import notes from "./notes"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer/>
      {console.log(notes)}
      {notes.map((note) => {
        return (
          <Note
            key={note.key}
            title={note.title}
            content={note.content}
          />
        )
      })}
    </div>
  );
}

export default App;
