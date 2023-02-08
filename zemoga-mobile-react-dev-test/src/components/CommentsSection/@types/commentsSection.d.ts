import React from 'react';

export type ModalRefType = {
  openModal: () => void;
  closeModal: () => void;
};

export interface IComment {
  name: string;
  id?: number;
  email: string;
  body: string;
}

export interface ICommentsSection {
  comments: IComment[] | [];
  modalRef: React.ElementRef; // !todo: change correct type
}
