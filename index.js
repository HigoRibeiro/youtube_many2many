const app = require('express')();
const bodyParser = require('body-parser');

const { Post, Tag } = require('./models');

app.use(bodyParser.json());

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: Tag,
          as: 'tags',
          through: { attributes: [] },
        },
      ],
    });

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ err });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const { tags, ...data } = req.body;
    const post = await Post.create(data);

    if (tags && tags.length > 0) {
      post.setTags(tags);
    }

    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ err });
  }
});

app.put('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    const { tags, ...data } = req.body;
    post.update(data);

    if (tags && tags.length > 0) {
      post.setTags(tags);
    }

    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ err });
  }
});

app.post('/tags', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);

    return res.status(200).json(tag);
  } catch (err) {
    return res.status(500).json({ err });
  }
});

app.listen(3000);
