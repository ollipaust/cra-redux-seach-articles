import React from 'react';
import { connect } from 'react-redux';

const applyFilter = searchTerm => article =>
  article.title.toLowerCase().includes(searchTerm.toLowerCase());

const App = ({ articles, searchTerm, onSearch }) =>
  <div className="content">
    <header>
      <h1>
        React+Redux Articles Search
        <sub>
          Example App using create-react-app + redux for state management.
        </sub>
      </h1>
    </header>
    <main>
      <Search value={searchTerm} onSearch={onSearch} />
      <Articles articles={articles.filter(applyFilter(searchTerm))} />
    </main>
  <footer>
  <p>Made by <a href={'https://www.opcostudio.com/'}>Olli Paust</a></p>
  </footer>
  </div>

const Search = ({ value, onSearch, children }) =>
  <div className="searchBox">
    {children} 
    <input
      value={value}
      onChange={event => onSearch(event.target.value)}
      type="text"
      placeholder="Search minimum of 2 characters..."
    />
  </div>

const Articles = ({ articles }) =>
  <ul>
    {articles.map(article =>
      <li key={article.id}>
        <Article article={article} />
      </li>
    )}
  </ul>

const Article = ({ article }) =>
  <a href={article.url} target="_blank">{article.title}</a>

const NoResults = ({ articles }) => {
  if (articles == null) {
    return 'hey'
  }
}
const mapStateToProps = state => ({
  articles: state.articlesState.articles,
  searchTerm: state.searchState.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
