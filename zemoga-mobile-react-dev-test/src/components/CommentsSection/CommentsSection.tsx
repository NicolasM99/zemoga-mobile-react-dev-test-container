import React, { useState, FC, useImperativeHandle } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { View, Modal, TouchableOpacity, ScrollView } from 'react-native';

import { ICommentStore } from 'src/redux/@types/commentStore';

import { ICommentsSection } from './@types/commentsSection';
import Comment from './components/Comment/Comment';
import { commentsSectionStyles } from './Styles';
import Header from '../Header/Header';

const CommentsSection: FC<ICommentsSection> = ({ comments = [], modalRef }: ICommentsSection) => {
  const [openModal, setOpenModal] = useState(false);

  useImperativeHandle(modalRef, () => ({
    closeModal: () => setOpenModal(false),
    openModal: () => setOpenModal(true)
  }));

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const CloseBtn = () => (
    <TouchableOpacity onPress={() => handleCloseModal()} style={commentsSectionStyles.closeBtn}>
      <FontAwesome5 name="times" size={20} />
    </TouchableOpacity>
  );
  return (
    <Modal animationType="slide" transparent={true} visible={openModal}>
      <View style={commentsSectionStyles.container}>
        <View style={commentsSectionStyles.content}>
          <CloseBtn />
          <Header>Comments</Header>
          <ScrollView>
            {comments.map(({ id, ...rest }: ICommentStore) => (
              <Comment key={id} id={id} {...rest} />
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CommentsSection;
