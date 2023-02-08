import React from 'react';

import { ICommentStore } from 'src/redux/@types/commentStore';

export type ModalRefType = {
  openModal: () => void;
  closeModal: () => void;
};
export interface ICommentsSection {
  comments: ICommentStore[] | [];
  modalRef: React.ElementRef; // !todo: change correct type
}
