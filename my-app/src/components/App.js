import NavBar from "./NavBar";
import NewsList from "./NewsList";
import NewsAddForm from "./NewsAddForm";
import NewsFilter from "./NewsFilter";

export default function App(props) {
  return (
    <div className="App">
      <div className="container pt-3">
        <NavBar />
        <div className="content">
          <NewsList />
          <div className="content__page">
            <NewsAddForm />
            <NewsFilter />
          </div>
        </div>
      </div>
    </div>
  );
}
