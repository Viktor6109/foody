import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Nav from './nav/nav';
import v4 from 'uuid/v4';
import { css } from 'emotion';
import SignupForm from './SignupForm';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import NoteFilter from './NoteFilter';
import TestComponent from './enhancers/testComponent';
import Modal from './Modal/Modal';
// import withLog from './enhancers/withLog';
// import withToggle from './enhancers/withToggle';
import List from './withToggle/list';
import articles from './menu/menu.json';
import Title from './title';
import Nav from './nav/nav';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPages from './pages/NotFoundPages';
import AboutPage from './pages/AboutPage';

// import { s } from './Modal/Modal.css';

const header = css`
  text-align: center;
`;

const filterNotes = (filter, notes) =>
  notes.filter(note => note.text.toLowerCase().includes(filter.toLowerCase()));

export default class App extends Component {
  state = {
    notes: [],
    filter: '',
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleAddNote = text => {
    if (text !== '')
      this.setState(prevState => ({
        notes: [{ id: v4(), text }, ...prevState.notes],
      }));
  };

  handleDeleteNote = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { notes, filter } = this.state;
    const { isModalOpen } = this.state;

    const filteredNote = filterNotes(filter, notes);
    return (
      <div>
        <h1 className={header}>From in React</h1>
        <SignupForm />
        <NoteEditor onSubmit={this.handleAddNote} />
        <NoteFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <NoteList notes={filteredNote} onDeleteNote={this.handleDeleteNote} />
        <h2 className={header}>React Patterns</h2>
        <TestComponent a="aa" b="b" c="VK" />
        <h2 className={header}>Menu</h2>
        <List items={articles} />

        <>
          <Title text="React Router Basics" />
          <Nav />

          <Switch>
            <Route
              exact
              path="/"
              render={props => <HomePage title="Home Page" {...props} />}
            />
            <Route exact path="/articles" component={ArticlesPage} />
            <Route path="/articles/:id" component={ArticlePage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPages} />
          </Switch>
        </>
        {/* <Modal /> */}
        <>
          <button type="button" onClick={this.openModal}>
            Open Modal
          </button>
          {isModalOpen && (
            <Modal onCloseModal={this.closeModal}>
              <h1> Modal window </h1>
              <p>
                В современных браузерах у скриптов есть атрибуты async и defer,
                которые разрешают браузеру продолжать обработку страницы, но
                применить их здесь нельзя, так как рекламный скрипт захочет
                вызвать document.write именно на этом месте, и браузер не должен
                двигаться вперёд по документу.
              </p>
              <button type="button" onClick={this.closeModal}>
                Close
              </button>
            </Modal>
          )}
        </>
      </div>
    );
  }
}
