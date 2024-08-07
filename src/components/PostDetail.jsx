import styles from './PostDetail.module.css'

import { Link } from 'react-router-dom'

const PostDetail = ({ post }) => {
    // Verifica se as propriedades do post estão definidas
    const { image, title, createdBy, tagsArray, id } = post;
    if (!image || !title || !createdBy || !tagsArray || !Array.isArray(tagsArray) || !id) {
        console.log('Alguma propriedade do post não está definida ou é inválida');
        return console.log('Tudo validado')
    }
    
    return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.tags}>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
}

export default PostDetail