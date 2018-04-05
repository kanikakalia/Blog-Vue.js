const post = [
  {
    id: 1,
    title: 'Fusce ullamcorper tellus',
    content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.',
    imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
  },
  {
    id: 2,
    title: 'Donec vitae suscipit lectus, a luctus diam.',
    content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
    imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
  },
  {
    id: 3,
    title: 'Vestibulum condimentum quam',
    content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
    imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
  }
];
/* eslint-disable */
export default post;

export function getPost (id, cb) {
  // fake an API request
  setTimeout(() => {
    if (post[id]) {
      cb(null, post[id])
    } else {
      cb(new Error('Post not found.'))
    }
  }, 100)
}
