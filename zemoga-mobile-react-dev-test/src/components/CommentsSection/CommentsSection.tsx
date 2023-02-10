import React, { FC, useImperativeHandle, useCallback } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { View, Modal, TouchableOpacity, FlatList } from 'react-native';

import { ICommentsSection } from './@types/commentsSection';
import Comment from './components/Comment/Comment';
import { commentsSectionStyles } from './Styles';
import Header from '../Header/Header';

const CommentsSection: FC<ICommentsSection> = ({ comments = [], modalRef }: ICommentsSection) => {
  const [openModal, setOpenModal] = React.useState(false);

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
  const renderItem = useCallback(
    ({ item: { id, ...rest } }: any) => <Comment key={id} id={id} {...rest} />,
    []
  );
  return (
    <Modal testID="modalComments" animationType="slide" transparent={true} visible={openModal}>
      <View style={commentsSectionStyles.container}>
        <View style={commentsSectionStyles.content}>
          <CloseBtn />
          <Header>Comments</Header>
          <FlatList
            data={comments}
            renderItem={renderItem}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            removeClippedSubviews
            windowSize={10}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CommentsSection;
