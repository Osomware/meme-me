export const dummyPosts = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'allybenwich',
      username: 'ally:)',
      email: 'allybenwich@gmail.com',
      avatar: {
        sex: 'woman',
        faceColor: '#F9C9B6',
        earSize: 'small',
        eyeStyle: 'smile',
        noseStyle: 'long',
        mouthStyle: 'peace',
        shirtStyle: 'polo',
        glassesStyle: 'round',
        hairColor: '#506AF4',
        hairStyle: 'womanShort',
        hatStyle: 'beanie',
        hatColor: '#D2EFF3',
        eyeBrowStyle: 'up',
        shirtColor: '#F4D150',
        bgColor: '#6BD9E9'
      }
    },
    title:
      'pulchitudinous insanity. #fyp #fyp #poems #poetsoftiktok #originalpoem #original #acting #skit #act',
    content: [
      'https://images.unsplash.com/photo-1689363199550-d0f417ed21db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    ],
    reactions: [
      {
        type: 'heart',
        count: '2.6M'
      },
      {
        type: 'comment',
        count: '16.4K'
      },
      {
        type: 'bookmark',
        count: '448.3K'
      },
      {
        type: 'share',
        count: '14.1K'
      }
    ],
    isFollowed: false,
    created_at: '2023-07-17T02:28:01Z',
    url: 'https://www.meme-me.com/@ally:)/posts/1'
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'James Bond',
      username: 'double07',
      email: 'jamesbond007@gmail.com',
      avatar: {
        sex: 'woman',
        faceColor: '#F9C9B6',
        earSize: 'big',
        eyeStyle: 'smile',
        noseStyle: 'short',
        mouthStyle: 'smile',
        shirtStyle: 'short',
        glassesStyle: 'none',
        hairColor: '#fff',
        hairStyle: 'normal',
        hatStyle: 'none',
        hatColor: '#000',
        eyeBrowStyle: 'up',
        shirtColor: '#77311D',
        bgColor: 'linear-gradient(45deg, #ff1717 0%, #ffd368 100%)'
      }
    },
    title: 'One of the great things inl ife is to not. #fyp #fyp #acting #skit #act',
    content: [
      'https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      'https://plus.unsplash.com/premium_photo-1688431299086-bf835ca28a9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
    ],
    reactions: [
      {
        type: 'heart',
        count: '2.6M'
      },
      {
        type: 'comment',
        count: '16.4K'
      },
      {
        type: 'bookmark',
        count: '448.3K'
      },
      {
        type: 'share',
        count: '14.1K'
      }
    ],
    isFollowed: false,
    created_at: '2023-03-02T02:28:01Z',
    url: 'https://www.meme-me.com/@double07/posts/2'
  },
  {
    id: 3,
    user: {
      id: 3,
      name: 'Najwa Zebian',
      username: 'najwazebian',
      email: 'navjwazebian@gmail.com',
      avatar: {
        sex: 'woman',
        faceColor: '#AC6651',
        earSize: 'big',
        eyeStyle: 'oval',
        noseStyle: 'long',
        mouthStyle: 'laugh',
        shirtStyle: 'short',
        glassesStyle: 'square',
        hairColor: '#506AF4',
        hairStyle: 'womanLong',
        hatStyle: 'none',
        hatColor: '#FC909F',
        eyeBrowStyle: 'upWoman',
        shirtColor: '#F4D150',
        bgColor: 'linear-gradient(45deg, #176fff 0%, #68ffef 100%)'
      }
    },
    title: 'Let them go #motivation #inspiration #positive #positivemindset',
    content: [
      'https://images.unsplash.com/photo-1688048110668-f07715ee9156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=733&q=80',
      'https://images.unsplash.com/photo-1689327021885-c9091f4a2aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    ],
    reactions: [
      {
        type: 'heart',
        count: '93.5K'
      },
      {
        type: 'comment',
        count: '528'
      },
      {
        type: 'bookmark',
        count: '12K'
      },
      {
        type: 'share',
        count: '11.8K'
      }
    ],
    isFollowed: true,
    created_at: '2023-04-15T02:28:01Z',
    url: 'https://www.meme-me.com/@najwazebian/posts/3'
  }
]

export type IPost = (typeof dummyPosts)[0]
