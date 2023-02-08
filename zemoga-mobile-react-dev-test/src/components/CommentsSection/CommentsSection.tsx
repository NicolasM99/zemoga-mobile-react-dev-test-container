import React, { useState, FC, useImperativeHandle } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { View, Modal, Alert, TouchableOpacity, ScrollView } from 'react-native';

import { IComment, ICommentsSection } from './@types/commentsSection';
import Comment from './components/Comment/Comment';
import { commentsSectionStyles } from './Styles';
import Header from '../Header/Header';

const mockedComments = [
  {
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
  },
  {
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
  },
  {
    id: 3,
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
  },
  {
    id: 4,
    name: 'alias odio sit',
    email: 'Lew@alysha.tv',
    body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
  },
  {
    id: 5,
    name: 'vero eaque aliquid doloribus et culpa',
    email: 'Hayden@althea.biz',
    body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et'
  }
];

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
    <TouchableOpacity onPress={() => handleCloseModal()}>
      <View style={commentsSectionStyles.closeBtn}>
        <FontAwesome5 name="times" size={20} />
      </View>
    </TouchableOpacity>
  );
  return (
    <Modal animationType="slide" transparent={true} visible={openModal}>
      <View style={commentsSectionStyles.container}>
        <View style={commentsSectionStyles.content}>
          <CloseBtn />
          <Header>Comments</Header>
          <ScrollView>
            {mockedComments.map(({ id, ...rest }: IComment) => (
              <Comment key={id} {...rest} />
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CommentsSection;
