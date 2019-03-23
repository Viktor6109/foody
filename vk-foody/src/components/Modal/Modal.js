import React, { Component, createRef } from 'react';

import s from './Modal.module.css';

export default class Modal extends Component {
  containerRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressedEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressedEsc);
  }

  handlePressedEsc = e => {
    const { onCloseModal } = this.props;
    if (e.code !== 'Escape') return;
    onCloseModal();
  };

  handleModalClick = e => {
    const { onCloseModal } = this.props;
    if (e.target !== this.containerRef.current) return;
    onCloseModal();
  };

  render() {
    const { children } = this.props;
    return (
      <div
        className={s.backdrop}
        ref={this.containerRef}
        onClick={this.handleModalClick}
      >
        <div className={s.modalWindow}>{children}</div>
      </div>
    );
  }
}
