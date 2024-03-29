import {getEditedTime} from '../utils/getTime';
import {imgWrap} from '../utils/imgWrap';

let initialState: StateType = {
  dialogs: [
    {id: '1', name: 'Dimych', srs: imgWrap('/img/user5.png')},
    {id: '2', name: 'Andrew', srs: imgWrap('/img/user7.png')},
    {id: '3', name: 'Sveta', srs: imgWrap('/img/1761894.png'),},
    {id: '4', name: 'Sasha', srs: imgWrap('/img/Sveta.png'),},
    {id: '5', name: 'Valera', srs: imgWrap("/img/1067538.png"),},
    {
      id: '6', name: 'Viktor',
      srs: `${process.env.PUBLIC_URL}/img/png-transparent-account-avatar-profile-user-avatars-icon.png`
    },
  ],
  messages: [
    {id: 1, message: 'Hi', time: '18:12', userId: '0'},
    {id: 2, message: 'Hello', time: '18:10', userId: '1'},
    {id: 3, message: 'How are you?', time: '18:14', userId: '1'},
    {id: 4, message: 'Good, and you?', time: '18:15', userId: '0'},
    {id: 5, message: 'I am fine. What are you doing', time: '18:18', userId: '1'},
  ],
};
export const dialogsReducer = (state: StateType = initialState, action: DialogsActionType): StateType => {
  switch (action.type) {
    case 'dialogs/ADD-MESSAGE':
      let newMessage: MassageType = {
        id: state.messages.length,
        message: action.message,
        time: getEditedTime(),
        userId: '0'
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    case 'dialogs/ADD-FRIEND-MESSAGE': {
      let newFriendsMessage: MassageType = {
        id: state.messages.length,
        message: 'It\'s very good',
        time: getEditedTime(),
        userId: '1'
      };
      return {
        ...state,
        messages: [...state.messages, newFriendsMessage],
      };
    }
    default:
      return state;
  }
};
export const addMessage = (message: string, userId: string) => ({
  type: 'dialogs/ADD-MESSAGE',
  message,
  userId
} as const);
export const addFriendMessage = () => ({type: 'dialogs/ADD-FRIEND-MESSAGE'} as const);


export type DialogType = {
  id: string, name: string, srs: string,

}
export type DialogsType = DialogType[]

export type MassageType = {
  id: number
  message: string, time: string, userId: string
}
export type MessagesType = MassageType[]

export type AddMessageTypeAT = ReturnType<typeof addMessage>
export type  updateNewMessageTextTypeAT = { type: 'dialogs/UPDATE-NEW-MESSAGE-TEXT', newText: string }

export type StateType = {
  dialogs: DialogsType
  messages: MessagesType,
}
export type DialogsActionType = AddMessageTypeAT | ReturnType<typeof addFriendMessage>
